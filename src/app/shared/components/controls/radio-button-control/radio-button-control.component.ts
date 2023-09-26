import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface RadioButtonControlProps{
  label:string
  placeHolder:string
  formControl:FormControl
  options:any
}

@Component({
  selector: 'app-radio-button-control',
  templateUrl: './radio-button-control.component.html',
  styleUrls: ['./radio-button-control.component.css']
})
export class RadioButtonControlComponent {
  @Input() props!:RadioButtonControlProps
  @Input() valueTag:string = "value"
  @Input() labelTag:string = "label"

  onValueChanged(e:any){
    this.props.formControl.setValue(e.value)
    console.log(this.props.formControl.value)
  }
}
