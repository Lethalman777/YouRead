import { GenreEnum } from "../enums/GenreEnum"
import { LanguageEnum } from "../enums/Language"
import { ChapterRead } from "./Chapter"
import { CommentRead } from "./Comment"
import { Information } from "./Information"
import { AuthorLabel } from "./User"

export type WorkpieceCreate = {
  title:string,
  description:string,
  image:string,
  userProfileId:number,
  genre:GenreEnum,
  language:LanguageEnum
}

export type FileName = {
  image:string
}

export type WorkpieceUpdate = {
  id:number
  title:string,
  description:string,
  genre:GenreEnum,
  language:LanguageEnum,
  image:string,
  userProfileId:number,
  dateOfPublication:Date,
  isPublished:boolean
}

export type WorkpieceLabel = {
  id:number,
  title:string,
  description:string,
  image:string
  author:AuthorLabel,
  information:Information,
  isPublished:boolean,
  genre:GenreEnum,
  language:LanguageEnum,
}

export type WorkpieceRead = {
  workpiece:WorkpieceLabel,
  author:AuthorLabel,
  chapters:ChapterRead[],
  comments:CommentRead[]
}

// export type WorkpieceInformation = {
//   commentCount:number,
//   likeCount:number,
//   dislikeCount:number,
//   viewCount:number,
//   publicationDate:Date
// }
