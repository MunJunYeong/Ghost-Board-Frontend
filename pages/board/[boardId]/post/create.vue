<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
let title: string;
let content: string;
let image: any;
function onDrop(item: any) {
  image = item.target.files[0];
}

async function CreatePost() {
  const { data, error } = await createPost({
    body: { content, title, image, isAnonymous: "true" },
    boardId: 1,
  });
  if (data.value) {
    console.log("성공");
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
    class="w-full h-full items-center justify-center justify-items-center flex"
  >
    <div class="flex flex-col gap-2">
      <div class="text-4xl font-bold w-full text-center">
        TOOD: 보드 작성 페이지
      </div>
      <input type="text" class="border" v-model="title" />
      <textarea type="text" class="border" v-model="content">ssss</textarea>
      <div>
        <input
          type="file"
          :value="image"
          ref="upload"
          @input="onDrop($event)"
        />
      </div>
    </div>
    <button :onclick="CreatePost">ssssssssssssss</button>
  </section>
</template>
