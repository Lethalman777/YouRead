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
  @Input() options!:any[]

  constructor(){

  }
}
