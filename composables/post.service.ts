import type {
  ReqCreatePost,
  ReqDeletePost,
  ReqGetPost,
  ReqGetPostList,
  ResCreatePost,
  ResDeletePost,
  ResGetPost,
  ResGetPostList,
} from "types/post";

export async function getPostList(data: ReqGetPostList) {
  let params;
  if (data.nextCursor) {
    params = new URLSearchParams({ postId: data.nextCursor.toString() });
  }

  return await useCustomFetch<ResGetPostList>(
    `/boards/${data.boardId}/posts${params ? `?${params.toString()}` : ""}`
  );
}

export async function getPost(data: ReqGetPost) {
  return await useCustomFetch<ResGetPost>(
    `/boards/${data.boardId}/posts/${data.postId}`
  );
}

// 사진 전송할려면 헤더 바꿔야함.
export async function createPost(data: ReqCreatePost) {
  const test = new FormData();
  test.append("title", data.body.title);
  test.append("content", data.body.content);
  test.append("image", data.body.image);
  test.append("isAnonymous", data.body.isAnonymous);
  return await useCustomFetch<ResCreatePost>(`/boards/${data.boardId}/posts`, {
    method: "POST",
    body: test,
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
}
export async function deletePost(data: ReqDeletePost) {
  return await useCustomFetch<ResDeletePost>("/signup/check-username", {
    method: "POST",
    body: data,
  });
}
