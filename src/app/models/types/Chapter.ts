export type ChapterRead = {
  id:number
  title:string
  chapterNumber:number
  dateOfPublication:Date
  pages:string[]
}

export type ChapterWrite = {
  id:number,
  workpieceId:number,
  title:string,
  chapterNumber:number,
  file:string
}

export type ChapterCreate = {
  workpieceId:number
  title:string,
  chapterNumber:number
}

export type ChapterPages = {
  pages:string[],
  leftPage:number,
  rightPage:number
}


export type ChapterLabel = {
  id:number
  title:string
  chapterNumber:number
  dateOfPublication:Date
  workpieceId:number
}
