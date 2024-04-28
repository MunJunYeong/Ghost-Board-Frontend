<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
// board 생성기 주석풀고 새로고침 하면 됨
// const { data } = await useCustomFetch<{ data: any; message: any }>("/boards", {
//   method: "POST",
//   body: {
//     title: "ssszxcvzxcvss",
//     description: "ssssasdassssssss",
//   },
// });
// post 생성기 주석풀고 새로고침 하면 됨
// const { data } = await useCustomFetch<{ data: any; message: any }>(
//   "/boards/1/posts",
//   {
//     method: "POST",
//     body: {
//       title: "ssssssssssss",
//       content: "ssssssssssssssssssssssssssssssssssssssss",
//     },
//   }
// );


</script>

<template>
  <section
    class="w-full h-full items-center justify-center justify-items-center flex"
  >
    <div class="flex flex-col gap-2">
      <div class="text-4xl font-bold w-full text-center"> TOOD: 보드 작성 페이지</div>
      
    </div>
  </section>
</template>
