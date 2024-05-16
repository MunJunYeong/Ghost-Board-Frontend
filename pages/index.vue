<template>
  <section>
    <p class="text-red-500">TODO: This page is main page.</p>
    <button v-on:click="logOut">로그아웃</button>
  </section>
</template>

<script setup lang="ts">
const accessToken = useCookie("accessToken");
const refreshToken = useCookie("refreshToken");

function logOut() {
  accessToken.value = null;
  refreshToken.value = null;
}
</script>

<style lang="scss" scoped></style>
