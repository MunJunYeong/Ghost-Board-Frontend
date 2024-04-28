import type { ReqBoards, ResBoards } from "types/board";

export async function getBoards(data: ReqBoards) {
  let params;
  if (data.nextCursor) {
    params = new URLSearchParams({ postId: data.nextCursor.toString() });
    console.log(params.toString());
  }

  return await useCustomFetch<ResBoards>(
    `/boards/1/posts${params ? `?${params.toString()}` : ""}`
  );
}
export async function getBoard(data: ReqBoards) {
  return await useCustomFetch<ReqBoards>("/signup/send-email", {
    method: "POST",
    body: data,
  });
}
export async function addBoard(data: ReqBoards) {
  return await useCustomFetch<ReqBoards>("/signup/check-email", {
    method: "POST",
    body: data,
  });
}
export async function deleeteBoard(data: ReqBoards) {
  return await useCustomFetch<ReqBoards>("/signup/check-username", {
    method: "POST",
    body: data,
  });
}
