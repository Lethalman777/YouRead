import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-message',
  templateUrl: './popup-message.component.html',
  styleUrls: ['./popup-message.component.css']
})
export class PopupMessageComponent {
  message:string=""

  constructor(@Inject(MAT_DIALOG_DATA) public inputData: string) {
    this.message=inputData
  }
}
