<template>
  <div>
    <h1>로그인 성공!</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    const tokenObj = this.$.appContext.app.$nuxt._route.query;

    if (!tokenObj) {
        // TODO: error 처리
        return 
    }

    const accesscookie = useCookie("accessToken");
    const refreshCookie = useCookie("refreshToken");
    accesscookie.value = tokenObj.accessToken;
    refreshCookie.value = tokenObj.refreshToken;
    // TODO: 일반적인 login 성공과 동일하게
  },
};
</script>