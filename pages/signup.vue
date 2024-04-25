<script setup lang="ts">
let id: string;
let password: string;
let email: string;
let username: string;
let isEmailChecked: string;

// 우선 custom fetch 로직만 분리해 놓았음 추가로 API에 대한 모듈화 진행해야함.
function onClick(id: string, password: string) {
  const data= useCustomFetch("/signup", {
    method: "POST",
    body: { id, password },
  });
  console.log(data)
}
</script>

<template>
  <section
    class="w-full h-full items-center justify-center justify-items-center flex"
  >
    <form v-on:submit.prevent ="()=>onClick(id,password)" class="w-80 flex flex-col gap-2">
      <div class="text-4xl font-bold w-full text-center">회원가입</div>
      <input
        v-model="id"
        placeholder="id"
        class="px-2 w-full h-12 border border-emerald-300 rounded-lg"
      />
      <input
        v-model="password"
        placeholder="password"
        class="px-2 w-full h-12 border border-emerald-300 rounded-lg"
      />
      <input
        v-model="email"
        placeholder="email"
        class="px-2 w-full h-12 border border-emerald-300 rounded-lg"
      />
      <div class="flex h-12">
        <ButtonBasic
        type="btn"
          :onClick="() => onClick(id, password)"
          text="이메일 인증"
        ></ButtonBasic>
      </div>
      <input
        v-model="username"
        placeholder="username"
        class="px-2 w-full h-12 border border-emerald-300 rounded-lg"
      />
      
      <div class="flex h-12">
        <ButtonBasic
        type="submit"
          :onClick="() => onClick(id, password)"
          text="회원가입"
        ></ButtonBasic>
      </div>
    </form>
  </section>
</template>
