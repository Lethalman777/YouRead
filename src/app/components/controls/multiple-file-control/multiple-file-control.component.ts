import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ControlProp } from 'src/app/models/types/Control';

@Component({
  selector: 'app-multiple-file-control',
  templateUrl: './multiple-file-control.component.html',
  styleUrls: ['./multiple-file-control.component.css']
})
export class MultipleFileControlComponent {
  @Input() controlProp!:ControlProp
  @Output() controlChangeEvent = new EventEmitter<FormControl>();

  constructor(){

  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const files:File[] = event.target.files;
      const formData:FormData = new FormData()
      files.forEach(file => {
        formData.append(file.name, file, file.name)
      });
      this.controlProp.formControl.setValue(formData);
    }
  }
}
