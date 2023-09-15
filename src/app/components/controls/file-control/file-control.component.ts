import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ControlProp } from 'src/app/models/types/Control';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxFileDropEntry } from 'ngx-file-drop/ngx-file-drop/ngx-file-drop-entry';
import { environment } from 'src/app/environments/environment.prod';

@Component({
  selector: 'app-file-control',
  templateUrl: './file-control.component.html',
  styleUrls: ['./file-control.component.css']
})
export class FileControlComponent {
  @Input() controlProp!:ControlProp
  @Input() isMultiple:boolean = false
  uploadMethod:string = 'UploadMultipleImages'
  @Output() controlChangeEvent = new EventEmitter<FormControl>();
  files: NgxFileDropEntry[] = [];
  uploadUrl:string = environment.api_url + '/Storage/' + this.uploadMethod
  constructor(){

  }

  onFileUpload(e:any){
    const res = JSON.parse(e.request.response);
    const images = res.map((imagePath:{image:string})=>{
      return imagePath.image
    })
    if(this.isMultiple){
      this.controlProp.formControl.setValue(images)
    } else {
      this.controlProp.formControl.setValue(images[0])
    }
    console.log(this.controlProp.formControl.value);
  }

  onFileChange(files: NgxFileDropEntry[]) {
    // if (event.target.files.length > 0) {
    //   const file:File = event.target.files[0];
    //   const formData:FormData = new FormData()
    //   formData.append(file.name, file, file.name)
    //   this.controlProp.formControl.setValue(formData);
    //   console.log(file)
    //   //this.controlChangeEvent.emit(file);
    // }

    for (const droppedFile of files) {
      this.files = files;

      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          console.log(droppedFile.relativePath, file);

          const formData = this.controlProp.formControl.value
          formData.append(file.name, file, file.name)

          this.controlProp.formControl.setValue(formData);
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
}
