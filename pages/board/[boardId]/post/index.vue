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
  boardId: 1,
});

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

async function likePost(postId: number) {
  const { data } = await createPostLike({
    postId: postId,
    boardId: 1,
  });
  if (data.value) {
    // TODO: 성공시
    console.log("sucess");
  }
}
async function unLikePost(postId: number) {
  const { data } = await deletePostLike({
    postId: postId,
    boardId: 1,
  });
  if (data.value) {
    // TODO: 성공시
    console.log("sucess");
  }
}
</script>

<template>
   <section class="w-full items-center justify-items-center flex flex-col">
    <div class="flex flex-col gap-2 mt-24 w-full max-w-[800px] overflow-y-auto">
      <div class="text-4xl font-bold flex w-full justify-between">
        게시판
        <div>
          <button
            class="text-base font-normal text-white bg-emerald-300 rounded-md p-2"
          >
            <NuxtLink :to="`/board/${1}/post/create`">작성</NuxtLink>
          </button>
        </div>
      </div>
      <hr class="my-4" />

      <div class="grid grid-cols-2 gap-2">
        <div
          v-bind:key="i"
          v-for="(post, i) in postList"
          class="flex flex-col gap-2"
        >
          <NuxtLink
            :to="`/board/1/post/${post.postId.toString()}`"
            class="flex flex-col gap-2 border rounded-md p-1 h-full justify-between"
          >
            <div class="flex flex-col h-full">
              <div class="font-bold text-xl">{{ post.title }}</div>
              <hr class="my-2" />
              <div class="flex justify-center flex-1 h-40">
                <NuxtImg class="h-40" v-if="post.File" :src="post.File?.link" />
                <div class="h-40" v-if="!post.File" />
              </div>
              <hr class="my-2" />
              <div>{{ post.content }}</div>
              <div class="!text-gray-400 text-xs">{{ post.author }}</div>
            </div>

            <div class="">
              <div class="text-pink-500 text-2xl flex justify-start">
                <button
                  :onclick="
                    async (e) => {
                      e.preventDefault();
                      await likePost(post.postId);
                    }
                  "
                >
                  <UIcon name="i-mdi-heart" />
                </button>
                <button
                  :onclick="
                    async (e) => {
                      e.preventDefault();
                      await unLikePost(post.postId);
                    }
                  "
                >
                  <UIcon name="i-mdi-heart-outline" />
                </button>
                <div class="flex-1" />
                <DialogReport />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <InfiniteLoading v-if="nextCursor !== 0" @infinite="loadData" />
    </div>
  </section>
</template>
