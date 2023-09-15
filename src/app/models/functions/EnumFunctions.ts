import { SelectOption } from "src/app/components/controls/select-control/select-control.component";
import { EnumTypeEnum } from "../enums/EnumTypeEnum";
import { CommentTypeEnum } from "../enums/CommentEnum";
import { GenreEnum } from "../enums/GenreEnum";

export function convertStringToEnum<T>(enumType: T, numericString: string): T[keyof T] | undefined {
  const numericValue = parseInt(numericString, 10);
  return enumType[numericValue as keyof typeof enumType];
}

export function getOptionsFromEnum(keys:string[], values:any[]):SelectOption[]{
  const options:SelectOption[]=[]
  let i = 0
  keys.forEach(key => {
    options.push({value:values[i], key:key})
    i++
  });

  console.log(options)
  return options
}

// function getEnumObjectByValue<T extends Record<string, string>>(enumType: T, valueOrKey: string): T | null {
//   const enumKeys = Object.keys(enumType).filter((k) => isNaN(Number(k))) as (keyof T)[];
//   if (enumKeys.includes(valueOrKey)) {
//     return enumType[valueOrKey];
//   }

//   const key = enumKeys.find((k) => enumType[k] === valueOrKey);
//   return key ? { [key]: enumType[key] } as unknown as T : null;
// }
