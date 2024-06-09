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
    return router.back()
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
    class="w-full h-full items-center justify-center justify-items-center flex flex-col my-auto gap-2"
  >
    <div class="gap-2">
      <div class="text-4xl font-bold w-full text-center">게시글 작성</div>
    </div>
    <hr class="my-4" />
    <div class="flex flex-col gap-2">
      <input type="text" class="border rounded-md" v-model="title" />
      <textarea type="text" class="border rounded-md" v-model="content" />
      <div>
        <input
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
  </section>
</template>
