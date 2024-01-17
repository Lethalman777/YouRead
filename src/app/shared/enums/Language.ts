import { SelectEnum } from "../models/Other"

export enum LanguageEnum{
  Polish = 0, English = 1, German = 2, Spanish = 3, Japanese = 4,
  Chinese = 5, French = 6, Italian = 7, Portugal = 8, Niderlanden = 9,
  Swedish = 10, Arabian = 11
}

export function getLanguageValues():SelectEnum<LanguageEnum>[]{
  const options:SelectEnum<LanguageEnum>[]=[
    { label: "polski", enum:LanguageEnum.Polish, image: "assets/images/heroes3.png" },
    { label: "english", enum:LanguageEnum.English, image: "assets/images/heroes3.png" },
    { label: "deutsch", enum:LanguageEnum.German, image: "assets/images/heroes3.png" },
    { label: "español", enum:LanguageEnum.Spanish, image: "assets/images/heroes3.png" },
    { label: "日本語", enum:LanguageEnum.Japanese, image: "assets/images/heroes3.png" },
    { label: "中国人", enum:LanguageEnum.Chinese, image: "assets/images/heroes3.png" },
    { label: "français", enum:LanguageEnum.French, image: "assets/images/heroes3.png" },
    { label: "italiano", enum:LanguageEnum.Italian, image: "assets/images/heroes3.png" },
    { label: "português", enum:LanguageEnum.Portugal, image: "assets/images/heroes3.png" },
    { label: "nederlands", enum:LanguageEnum.Niderlanden, image: "assets/images/heroes3.png" },
    { label: "svenska", enum:LanguageEnum.Swedish, image: "assets/images/heroes3.png" },
    { label: "عربي", enum:LanguageEnum.Arabian, image: "assets/images/heroes3.png" },
  ]

  return options
}

// export function getLanguageValues():string[]{
//   return Object.values(LanguageEnum)
// }
