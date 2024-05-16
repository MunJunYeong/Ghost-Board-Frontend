<script setup lang="ts">
let username: string;
let email: string;
let errorMessage = ref("");

async function onClick() {
  const { data } = await findUserId({ username, email });
  // TODO: 성공했을 떄 어떻게 할지
  if (data.value) {
    console.log("성공");
    return;
  }
}
</script>

<template>
  <section
    class="my-auto w-full h-full items-center justify-center justify-items-center flex"
  >
    <form
      v-on:submit.prevent="() => onClick()"
      class="w-80 flex flex-col gap-2"
    >
      <div class="text-4xl font-bold w-full text-center mb-8">아이디 찾기</div>
      <input
        type="email"
        v-model="email"
        placeholder="email"
        class="px-2 w-full h-12 border border-emerald-300 rounded-lg"
      />
      <input
        v-model="username"
        placeholder="username"
        class="px-2 w-full h-12 border border-emerald-300 rounded-lg"
      />
      <div class="flex h-12">
        <ButtonBasic
          type="submit"
          :onClick="() => onClick()"
          text="찾기"
          :fullWidth="true"
        ></ButtonBasic>
      </div>
      <!-- Error 알림 -->
      <ErrorAlert :description="errorMessage" />
    </form>
  </section>
</template>
