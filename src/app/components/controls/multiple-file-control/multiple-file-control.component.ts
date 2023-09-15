import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxFileDropEntry } from 'ngx-file-drop/ngx-file-drop/ngx-file-drop-entry';
import { ControlProp } from 'src/app/models/types/Control';

@Component({
  selector: 'app-multiple-file-control',
  templateUrl: './multiple-file-control.component.html',
  styleUrls: ['./multiple-file-control.component.css']
})
export class MultipleFileControlComponent {
  @Input() controlProp!:ControlProp
  @Output() controlChangeEvent = new EventEmitter<FormControl>();
  files: NgxFileDropEntry[] = [];

  constructor(){

  }

  onFileChange(files: NgxFileDropEntry[]) {
    // if (event.target.files.length > 0) {
    //   const files:File[] = event.target.files;
    //   const formData:FormData = new FormData()
    //   files.forEach(file => {
    //     formData.append(file.name, file, file.name)
    //   });
    //   this.controlProp.formControl.setValue(formData);
    // }

    for (const droppedFile of files) {
      this.files = files;

      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          console.log(droppedFile.relativePath, file);

          const formData = this.controlProp.formControl.value
          formData.append(file.name, file, droppedFile.relativePath)

          this.controlProp.formControl.setValue(formData);
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
    console.log(this.controlProp.formControl.value)
  }
}
