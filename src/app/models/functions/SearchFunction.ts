import { SearchOperatorEnum, SearchDataTypeEnum, TypeOfEnum, SortTypeEnum } from "../enums/SearchEnum"
import { SearchParam, SearchWorkpiece } from "../types/Search"

export function getSearchParam(
  propertyName: string = '',
  value:any = '',
  dataType: SearchDataTypeEnum = SearchDataTypeEnum.text,
  operator: SearchOperatorEnum = SearchOperatorEnum.equal,
  isAnd:boolean = true,
  isAndInBlock:boolean = true,
  isEmpty:boolean = false,
  params:SearchParam[] = [],
  parameterName:string = 'x',
  typeOf:TypeOfEnum = TypeOfEnum.Workpiece,
  isInnerParam:boolean = false,
  method:string = '',
  innerParam?:SearchParam
) : SearchParam{
  const searchParam:SearchParam = {
    propertyName: propertyName,
    operator: operator,
    dataType: dataType,
    value: value,
    isAnd: isAnd,
    isAndInBlock: isAndInBlock,
    isEmpty: isEmpty,
    params: params,
    parameterName: parameterName,
    typeOf: typeOf,
    isInnerParam: isInnerParam,
    method: method,
    innerParam: innerParam
  }
  return searchParam
}

export function getEmptyParam(){
  return getSearchParam(undefined, undefined, undefined, undefined, undefined, undefined, true)
}

export function getSearchWorkpiece(
  searchParam:SearchParam=getEmptyParam(),
  sortTypeEnum:SortTypeEnum=SortTypeEnum.None,
  searchTerm?:string,
  userProfileId:number=0,
  isSubscribed:boolean=false){
    const searchWorkpiece:SearchWorkpiece={
      searchParam: searchParam,
      sortTypeEnum: sortTypeEnum,
      searchTerm: searchTerm,
      userProfileId: userProfileId,
      isSubscribed: isSubscribed
    }

    return searchWorkpiece
}
