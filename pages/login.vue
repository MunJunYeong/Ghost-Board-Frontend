<script setup lang="ts">
let id: string;
let password: string;

// TODO: 우선 custom fetch 로직만 분리해 놓았음 추가로 API에 대한 모듈화 진행해야함.
async function onClick(id: string, password: string) {
  const {data} = await login({id,password})
  if(data.value){
    const accessToken = data.value?.data.accessToken
    const refreshToken = data.value?.data.refreshToken
    const accesscookie = useCookie('accessToken')
    const refreshCookie = useCookie('refreshToken')
    accesscookie.value=accessToken
    refreshCookie.value=refreshToken
    return navigateTo('/')
  }
  
}
</script>

<template>
  <section
    class="w-full h-full items-center justify-center justify-items-center flex"
  >
    <form v-on:submit.prevent ="()=>onClick(id,password)" class="w-80 flex flex-col gap-2">
      <div class="text-4xl font-bold w-full text-center">로그인</div>
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
      <div class="flex h-12">
        <ButtonBasic
        type="submit"
          :onClick="() => onClick(id, password)"
          text="login"
        ></ButtonBasic>
      </div>
      <div class="flex h-12">
        <ButtonGoogleAuth text="login"></ButtonGoogleAuth>
      </div>
    </form>
  </section>
</template>
