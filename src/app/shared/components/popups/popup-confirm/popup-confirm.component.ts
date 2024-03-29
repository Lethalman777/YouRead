import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  }

  submit(isConfirmed:boolean){
    this.HidePopupEvent.emit(isConfirmed)
  }
}
