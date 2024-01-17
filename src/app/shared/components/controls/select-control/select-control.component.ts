import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlProp } from 'src/app/shared/models/Control';

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
  @Input() placeholder:string='wybierz...'
  @Output() SelectedOptionEvent:EventEmitter<any> = new EventEmitter<any>()


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
    this.SelectedOptionEvent.emit(e.value)
  }
}
