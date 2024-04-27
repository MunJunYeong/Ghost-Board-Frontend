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
const {data} = await useCustomFetch<{data:any, message:any}>("/boards/1/posts", {method:'POST', body:{
    "title": "ssssssssssss",
    "content": "ssssssssssssssssssssssssssssssssssssssss"
}})

const { data: board } = await useCustomFetch<{ data: any; message: any }>(
  "/boards",
  {}
);
const { data: post } = await useCustomFetch<{ data: any; message: any }>(
  "/boards/1/posts",
  {}
);
</script>

<template>
  <section
    class="w-full h-full items-center justify-center justify-items-center flex"
  >
    <!-- <form v-on:submit="()=>onClick(id,password)">
    <div>
      <label for="username">id: </label>
      <input id="id" type="text" v-model="id">
    </div>
    <div>
      <label for="password">password: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form> -->
    <div class="w-80 flex flex-col gap-2">
      <div class="text-4xl font-bold w-full text-center">보드임</div>
      <div class="flex h-12">
        board:result
        <div>{{ board }}</div>
        post:result
        <div>{{ post }}</div>
      </div>
    </div>
  </section>
</template>
