import type { UseFetchOptions } from "nuxt/app";

// generic T 에 return 타입 넣어줄 것
export async function useCustomFetch<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  const userAuth = useCookie("accessToken");
  const config = useRuntimeConfig();
  const customFetch = $fetch.create({
    baseURL: config.public.apiBase ?? "https://api.nuxt.com",
    onRequest({ request, options, error }) {
      if (userAuth.value) {
        options.headers = { Authorization: `Bearer ${userAuth.value}` };
      }
    },
    onResponseError({ request, response }) {
      // refresh 로직 추가
      if (response.status === 401) {
        userAuth.value = "";
        return navigateTo("/");
      }
    },
    onResponse({ response }) {},
  });
  return await useFetch(url, {
    ...options,
    $fetch: customFetch,
  });
}
