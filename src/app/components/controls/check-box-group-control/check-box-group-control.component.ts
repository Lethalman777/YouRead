import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GenreEnum } from 'src/app/models/enums/GenreEnum';
import { CheckBoxOption } from 'src/app/models/types/Control';

export interface CheckBoxGroupControlProps{
  label:string
  placeHolder:string
  formControl:FormControl
}

@Component({
  selector: 'app-check-box-group-control',
  templateUrl: './check-box-group-control.component.html',
  styleUrls: ['./check-box-group-control.component.css']
})
export class CheckBoxGroupControlComponent {
  @Input() props!:CheckBoxGroupControlProps
  selectAll = false;

  toggleSelectAll() {
    if (!this.selectAll) {
      this.props.formControl.value.forEach((element:CheckBoxOption) => {
        element.isChecked=false
      });
    } else {
      this.props.formControl.value.forEach((element:CheckBoxOption) => {
        element.isChecked=true
      });
    }
    console.log(this.props.formControl.value)
  }

  toggleSelect() {
    this.selectAll=false
  }
}