import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup-message',
  templateUrl: './popup-message.component.html',
  styleUrls: ['./popup-message.component.css']
})
export class PopupMessageComponent {
  @Output() HidePopupEvent:EventEmitter<any> = new EventEmitter()
  @Input() isPopupVisible:boolean = false
  @Input() message:string=""

  constructor() {}

  onPopupClosed(){
    this.HidePopupEvent.emit()
  }
}
