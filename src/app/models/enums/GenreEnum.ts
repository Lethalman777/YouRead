import { SelectOption } from "src/app/components/controls/select-control/select-control.component"

export enum GenreEnum {
  // mixed = "mixed",
  // historical = "historical",
  // fantasy = "fantasy",
  // scienceFiction = "scienceFiction",
  // customary = "customary",
  // sensational = "sensational"

  mixed = 0,
  historical = 1,
  fantasy = 2,
  scienceFiction = 3,
  customary = 4,
  sensational = 5
}

export type SelectEnum<T> = {
  label: string
  enum: T
}

export function getGenreValues():SelectEnum<GenreEnum>[]{
  const options:SelectEnum<GenreEnum>[]=[
    { label: "mieszany", enum:GenreEnum.mixed },
    { label: "historyczne", enum:GenreEnum.historical },
    { label: "fantastyka", enum:GenreEnum.fantasy },
    { label: "science fiction", enum:GenreEnum.scienceFiction },
    { label: "obyczajowe", enum:GenreEnum.customary },
    { label: "sensacyjne", enum:GenreEnum.sensational },
  ]

  return options
}

export function getGenreLabel(genre:GenreEnum):string | undefined{
  const enums = getGenreValues()
  const label = enums.find(data=>data.enum==genre)?.label
  return label
}
