export type AuthorLabel={
  id:number
  username:string
  image:string
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
  image:string
  dateOfBirth:Date
}

export type Login={
  email:string
  password:string
}
