import { FormControl } from "@angular/forms"

export type ButtonGroupItem = {
  icon?:string
  text?:string
  value:any
}

export type ValidationMessage = {
  isValid:boolean
  message:string
}

export type ControlProp = {
  label:string,
  formControl:FormControl
}

export type CheckBoxOption = {
  label:string,
  value:any,
  isChecked:boolean
}

export function onControlChange(formControl: FormControl, formControlValue: any) {
  formControlValue = formControl.value
}
