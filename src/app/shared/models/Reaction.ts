import { ReactionObjectEnum, ReactionTypeEnum } from "../enums/ReactionEnum"


export type Reaction = {
  userProfileId:number
  targetId:number
  type:ReactionTypeEnum
  object:ReactionObjectEnum
  dateOfReaction:Date
  isClicked:boolean
}

export type ReactionClicked = {
  targetId:number
  userProfileId:number
  object:ReactionObjectEnum
}
