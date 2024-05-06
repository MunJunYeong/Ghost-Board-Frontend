import type {
  ReqChangePw,
  ReqCheckEmail,
  ReqCheckFindPwEmail,
  ReqCheckUserName,
  ReqFindId,
  ReqLogin,
  ReqSendEmail,
  ReqSendFindPwEmail,
  ReqSignup,
  ResChangePw,
  ResCheckEmail,
  ResCheckFindPwEmail,
  ResCheckUserName,
  ResFindId,
  ResLogin,
  ResSendEmail,
  ResSendFindPwEmail,
  ResSignup,
} from "types/auth";

export async function useLogin(data: ReqLogin) {
  return await useCustomFetch<ResLogin>("/login", {
    method: "POST",
    body: data,
  });
}
export async function useSendEmail(data: ReqSendEmail) {
  return await useCustomFetch<ResSendEmail>("/signup/send-email", {
    method: "POST",
    body: data,
  });
}
export async function useCheckEmail(data: ReqCheckEmail) {
  return await useCustomFetch<ResCheckEmail>("/signup/check-email", {
    method: "POST",
    body: data,
  });
}
export async function useCheckUserName(data: ReqCheckUserName) {
  return await useCustomFetch<ResCheckUserName>("/signup/check-username", {
    method: "POST",
    body: data,
  });
}
export async function useSignup(data: ReqSignup) {
  return await useCustomFetch<ResSignup>("/signup", {
    method: "POST",
    body: data,
  });
}
export async function findUserId(data: ReqFindId) {
  return await useCustomFetch<ResFindId>("/find-id/send-email", {
    method: "POST",
    body: data,
  });
}
export async function sendFindPwEmail(data: ReqSendFindPwEmail) {
  return await useCustomFetch<ResSendFindPwEmail>("/change-password/send-email", {
    method: "POST",
    body: data,
  });
}
export async function checkFindPwEmail(data: ReqCheckFindPwEmail) {
  return await useCustomFetch<ResCheckFindPwEmail>("/change-password/check-email", {
    method: "POST",
    body: data,
  });
}
export async function changePw(data: ReqChangePw) {
  return await useCustomFetch<ResChangePw>("/change-password", {
    method: "POST",
    body: data,
  });
}
