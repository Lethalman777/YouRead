import { CheckBoxOption } from "../models/Control"
import { SelectEnum } from "../models/Other"

export enum GenreEnum {
  mixed = 0,
  historical = 1,
  fantasy = 2,
  scienceFiction = 3,
  customary = 4,
  sensational = 5
}

export function getGenreValues():SelectEnum<GenreEnum>[]{
  const options:SelectEnum<GenreEnum>[]=[
    { label: "mieszany", enum:GenreEnum.mixed, image: "assets/images/heroes3.png" },
    { label: "historyczne", enum:GenreEnum.historical, image: "assets/images/gothic.png" },
    { label: "fantastyka", enum:GenreEnum.fantasy, image: "assets/images/gomez.jpeg" },
    { label: "science fiction", enum:GenreEnum.scienceFiction, image: "assets/images/azure3.png" },
    { label: "obyczajowe", enum:GenreEnum.customary, image: "assets/images/onefaith.png" },
    { label: "sensacyjne", enum:GenreEnum.sensational, image: "assets/images/agresja.png" },
  ]

  return options
}

export function getGenreCheckboxes():CheckBoxOption[]{
  const options:CheckBoxOption[]=[
    { label: "mieszany", value:GenreEnum.mixed, isChecked: false },
    { label: "historyczne", value:GenreEnum.historical, isChecked: false },
    { label: "fantastyka", value:GenreEnum.fantasy, isChecked: false },
    { label: "science fiction", value:GenreEnum.scienceFiction, isChecked: false },
    { label: "obyczajowe", value:GenreEnum.customary, isChecked: false },
    { label: "sensacyjne", value:GenreEnum.sensational, isChecked: false },
  ]

  return options
}

export function getGenreLabel(genre:GenreEnum):string | undefined{
  const enums = getGenreValues()
  const label = enums.find(data=>data.enum==genre)?.label
  return label
}
