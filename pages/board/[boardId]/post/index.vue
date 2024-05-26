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

const { data: post } = await getPostList({
  boardId:1,
})

let nextCursor = ref(post.value?.data.nextCursor!);
let postList = ref(post.value?.data.posts!);

async function loadData() {
  const { data: post } = await getPostList({
    boardId: 1,
    nextCursor: nextCursor.value,
  });
  if (post.value) {
    nextCursor.value = post.value?.data.nextCursor;
    postList.value = [...postList.value, ...post.value.data.posts];
  }
}
</script>

<template>
  <section
    class="w-full items-center justify-center justify-items-center flex flex-col"
  >
    <div class="flex flex-col gap-2 mt-20 w-full max-w-[800px] overflow-y-auto">
      <div class="text-4xl font-bold flex w-full justify-between">
        게시판
        <div>
          <button
            class="text-base font-normal text-white bg-emerald-300 rounded-md p-2"
          >
            <NuxtLink to="/board/0/post/create">작성</NuxtLink>
          </button>
        </div>
      </div>
      <hr class="my-4" />

      <div class="grid grid-cols-2 gap-2">
        <div
          v-bind:key="i"
          v-for="(post, i) in postList"
          class="flex flex-col gap-2 border"
        >
          <NuxtLink :to="`/board/0/post/${post.postId.toString()}`" class="flex flex-col gap-2 border">
            <NuxtImg v-if="post.File" :src="post.File?.link" />
            <div>{{ post.title }}</div>
            <div>{{ post.content }}</div>
            <div>{{ post.author }}</div>
          </NuxtLink>
        </div>
      </div>

      <InfiniteLoading v-if="nextCursor !== 0" @infinite="loadData" />
    </div>
  </section>
</template>
