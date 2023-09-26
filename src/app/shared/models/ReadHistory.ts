export type ReadHistoryCreate = {
  userProfileId:number
  workpieceId:number
  creationDate:Date
}

export type ReadHistory = {
  id:number
  userProfileId:number
  workpieceId:number
  creationDate:Date
  chapterNumber:number
  leftPage:number
  rightPage:number
}
