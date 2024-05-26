import * as PostTypes from "types/post";

// Get Post List (infinte scroll)
export async function getPostList(data: PostTypes.ReqGetPostList) {
  let params;
  if (data.nextCursor) {
    params = new URLSearchParams({ postId: data.nextCursor.toString() });
  }

  return await useCustomFetch<PostTypes.ResGetPostList>(
    `/boards/${data.boardId}/posts${params ? `?${params.toString()}` : ""}`
  );
}

// Get One Post
export async function getPost(data: PostTypes.ReqGetPost) {
  return await useCustomFetch<PostTypes.ResGetPost>(
    `/boards/${data.boardId}/posts/${data.postId}`
  );
}

// 사진 전송할려면 헤더 바꿔야함.
export async function createPost(data: PostTypes.ReqCreatePost) {
  const postData = new FormData();
  postData.append("title", data.body.title);
  postData.append("content", data.body.content);
  postData.append("image", data.body.image);
  postData.append("isAnonymous", data.body.isAnonymous);
  return await useCustomFetch<PostTypes.ResCreatePost>(
    `/boards/${data.boardId}/posts`,
    {
      method: "POST",
      body: postData,
    }
  );
}

// Update Post
export async function updatePost(data: PostTypes.ReqUpdatePost) {
  return await useCustomFetch<PostTypes.ResUpdatePost>(
    `/boards/${data.boardId}/posts/${data.postId}`,
    {
      method: "PUT",
      body: data.body,
    }
  );
}

// Delete Post
export async function deletePost(data: PostTypes.ReqDeletePost) {
  return await useCustomFetch<PostTypes.ResDeletePost>(
    `/boards/${data.boardId}/posts/${data.postId}`,
    {
      method: "DELETE",
    }
  );
}
