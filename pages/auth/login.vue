<script setup lang="ts">
let id: string;
let password: string;
let errorMessage = ref("");

async function onClick() {
  const { data, error } = await useLogin({ id, password });
  if (data.value) {
    const accessToken = data.value?.data.accessToken;
    const refreshToken = data.value?.data.refreshToken;
    const accesscookie = useCookie("accessToken");
    const refreshCookie = useCookie("refreshToken");
    accesscookie.value = accessToken;
    refreshCookie.value = refreshToken;
    return navigateTo("/");
  }
  // TODO: 에러메시지 user 친화적인 문구로 변경 필요
  if (error.value) {
    errorMessage.value = error.value.data.message;
    return;
  }
}
</script>

<template>
  <section
    class="my-auto w-full h-full items-center justify-center justify-items-center flex flex-col"
  >
    <form
      v-on:submit.prevent="() => onClick()"
      class="w-80 flex flex-col gap-2 relative"
    >
      <div class="text-4xl mb-8 font-bold w-full text-center">로그인</div>
      <input
        v-model="id"
        placeholder="id"
        class="px-2 w-full h-12 border border-emerald-300 rounded-lg"
      />
      <input
        type="password"
        v-model="password"
        placeholder="password"
        class="px-2 w-full h-12 border border-emerald-300 rounded-lg"
      />
      <div>
        <NuxtLink to="/auth/find" class="text-gray-500"> ID/PW 찾기 </NuxtLink>|
        <NuxtLink to="/auth/signup" class="text-gray-500"> 회원가입 </NuxtLink>
      </div>
      <div class="flex h-12">
        <ButtonBasic
          type="submit"
          :onClick="() => onClick()"
          text="Login"
          :fullWidth="true"
        ></ButtonBasic>
      </div>
      <div class="flex h-12">
        <ButtonGoogleAuth text="login"></ButtonGoogleAuth>
      </div>
      <!-- Error 알림 -->
      <ErrorAlert :description="errorMessage" />
    </form>
  </section>
</template>
