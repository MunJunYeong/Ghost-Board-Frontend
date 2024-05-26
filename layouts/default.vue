<template>
  <div class="bg-white flex min-h-screen flex-col">
    <div class="w-full flex shadow-lg py-3 px-4">
      <NuxtLink to="/"
        ><NuxtImg class="w-40" src="/logo.svg"></NuxtImg
      ></NuxtLink>
      <div class="flex-1" />

      <div class="mr-4 flex items-center">
        <UButton
          icon="i-heroicons-bars-3"
          class="p-0"
          size="xl"
          color="black"
          square
          @click="isOpen = true"
          variant="ghost"
        />
      </div>
    </div>
    <div class="flex-1 h-full flex">
      <slot />
    </div>
    <!-- <div class="flex-1 h-full">
      <slot class="h-full"></slot>
    </div> -->
  </div>
  <USlideover v-model="isOpen">
    <UCard
      class="flex flex-col flex-1"
      :ui="{
        body: { base: 'flex-1' },
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-300',
      }"
    >
      <template #header>
        <div class='text-2xl font-bold text-gray-500'>메뉴</div>
      </template>

      <div class="p-4 flex-1 flex flex-col">
        <UVerticalNavigation
          :ui="{
            active: 'dark:before:!bg-emerald-300',
            inactive: 'dark:hover:before:!bg-emerald-300/50',
          }"
          :links="accessToken ? loggedInMenu : notLoggedInMenu"
        >
          <template #default="{ link }">
            <span class="text-2xl font-bold relative">{{ link.label }}</span>
          </template>
        </UVerticalNavigation>
      </div>
    </UCard>
  </USlideover>
</template>

<script setup lang="ts">
const notLoggedInMenu = [
  {
    label: "로그인",
    to: "/auth/login",
  },
  {
    label: "회원가입",
    to: "/auth/signup",
  },
  {
    label: "ID / PW 찾기",
    to: "/auth/find",
  },
];

const loggedInMenu = [
  {
    label: "내 정보",
    to: "/",
  },
  {
    label: "게시판",
    to: "/board/1/post",
  },
];
const accessToken = useCookie("accessToken");
const isOpen = ref(false);
</script>
