<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
const router = useRouter();
const route = useRoute();
let title: string;
let content: string;
let image: any = ref();
function onDrop(item: any) {
  image.value = item.target.files[0];
}
async function CreatePost() {
  const { data, error } = await createPost({
    body: { content, title, image, isAnonymous: "true" },
    boardId: route.params.boardId,
  });
  if (data.value) {
    return router.back();
  }
  if (error.value) {
    console.log("실패");
  }
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
    class="w-full h-full items-center justify-items-center flex flex-col gap-2"
  >
    <div class="flex flex-col gap-2 mt-24 w-full max-w-[800px] overflow-y-auto">
      <!-- Title -->
      <div class="text-4xl font-bold flex w-full justify-between">
        게시글 작성
        <button
          class="text-base font-normal text-white bg-emerald-300 rounded-md p-2"
        >
          <NuxtLink to="/board/1/post">뒤로</NuxtLink>
        </button>
      </div>

      <hr class="my-4" />

      <div class="flex flex-col gap-2">
        <div class="font-bold">제목</div>
        <input type="text" class="border rounded-md mx-1 p-2" v-model="title" />

        <div class="font-bold">내용</div>
        <textarea
          type="text"
          class="rounded-md min-h-96 mx-1 border p-2"
          v-model="content"
        />
        <div>
          <input
            class="rounded-md border w-full"
            type="file"
            :value="image"
            ref="upload"
            @input="onDrop($event)"
          />
        </div>

        <div class="flex justify-end">
          <button
            class="text-base font-normal text-white bg-emerald-300 rounded-md p-2"
            :onclick="CreatePost"
          >
            작성
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
