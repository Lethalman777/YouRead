import { Information } from "./Information"
import { AuthorLabel } from "./User"

export type PostCreate = {
  userProfileId:number
  content:string
  images:string[]
}

export type PostRead = {
  id:number
  content:string
  author:AuthorLabel
  information:Information
  images:string[]
}
