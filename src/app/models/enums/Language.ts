export enum LanguageEnum{
  Polski = 0, English = 1
}

export type SelectEnum<T> = {
  label: string
  image:string
  enum: T
}

export function getLanguageValues():SelectEnum<LanguageEnum>[]{
  const options:SelectEnum<LanguageEnum>[]=[
    { label: "polski", enum:LanguageEnum.Polski, image: "assets/images/heroes3.png" },
    { label: "english", enum:LanguageEnum.English, image: "assets/images/heroes3.png" },
  ]

  return options
}

// export function getLanguageValues():string[]{
//   return Object.values(LanguageEnum)
// }
