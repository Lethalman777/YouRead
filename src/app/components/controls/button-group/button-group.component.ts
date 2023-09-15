import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonGroupItem } from 'src/app/models/types/Control';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent {
  @Output() ButtonGroupEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() options:ButtonGroupItem[]=[]
  @Input() selectedOptions:ButtonGroupItem[]=[]
  @Input() set isMultiple(value:boolean){
    if(value){
      this.selectionMode = 'multiple'
      this.isMultipleMode = true
    } else {
      this.selectionMode = 'single'
      this.isMultipleMode = false
    }
  }
  selectionMode:string='single'
  isMultipleMode:boolean=false

  onSelectionChanged(e:any){
    console.log(this.selectedOptions)
    if(this.isMultipleMode){
      this.ButtonGroupEvent.emit(this.selectedOptions)
    } else {
      this.ButtonGroupEvent.emit(this.selectedOptions[0])
    }
  }
}
