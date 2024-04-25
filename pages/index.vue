<template>
    <section>
      <p class="text-red-500">This page will be displayed at the index route.</p>
      <div class="border-2 text-7xl">ssssss</div>
      <button v-on:click="logOut">sssssssssssssssssssssssssssssssssssssssssss</button>
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