export default defineNuxtRouteMiddleware(() => {
    const router = useRouter();
    const accessToken = useCookie("accessToken")
    if (!accessToken.value) {
        return router.push({ path: "/login" });
    }
    return 
  })
  