import type { ResponseCommon } from "./common";

interface Post {
  postId: number;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  boardId: number;
  File: ResFile;
}
interface ResFile {
  fileld: number;
  link: string;
  fileName: string;
  createdAt: Date;
  updatedAt: Date;
  postId: number;
}

export interface ReqGetPostList {
  boardId: number;
  nextCursor?: number;
}
export interface ResGetPostList
  extends ResponseCommon<{ posts: Post[]; nextCursor: number }> {}

export interface ReqGetPost {
  boardId: number;
  postId: number;
}
export interface ResGetPost extends ResponseCommon<{ post: Post }> {}

export interface ReqCreatePost {
  boardId: number;
  body: {
    content: string;
    title: string;
    image: File;
    isAnonymous: string;
  };
}
export interface ResCreatePost extends ResponseCommon<{}> {}

export interface ReqDeletePost {
  boardId: number;
  postId: number;
}
export interface ResDeletePost extends ResponseCommon<{}> {}

export interface ReqUpdatePost {
  boardId: number;
  postId: number;
  body: {
    content: string;
    title: string;
    image: File;
    isAnonymous: string;
  };
}
export interface ResUpdatePost extends ResponseCommon<{}> {}

export interface ReqLikePost {
  boardId: number;
  postId: number;
}
export interface ResLikePost extends ResponseCommon<{}> {}
