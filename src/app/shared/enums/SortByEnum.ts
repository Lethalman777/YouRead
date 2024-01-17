import { SelectEnum } from "../models/Other"

export enum SortByEnum {
  dateDesc = 0,
  dateAsc = 1,
  titleDesc = 2,
  titleAsc = 3,
  likeAsc = 4,
}

export function getSortByOptions():SelectEnum<SortByEnum>[]{
  const options:SelectEnum<SortByEnum>[] = [
    { label: "najpopularniejsze", enum:SortByEnum.likeAsc, image: "" },
    { label: "data malejąco", enum:SortByEnum.dateDesc, image: "" },
    { label: "data rosnąco", enum:SortByEnum.dateAsc, image: "" },
    { label: "tytuł malejąco", enum:SortByEnum.titleDesc, image: "" },
    { label: "tytuł rosnąco", enum:SortByEnum.titleAsc, image: "" },
  ]
  return options
}
