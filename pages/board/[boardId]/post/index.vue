<script setup lang="ts">
import InfiniteLoading from "v3-infinite-loading";
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

// TODO: data fetch 하는 부분 composable 함수 작성해야함.
const { data: board } = await useCustomFetch<{
  data: { posts: { title: string; contents: string }[] };
  message: any;
}>("/boards", {});
const { data: post } = await useCustomFetch<{
  data: {
    posts: { title: string; content: string; author: string, File: any }[];
    nextCursor: number;
  };
  message: any;
}>("/boards/1/posts", {});

console.log(post)
let nextCursor = ref(post.value?.data.nextCursor!);
let postList = ref(post.value?.data.posts!);

async function loadData() {
  const { data: post } = await getPostList({boardId: 1 ,nextCursor: nextCursor.value})
  // console.log(post,'postpost')
  // console.log(post.value?.data.nextCursor,'akldsj;lask;djaklsdj')
  nextCursor.value = post.value?.data.nextCursor!;
  postList.value = [...postList.value, ...post.value?.data.posts!];
}
</script>

<template>
  <section
    class="w-full h-full items-center justify-center justify-items-center flex"
  >
    <div class="flex flex-col gap-2">
      <div class="text-4xl font-bold w-full text-center">보드</div>
      post:result

      <div class="grid grid-cols-2 gap-2">
          <div
            v-bind:key="i"
            v-for="(post, i) in postList"
            class="flex flex-col gap-2 border"
          > <NuxtImg :ref="post.File.link">{{ post.File }}</NuxtImg>
            <div>{{ post.title }}</div>
            <div>{{ post.content }}</div>
            <div>{{ post.author }}</div>
          </div>
      </div>

      <InfiniteLoading @infinite="loadData" />
    </div>
  </section>
</template>
