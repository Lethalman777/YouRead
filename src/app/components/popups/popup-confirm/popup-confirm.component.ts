import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-confirm',
  templateUrl: './popup-confirm.component.html',
  styleUrls: ['./popup-confirm.component.css']
})
export class PopupConfirmComponent {
  @Output() HidePopupEvent:EventEmitter<boolean> = new EventEmitter<boolean>()
  @Input() isPopupVisible:boolean = false
  @Input()message:string=""

  constructor() {
    if(this.isPopupVisible){
      console.log('fff')
    }
  }

  submit(isConfirmed:boolean){
    this.HidePopupEvent.emit(isConfirmed)
  }
}
