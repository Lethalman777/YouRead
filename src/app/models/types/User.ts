export type AuthorLabel={
  id:number
  username:string
  image:string
  subscribers:number
}

export type UserCreate={
  username:string
  email:string
  password:string
  dateOfBirth:Date
}

export type UserProfile={
  id:number
  username:string
  description:string
  image:string
  backgroundImage:string
  dateOfBirth:Date
  subscriberCount:number
  workpieceCount:number
}

export type Login={
  email:string
  password:string
}

export type AuthResponse={
  isAuthSuccessful:boolean
  token:string
}
