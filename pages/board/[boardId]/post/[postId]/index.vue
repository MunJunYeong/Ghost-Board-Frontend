<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
const route = useRoute()
const {data: post} =await getPost({boardId: route.params.boardId, postId: route.params.postId})
let postDetail
if(post.value){
  postDetail = post.value
}
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
    class="w-full items-center justify-center justify-items-center flex flex-col"
  >
    <div class="flex flex-col gap-2 mt-20 w-full max-w-[800px] overflow-y-auto">
      <div class="text-4xl font-bold flex w-full justify-between">
        {{  postDetail.data.content }}
        <div class="flex gap-2">
          <button
            class="text-base font-normal text-white bg-emerald-300 rounded-md p-2"
          >
            <NuxtLink to="/board/0/post/">뒤로</NuxtLink>
          </button>
          <button
            class="text-base font-normal text-white bg-emerald-300 rounded-md p-2"
          >
            <NuxtLink to="/board/0/post/create">수정</NuxtLink>
          </button>
        </div>
      </div>
      <hr class="my-4" />
      <NuxtImg v-if="postDetail.data.File" :src="postDetail.data.File?.link" />
      <div class="grid grid-cols-2 gap-2">{{ postDetail.data.content }}</div>
    </div>
  </section>
</template>
