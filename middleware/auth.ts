export default defineNuxtRouteMiddleware((to) => {
    const accessToken = useCookie("accessToken")
    if (!accessToken.value) {
        return navigateTo("/login");
    }
    return 
  })
  