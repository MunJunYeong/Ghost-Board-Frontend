<script setup lang="ts">
let id: string;
let password: string;
let email: string;
let username: string;
let code: string;
let isMailSend: boolean = false;
let isCheckedUsername = ref(false);
let isCheckedEmail = ref(false);
let errorMessage = ref("");
let isSendingMail = ref(false);

async function checkUserName() {
  const { data, error } = await useCheckUserName({ username });
  if (data.value) {
    isCheckedUsername.value = true;
  }

  // 에러 알림 띄워주는 작업 추가해야 함.
  if (error.value) {
    isCheckedUsername.value = false;
    errorMessage.value = error.value.data.message;
    return;
  }
}

async function sendEmail() {
  const { data, error } = await useSendEmail({ email });
  // 알림 띄워주는 작업 추가해야 함.
  if (data.value) {
    isSendingMail.value = false;
    isMailSend = true;
  }

  // 에러 알림 띄워주는 작업 추가해야 함.
  if (error.value) {
    isSendingMail.value = false;
    errorMessage.value = error.value.data.message;
    return;
  }
}
async function checkEmail() {
  const { data, error } = await useCheckEmail({ email, code });
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

async function Signup() {
  const { data, error } = await useSignup({ id, email, password, username });
  if (data.value) {
    return navigateTo("/auth/login");
  }
  if (error.value) {
    errorMessage.value = error.value.data.message;
    return;
  }
}
</script>

<template>
  <section
    class="my-auto w-full h-full items-center justify-center justify-items-center flex"
  >
    <!-- 이걸 통채로 컴포넌트로 나눌지 고민 -->
    <form v-on:submit.prevent="() => Signup()" class="w-80 flex flex-col gap-2">
      <div class="text-4xl font-bold w-full text-center mb-4">회원가입</div>
      <div class="flex w-full justify-between gap-2">
        <!-- username -->
        <input
          v-model="username"
          placeholder="username"
          class="px-2 flex-1 h-12 border border-emerald-300 rounded-lg"
        />
        <ButtonBasic
          type="button"
          :onClick="() => checkUserName()"
          :text="isCheckedUsername ? '✅확인' : '확인'"
        ></ButtonBasic>
      </div>
      <!-- id -->
      <input
        v-model="id"
        placeholder="id"
        class="px-2 w-full h-12 border border-emerald-300 rounded-lg"
      />
      <!-- password -->
      <input
        v-model="password"
        placeholder="password"
        class="px-2 w-full h-12 border border-emerald-300 rounded-lg"
      />
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
      <div v-if="isMailSend" class="flex w-full justify-between gap-2">
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
      <div class="flex h-12">
        <ButtonBasic
          type="submit"
          text="회원가입"
          :fullWidth="true"
          :disabled="!isCheckedEmail || !isCheckedUsername"
        ></ButtonBasic>
      </div>
      <!-- Error 알림 -->
      <ErrorAlert :description="errorMessage" />
    </form>
  </section>
</template>
