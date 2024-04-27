import type {
    ReqCheckEmail,
    ReqCheckUserName,
    ReqLogin,
    ReqSendEmail,
    ReqSignup,
    ResCheckEmail,
    ResCheckUserName,
    ResLogin,
    ResSendEmail,
    ResSignup,
  } from "types/auth";
  
  export async function getBoards(data: ReqLogin) {
    return await useCustomFetch<ResLogin>("/login", {
      method: "POST",
      body: data,
    });
  }
  export async function getBoard(data: ReqSendEmail) {
    return await useCustomFetch<ResSendEmail>("/signup/send-email", {
      method: "POST",
      body: data,
    });
  }
  export async function addBoard(data: ReqCheckEmail) {
    return await useCustomFetch<ResCheckEmail>("/signup/check-email", {
      method: "POST",
      body: data,
    });
  }
  export async function deleeteBoard(data: ReqCheckUserName) {
    return await useCustomFetch<ResCheckUserName>("/signup/check-username", {
      method: "POST",
      body: data,
    });
  }