import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-control',
  templateUrl: './date-control.component.html',
  styleUrls: ['./date-control.component.css']
})
export class DateControlComponent {
  @Input() formControl:FormControl = new FormControl(new Date(String(new Date().getFullYear()-15)+"-01-01"))
  @Input() label:string = "Podaj datę"
  @Input() pickerType:string = "calendar"

  startDate = new Date(String(new Date().getFullYear())+"-01-01");

  onValueChanged(e:any){

  }
}
