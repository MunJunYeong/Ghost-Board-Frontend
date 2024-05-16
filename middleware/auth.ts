export default defineNuxtRouteMiddleware((to) => {
    const router = useRouter();
    const accessToken = useCookie("accessToken")
    if (!accessToken.value) {
        return router.push({ path: "/login" });
    }
    return 
  })
  