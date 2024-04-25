import type { UseFetchOptions } from "nuxt/app";

export async function useCustomFetch<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {}
) {

  const userAuth = useCookie("accessToken");
  const config = useRuntimeConfig()
  const customFetch = $fetch.create({
    baseURL: config.public.apiBase ?? "https://api.nuxt.com",
    onRequest({ request, options, error }) {
      if (userAuth.value) {
        options.headers = {Authorization: `Bearer ${userAuth.value}`};
      }
    },
    onResponseError({ response }) {
      if (response.status === 401) {
        return navigateTo("/");
      }
    },
    onResponse({response}){
      console.log(response)
  }});
  return await useFetch(url, {
    ...options,
    $fetch: customFetch,
  });
}

export async function login(data: {id:string, password:string}) {
  return await useCustomFetch<{data:{accessToken:string, refreshToken: string}, message:string}>("/login", {
    method: "POST",
    body: data,
  });
}
