import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ControlProp } from 'src/app/shared/models/Control';

@Component({
  selector: 'app-number-control',
  templateUrl: './number-control.component.html',
  styleUrls: ['./number-control.component.css']
})
export class NumberControlComponent {
  @Input() controlProp!:ControlProp
  @Output() controlChangeEvent = new EventEmitter<FormControl>();

  constructor(){

  }
}
