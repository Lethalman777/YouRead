export type StringLabel = {
  value:string
}

export type SelectEnum<T> = {
  label: string
  image:string
  enum: T
}
