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
