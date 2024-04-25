<script lang="ts">
export default {};
</script>

<template>
  <section class="w-full h-full items-center justify-center justify-items-center flex">
    <div
      class="w-80 flex flex-col gap-2"
    >
    <div class="text-4xl font-bold w-full text-center">로그인</div>
    <input-form-input placeholder="ID"/>
    <input-form-input placeholder="Password"/>
      <div class="flex h-12">
        <button-basic-btn text="login"></button-basic-btn>
      </div>
      <div class="flex h-12">
        <button-google-auth-btn text="login"></button-google-auth-btn>
      </div>
    </div>
  </section>
</template>

