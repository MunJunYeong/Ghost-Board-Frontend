import type { ResponseCommon } from "./common";


// TODO: 전체적으로 response 타입 정리해야함.
// login
export interface ReqLogin {
  id: string;
  password: string;
}
export interface ResLogin extends ResponseCommon<{
  accessToken: string;
  refreshToken: string;
}> {}

// send email
export interface ReqSendEmail {
  email: string;
}
export interface ResSendEmail extends ResponseCommon<{}> {}

// check email
export interface ReqCheckEmail {
  email: string;
  code: string;
}
export interface ResCheckEmail extends ResponseCommon<{}> {}

// check user name
export interface ReqCheckUserName {
  username: string;
}
export interface ResCheckUserName extends ResponseCommon<{}> {}

// sign up
export interface ReqSignup {
  id: string;
  password: string;
  email: string;
  username: string;
}
export interface ResSignup extends ResponseCommon<{}> {}

// google auth
// FIXME: 모름 어케해야되는지
export interface ReqGoogleAuth {
  email: string;
  code: string;
}
export interface ResGoogleAuth {
  email: string;
  code: string;
}
