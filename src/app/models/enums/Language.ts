export enum LanguageEnum{
  Polski = 0, English = 1
}

export type SelectEnum<T> = {
  label: string
  enum: T
}

export function getLanguageValues():SelectEnum<LanguageEnum>[]{
  const options:SelectEnum<LanguageEnum>[]=[
    { label: "polski", enum:LanguageEnum.Polski },
    { label: "english", enum:LanguageEnum.English },
  ]

  return options
}

// export function getLanguageValues():string[]{
//   return Object.values(LanguageEnum)
// }
