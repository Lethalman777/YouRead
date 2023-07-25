import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-confirm',
  templateUrl: './popup-confirm.component.html',
  styleUrls: ['./popup-confirm.component.css']
})
export class PopupConfirmComponent {
  message:string=""

  constructor(@Inject(MAT_DIALOG_DATA) public inputData: string,
  public dialogRef: MatDialogRef<PopupConfirmComponent>
  ) {
    this.message=inputData
  }

  submit(isConfirmed:boolean){
    this.dialogRef.close(isConfirmed);
  }
}
