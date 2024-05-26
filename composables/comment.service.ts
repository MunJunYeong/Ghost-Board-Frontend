import * as CommentTypes from "types/comment";

// Get Comment List
export async function getCommentList(data: CommentTypes.ReqGetCommentList) {
  return await useCustomFetch<CommentTypes.ResGetCommentList>(
    `/boards/${data.boardId}/posts/${data.postId}/comments`
  );
}

// Create Comment
export async function createComment(data: CommentTypes.ReqCreateComment) {
  return await useCustomFetch<CommentTypes.ResCreateComment>(
    `/boards/${data.boardId}/posts/${data.postId}/comments`,
    {
      method: "POST",
      body: data.body,
    }
  );
}

// Update Comment
export async function updateComment(data: CommentTypes.ReqUpdateComment) {
  return await useCustomFetch<CommentTypes.ResUpdateComment>(`/boards/${data.boardId}/posts/${data.boardId}/comments/${data.commentId}`, {
    method: "PUT",
    body: data.body,
  });
}

// Delete Comment
export async function deleteComment(data: CommentTypes.ReqDeleteComment) {
  return await useCustomFetch<CommentTypes.ResDeleteComment>(`/boards/${data.boardId}/posts/${data.boardId}/comments/${data.commentId}`, {
    method: "DELETE",
  });
}
