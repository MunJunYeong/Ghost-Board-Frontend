export default defineNuxtRouteMiddleware((to) => {
    // TODO: JWT 검증로직이 추가되어야 함.
    const accessToken = useCookie("accessToken")
    if (!accessToken.value) {
        return navigateTo("/login");
    }
    return 
  })
  