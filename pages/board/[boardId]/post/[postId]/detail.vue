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
// const {data} = await useCustomFetch<{data:any, message:any}>("/boards/1/posts", {method:'POST', body:{
//     "title": "ssssssssssss",
//     "content": "ssssssssssssssssssssssssssssssssssssssss"
// }})

const { data: board } = await useCustomFetch<{
  data: { posts: { title: string; contents: string }[] };
  message: any;
}>("/boards", {});
const { data: post } = await useCustomFetch<{
  data: { posts: { title: string; content: string; author: string }[] };
  message: any;
}>("/boards/1/posts", {});
const postList = post.value?.data.posts!;
console.log(postList, "postListpostList");
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
    <div class=" flex flex-col gap-2">
      <div class="text-4xl font-bold w-full text-center">보드임</div>

      board:result

      <div class="flex flex-col">
        <div
          v-bind:key="i"
          v-for="(post, i) in postList"
          class="flex flex-col gap-2 border"
        >
          {{ post.title }}
          {{ post.content }}
          {{ post.author }}
        </div>
      </div>
      post:result

      <div class="flex flex-col">
        <div
          v-bind:key="i"
          v-for="(post, i) in postList"
          class="flex flex-col gap-2 border"
        >
          {{ post.title }}
          {{ post.content }}
          {{ post.author }}
        </div>
      </div>
    </div>
  </section>
</template>
