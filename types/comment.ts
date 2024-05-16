import type { ResponseCommon } from "./common";
interface Comment {
  commentId: number;
  content: string;
  author: string;
  activate: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  postId: number;
  parentId: number;
  replies: Comment[];
}

// Get Comment List
export interface ReqGetCommentList {
  boardId: number;
  postId: number;
}
export interface ResGetCommentList extends ResponseCommon<Comment[]> {}

// Write Comment
export interface ReqCreateComment {
  boardId: number;
  postId: number;
  body: {
    parentCommentId: number;
    content: string;
    isAnonymous: boolean;
  };
}
export interface ResCreateComment extends ResponseCommon<{}> {}

// Delete Comment
export interface ReqDeleteComment {
  boardId: number;
  postId: number;
  commentId: number;
}
export interface ResDeleteComment extends ResponseCommon<{}> {}

// Update Comment
export interface ReqUpdateComment {
  boardId: number;
  postId: number;
  commentId: number;
  body: {
    parentCommentId: number;
    content: string;
    isAnonymous: boolean;
  };
}
export interface ResUpdateComment extends ResponseCommon<{}> {}

// TODO: 좋아요 관련해서는 나중에 구현
