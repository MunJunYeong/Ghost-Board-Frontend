import type { UseFetchOptions } from "nuxt/app";
export async function useCustomFetch<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  const accessToken = useCookie("accessToken");
  const refreshToken = useCookie("refreshToken");

  const config = useRuntimeConfig();
  const customFetch = $fetch.create({
    baseURL: config.public.apiBase ?? "https://api.nuxt.com",
    retryStatusCodes: [401],
    retry: 1,
    onRequest({ options }) {
      if (accessToken.value) {
        options.headers = { Authorization: `Bearer ${accessToken.value}` };
      }
    },
    onResponseError({ response }) {
      if (response.status === 401) {
        if (refreshToken.value) {
          refreshAccessToken();
        } else if (!accessToken.value && !refreshToken.value) {
          navigateTo("/");
        }
      }
    },
    // onResponse({ response }) {},
  });

  async function refreshAccessToken() {
    if (refreshToken.value) {
      const refreshOptions: UseFetchOptions<{
        data: { accessToken: string };
        message: string;
      }> = {};
      refreshOptions.headers = {
        Authorization: `Bearer ${accessToken.value}`,
        refresh: refreshToken.value,
      };
      const { data, error } = await useFetch(
        `${config.public.apiBase}/refresh`,
        {
          method: "POST",
          ...refreshOptions,
        }
      );
      if (data.value) {
        accessToken.value = data.value?.data.accessToken;
      }
      if (error.value) {
        if (error.value.data.code === 401) {
          accessToken.value = null;
          refreshToken.value = null;
          navigateTo("/");
        }
      }
      return data;
    }
  }

  return await useFetch(url, {
    ...options,
    $fetch: customFetch,
  });
}
