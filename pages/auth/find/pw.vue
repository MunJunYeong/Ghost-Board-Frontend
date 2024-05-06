<script setup lang="ts">
let email: string;
let username: string;
let password: string;
let checkPassword: string;
let code: string;
let isMailSend = ref(false);
let isCheckedEmail = ref(false);
let errorMessage = ref("");

async function sendEmail() {
  const { data, error } = await sendFindPwEmail({ email });
  // 알림 띄워주는 작업 추가해야 함.
  if (data.value) {
    isMailSend.value = true;
  }

  // 에러 알림 띄워주는 작업 추가해야 함.
  if (error.value) {
    errorMessage.value = error.value.data.message;
    return;
  }
}
async function checkEmail() {
  const { data, error } = await checkFindPwEmail({ email, code });
  if (data.value) {
    isCheckedEmail.value = true;
  }

  // 에러 알림 띄워주는 작업 추가해야 함.
  if (error.value) {
    isCheckedEmail.value = false;
    errorMessage.value = error.value.data.message;
    return;
  }
}

async function ChangePw() {
  if (checkPassword === password) {
    const { data, error } = await changePw({ email, password, username });
    if (data.value) {
      console.log('성공')
      return 
    }
    if (error.value) {
      errorMessage.value = error.value.data.message;
      return;
    }
  }
  errorMessage.value = "비밀번호를 확인해 주세요.";
  return;
}
</script>

<template>
  <section
    class="my-auto w-full h-full items-center justify-center justify-items-center flex"
  >
    <form
      v-on:submit.prevent="() => ChangePw()"
      class="w-80 flex flex-col gap-2"
    >
      <div class="text-4xl mb-8 font-bold w-full text-center">
        비밀번호 찾기
      </div>

      <div class="flex w-full justify-between gap-2">
        <input
          v-model="email"
          placeholder="email"
          class="px-2 flex-1 h-12 border border-emerald-300 rounded-lg"
        />
        <ButtonBasic
          type="button"
          :onClick="() => sendEmail()"
          :text="isMailSend ? '✅전송' : '전송'"
        ></ButtonBasic>
      </div>
      <div class="flex w-full justify-between gap-2">
        <input
          v-model="code"
          placeholder="code"
          class="px-2 flex-1 h-12 border border-emerald-300 rounded-lg"
        />
        <ButtonBasic
          type="button"
          :onClick="() => checkEmail()"
          :text="isCheckedEmail ? '✅확인' : '확인'"
        ></ButtonBasic>
      </div>
      <input
        v-model="username"
        placeholder="username"
        class="px-2 w-full h-12 border border-emerald-300 rounded-lg"
      />

      <input
        type="password"
        v-model="password"
        v-if="isCheckedEmail"
        placeholder="password"
        class="px-2 w-full h-12 border border-emerald-300 rounded-lg"
      />
      <input
        type="password check"
        v-model="checkPassword"
        v-if="isCheckedEmail"
        placeholder="password"
        class="px-2 w-full h-12 border border-emerald-300 rounded-lg"
      />
      <div v-if="isCheckedEmail" class="flex h-12">
        <ButtonBasic
          type="submit"
          :onClick="() => ChangePw()"
          text="비밀번호 변경"
          :fullWidth="true"
        ></ButtonBasic>
      </div>
      <!-- Error 알림 -->
      <ErrorAlert :description="errorMessage" />
    </form>
  </section>
</template>
