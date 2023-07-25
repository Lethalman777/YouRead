import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ControlProp } from 'src/app/models/types/Control';

@Component({
  selector: 'app-text-area-control',
  templateUrl: './text-area-control.component.html',
  styleUrls: ['./text-area-control.component.css']
})
export class TextAreaControlComponent {
  @Input() controlProp!:ControlProp
  @Input() formControl!:FormControl

  constructor(){

  }

  ngOnInit() {
    console.log(this.controlProp)
  }
}
