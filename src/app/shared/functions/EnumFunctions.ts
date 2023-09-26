import { SelectOption } from "src/app/shared/components/controls/select-control/select-control.component";

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
