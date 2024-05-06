<template>
  <section
    class="my-auto w-full h-full items-center justify-center justify-items-center flex flex-col"
  >
    <div class="w-80 flex flex-col gap-4 relative">
      <div class="text-4xl font-bold w-full text-center">찾기</div>
      <div class="font-bold text-2xl">ID 찾기</div>
      <div></div>
      <NuxtLink to="/auth/find/id" ><button class="p-2 rounded-md bg-emerald-300 w-full">ID 찾기</button> </NuxtLink>
      <div class="font-bold text-2xl">PW 찾기</div>
      <NuxtLink to="/auth/find/pw" ><button class="p-2 rounded-md bg-emerald-300 w-full">PW 찾기</button> </NuxtLink>
    </div>
  </section>
</template>
