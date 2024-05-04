import type { ResponseCommon } from "./common";

export interface ReqGetBoardList {
    boardId: number
    nextCursor?: number
}
export interface ResGetBoardList extends ResponseCommon<{posts:any[], nextCursor:number}>{}

export interface ReqBoard {}
export interface ResBoard extends ResponseCommon<{}>{}

export interface ReqCreateBoard {}
export interface ResCreateBoard extends ResponseCommon<{}>{}

export interface ReqDeleteBoard {}
export interface ResDeleteBoard extends ResponseCommon<{}>{}
