import type { ResponseCommon } from "./common";

export interface ReqGetPosts {
    boardId: number
    nextCursor?: number
}
export interface ResGetPosts {

}

// export interface ReqBoards {nextCursor:string}
export interface ResBoards extends ResponseCommon<{posts:any[], nextCursor:number}>{}

export interface ReqBoards {}
export interface ResBoards {}

export interface ReqBoards {}
export interface ResBoards {}

// export async function getBoard(data: ReqSendEmail) {
//   return await useCustomFetch<ResSendEmail>("/signup/send-email", {
//     method: "POST",
//     body: data,
//   });
// }
// export async function addBoard(data: ReqCheckEmail) {
//   return await useCustomFetch<ResCheckEmail>("/signup/check-email", {
//     method: "POST",
//     body: data,
//   });
// }
// export async function deleeteBoard(data: ReqCheckUserName) {
//   return await useCustomFetch<ResCheckUserName>("/signup/check-username", {
//     method: "POST",
//     body: data,
//   });
// }
