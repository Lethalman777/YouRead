import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ControlProp } from 'src/app/models/types/Control';
import { AuthorLabel, UserProfile } from 'src/app/models/types/User';

export interface NormalControlProps{
  label:string,
  formControl:FormControl,
  placeHolder:string
}

@Component({
  selector: 'app-normal-control',
  templateUrl: './normal-control.component.html',
  styleUrls: ['./normal-control.component.css']
})
export class NormalControlComponent {
  @Input() props!:NormalControlProps
  @Input() mode:string = 'text'
  @Input() stylingMode:string = 'filled'

  constructor(){

  }

  onValueChanged(e:any){
    this.props.formControl.setValue(e.value)
    console.log(this.props.formControl.value)
    console.log(this.mode)
  }
}
