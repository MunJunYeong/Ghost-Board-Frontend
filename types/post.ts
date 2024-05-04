import type { ResponseCommon } from "./common";

export interface ReqGetPostList {
  boardId: number;
  nextCursor?: number;
}
export interface ResGetPostList
  extends ResponseCommon<{ posts: any[]; nextCursor: number }> {}

export interface ReqGetPost {
  boardId: number;
  postId: number;
}
export interface ResGetPost extends ResponseCommon<{}> {}

export interface ReqCreatePost {
  boardId: number;
  body: {
    content: string;
    title: string;
    image: File;
  }
}
export interface ResCreatePost extends ResponseCommon<{}> {}

export interface ReqDeletePost {}
export interface ResDeletePost extends ResponseCommon<{}> {}
