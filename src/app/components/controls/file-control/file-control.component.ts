import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ControlProp } from 'src/app/models/types/Control';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-file-control',
  templateUrl: './file-control.component.html',
  styleUrls: ['./file-control.component.css']
})
export class FileControlComponent {
  @Input() controlProp!:ControlProp
  @Output() controlChangeEvent = new EventEmitter<FormControl>();

  constructor(){

  }

  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file:File = event.target.files[0];
      const formData:FormData = new FormData()
      formData.append(file.name, file, file.name)
      this.controlProp.formControl.setValue(formData);
      console.log(file)
      //this.controlChangeEvent.emit(file);
    }
  }
}
