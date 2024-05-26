import * as AuthTypes from "types/auth";

export async function useGoogleLogin() {
  return await useCustomFetch<AuthTypes.ResGoogleLoginURL>("/google-login", {
    method: "GET",
  });
}

export async function useLogin(data: AuthTypes.ReqLogin) {
  return await useCustomFetch<AuthTypes.ResLogin>("/login", {
    method: "POST",
    body: data,
  });
}

export async function useSendEmail(data: AuthTypes.ReqSendEmail) {
  return await useCustomFetch<AuthTypes.ResSendEmail>("/signup/send-email", {
    method: "POST",
    body: data,
  });
}

export async function useCheckEmail(data: AuthTypes.ReqCheckEmail) {
  return await useCustomFetch<AuthTypes.ResCheckEmail>("/signup/check-email", {
    method: "POST",
    body: data,
  });
}

export async function useCheckUserName(data: AuthTypes.ReqCheckUserName) {
  return await useCustomFetch<AuthTypes.ResCheckUserName>(
    "/signup/check-username",
    {
      method: "POST",
      body: data,
    }
  );
}

export async function useSignup(data: AuthTypes.ReqSignup) {
  return await useCustomFetch<AuthTypes.ResSignup>("/signup", {
    method: "POST",
    body: data,
  });
}

export async function findUserId(data: AuthTypes.ReqFindId) {
  return await useCustomFetch<AuthTypes.ResFindId>("/find-id/send-email", {
    method: "POST",
    body: data,
  });
}

export async function sendFindPwEmail(data: AuthTypes.ReqSendFindPwEmail) {
  return await useCustomFetch<AuthTypes.ResSendFindPwEmail>(
    "/change-password/send-email",
    {
      method: "POST",
      body: data,
    }
  );
}

export async function checkFindPwEmail(data: AuthTypes.ReqCheckFindPwEmail) {
  return await useCustomFetch<AuthTypes.ResCheckFindPwEmail>(
    "/change-password/check-email",
    {
      method: "POST",
      body: data,
    }
  );
}

export async function changePw(data: AuthTypes.ReqChangePw) {
  return await useCustomFetch<AuthTypes.ResChangePw>("/change-password", {
    method: "POST",
    body: data,
  });
}
