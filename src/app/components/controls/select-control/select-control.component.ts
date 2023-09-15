import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectEnum } from 'src/app/models/enums/GenreEnum';
import { ControlProp } from 'src/app/models/types/Control';

export interface SelectOption{
  value:any
  key:string
}

@Component({
  selector: 'app-select-control',
  templateUrl: './select-control.component.html',
  styleUrls: ['./select-control.component.css']
})

export class SelectControlComponent {
  @Input() controlProp!:ControlProp
  @Input() options!:any
  @Input() valueTag:string='value'
  @Input() labelTag:string='label'

//   data:Array<{id: Number, label: String}> = [
//     { id: 1, label: "My profile" },
//     { id: 2, label: "Messages" },
//     { id: 3, label: "Contacts" },
//     { id: 4, label: "Log out" }
// ];

  constructor(){

  }

  onValueChanged(e:any){
    this.controlProp.formControl.setValue(e.value)
    console.log(this.controlProp.formControl.value)
    console.log(e.previousValue)
  }
}
