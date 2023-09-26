import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TextAreaEnum } from 'src/app/shared/enums/ControlEnum';

export interface TextAreaControlProps{
  label:string,
  formControl:FormControl,
  type:TextAreaEnum,
  placeHolder:string,
  isLabelVisible:boolean
}

@Component({
  selector: 'app-text-area-control',
  templateUrl: './text-area-control.component.html',
  styleUrls: ['./text-area-control.component.css']
})
export class TextAreaControlComponent {
  @Input() props!:TextAreaControlProps

  constructor(){

  }

  ngOnInit() {

  }

  onValueChanged(e:any){
    this.props.formControl.setValue(e.value)
  }

  setType(){
    switch (this.props.type) {
      case TextAreaEnum.comment:
        return 'comment-text-input';
      case TextAreaEnum.workpiece:
        return 'workpiece-text-input';
      case TextAreaEnum.post:
        return 'post-text-input';
      case TextAreaEnum.description:
        return 'description-text-input';
      default:
        return 'text-input';
    }
  }
}
