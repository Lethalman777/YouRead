import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CheckBoxOption } from 'src/app/shared/models/Control';

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
  @ViewChild('seletAllCheckbox') seletAllCheckbox!: ElementRef;

  toggleSelectAll(e:any) {
    console.log(e.value)
    this.selectAll=e.value
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
    console.log(this.seletAllCheckbox)
    console.log(this.selectAll)
  }
}
