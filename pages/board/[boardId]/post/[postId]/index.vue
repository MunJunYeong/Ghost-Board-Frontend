<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
const route = useRoute();
const { data: post } = await getPost({
  boardId: route.params.boardId,
  postId: route.params.postId,
});
let postDetail;
if (post.value) {
  postDetail = post.value;
}
let content: string;

const { data: comments, refresh } = await getCommentList({
  boardId: route.params.boardId,
  postId: route.params.postId,
});
let commentList = ref(comments.value?.data);

async function addComment() {
  const { data, error } = await createComment({
    boardId: route.params.boardId,
    postId: route.params.postId,
    body: {
      parentCommentId: null,
      content: content,
      isAnonymous: true,
    },
  });
  if (data.value) {
    await refresh();
    commentList.value = comments.value?.data;
    content = "";
    return;
  }
  // TODO: 에러메시지 user 친화적인 문구로 변경 필요
  if (error.value) {
    return;
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
    console.log("이게 되네");
  }
}
</script>

<template>
  <section class="w-full items-center justify-items-center flex flex-col">
    <div class="flex flex-col gap-2 mt-24 w-full max-w-[800px] overflow-y-auto ">
      <!-- Title -->
      <div class="text-4xl font-bold flex w-full justify-between">
        {{ postDetail.data.content }}
        <div class="flex gap-2">
          <button
            class="text-base font-normal text-white bg-emerald-300 rounded-md p-2"
          >
            <NuxtLink to="/board/0/post">뒤로</NuxtLink>
          </button>
          <button
            class="text-base font-normal text-white bg-emerald-300 rounded-md p-2"
          >
            <NuxtLink :to="`/board/${1}/post/create`">수정</NuxtLink>
          </button>
        </div>
      </div>
      <hr class="my-4" />
      <!-- Post -->
      <div class="flex w-full flex-col items-center gap-2">
        <NuxtImg
          class="w-96"
          v-if="postDetail.data.File"
          :src="postDetail.data?.File?.link"
        />
        <div class="w-full text-xl">{{ postDetail.data?.content }}</div>
      </div>
      <hr class="my-4" />
      <div class="flex justify-between">

        <div class="text-pink-500 text-2xl flex justify-start">
          <button
          class="flex"
            :onclick="
              async (e) => {
                e.preventDefault();
                await likePost(postDetail.data.postId);
              }
            "
          >
            <!-- TODO: api 연동 부분 수정 필요 -->
            <UIcon name="i-mdi-heart" dynamic />
            <div class="text-base font-bold">11</div>
          </button>
          <!-- <button
            :onclick="
              async (e) => {
                e.preventDefault();
                await unLikePost(postDetail.data.postId);
              }
            "
          >
            <UIcon name="i-mdi-heart-outline" dynamic/>
          </button> -->
        </div>
        <DialogReport />
      </div>
      <!-- Comment -->
      <div class="w-full p-1 flex flex-col gap-2">
        <h3 class="text-xl font-bold">댓글</h3>
        <hr class="my-2" />
        <!-- Comment List -->
        <div v-if="commentList" class="pl-6 flex flex-col gap-2">
          <div v-bind:key="i" v-for="(comment, i) in commentList">
            <div
              class="w-full flex pb-2 border-[1px] border-emerald-300 rounded-md p-2"
            >
              <div>{{ comment.author }}</div>
              <div>{{ comment.content }}</div>
              <div>{{ comment.createdAt }}</div>
            </div>

            <!-- Reply List -->
            <div v-if="comment.replies" class="m-1 flex flex-col gap-2">
              <div
                v-bind:key="i"
                v-for="(replies, i) in comment.replies"
                class="w-full flex p-2 m-1 border-[1px] rounded-md"
              >
                <div>{{ replies.author }}</div>
                <div>{{ replies.content }}</div>
                <div>{{ replies.createdAt }}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- Write Comment Form -->
        <div class="w-full flex gap-2">
          <textarea v-model="content" class="w-full border rounded-md" />
          <button class="w-20 bg-emerald-300 rounded-md" :onclick="addComment">
            쓰기
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
