<template>
    <section>
      <p class="text-red-500">TODO: This page is main page.</p>
      <button v-on:click="logOut">로그아웃</button>
    </section>
  </template>

<script setup lang="ts">
const cookie = useCookie('accessToken')
function logOut() {
  cookie.value =null
}
</script>

<style lang="scss" scoped>

</style>