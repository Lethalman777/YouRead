import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ControlProp } from 'src/app/models/types/Control';
import { AuthorLabel, UserProfile } from 'src/app/models/types/User';

@Component({
  selector: 'app-normal-control',
  templateUrl: './normal-control.component.html',
  styleUrls: ['./normal-control.component.css']
})
export class NormalControlComponent {
  @Input() controlProp!:ControlProp
  @Input() formControl!:FormControl

  constructor(){

  }

  ngOnInit() {
    console.log(this.controlProp)
  }
}
