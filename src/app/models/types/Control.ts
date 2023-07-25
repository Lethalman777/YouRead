import { FormControl } from "@angular/forms"

export type ControlProp = {
  label:string,
  formControl:FormControl
}

export function onControlChange(formControl: FormControl, formControlValue: any) {
  formControlValue = formControl.value
}
