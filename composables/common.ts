import type { UseFetchOptions } from "nuxt/app";

// generic T 에 return 타입 넣어줄 것
export async function useCustomFetch<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  console.log(options,' 옵션임')
  const userAuth = useCookie("accessToken");
  const config = useRuntimeConfig();
  const customFetch = $fetch.create({
    baseURL: config.public.apiBase ?? "https://api.nuxt.com",
    onRequest({ request, options, error }) {
      if (userAuth.value) {
        options.headers = { Authorization: `Bearer ${userAuth.value}`};
      }
    },
    // 에러처리 로직 추가
    onResponseError({ response }) {
      if (response.status === 401) {
        return navigateTo("/");
      }
    },
    onResponse({ response }) {
      // console.log(response)
    },
  });
  return await useFetch(url, {
    
    ...options,
    $fetch: customFetch,
  });
}
