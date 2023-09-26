import { CommentTypeEnum } from "../enums/CommentEnum"
import { AuthorLabel } from "./User"

export type CommentRead = {
  id:number,
  content:string,
  author:AuthorLabel,
  targetId:number,
  commentType:CommentTypeEnum,
  information:CommentInformation
}

export type CommentWrite = {
  content:string,
  userProfileId:number,
  workpieceId:number
  postId:number
  commentType:CommentTypeEnum
  commentAnsweredId:number
}

export type CommentInformation = {
  commentCount:number,
  likeCount:number,
  dislikeCount:number,
  viewCount:number,
  publicationDate:Date
}
