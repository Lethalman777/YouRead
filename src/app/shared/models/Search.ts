import { SearchDataTypeEnum, SearchOperatorEnum, SortTypeEnum, TypeOfEnum } from "../enums/SearchEnum"

export type SearchParam = {
  propertyName: string,
  operator: SearchOperatorEnum,
  dataType: SearchDataTypeEnum,
  value:any,
  isAnd:boolean,
  isAndInBlock:boolean,
  isEmpty:boolean,
  params:SearchParam[],
  parameterName:string,
  typeOf:TypeOfEnum,
  isInnerParam:boolean,
  method:string,
  innerParam?:SearchParam
}

export type SearchWorkpiece = {
  searchParam:SearchParam,
  sortTypeEnum:SortTypeEnum,
  searchTerm?:string,
  userProfileId:number,
  isSubscribed:boolean,
  resultsAmount:number
}
