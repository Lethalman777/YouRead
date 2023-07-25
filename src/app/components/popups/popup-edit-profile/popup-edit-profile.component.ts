import { Component, Inject, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { AuthorLabel, UserProfile } from 'src/app/models/types/User';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-popup-edit-profile',
  templateUrl: './popup-edit-profile.component.html',
  styleUrls: ['./popup-edit-profile.component.css']
})
export class PopupEditProfileComponent {
  profile!:UserProfile
  formModel: FormGroup;
  formData:FormData = new FormData()

  constructor(private storageService:StorageService, private userService:UserService,
    @Inject(MAT_DIALOG_DATA) public inputData: number){
      this.userService.getProfile(inputData).subscribe(data=>{
        this.profile=data
      })
      this.formModel = new FormGroup({
        username: new FormControl(this.profile.username, [
          Validators.required,
          Validators.minLength(3)
        ]),
        image: new FormControl(new FormData())
      });
    }

  submit(){
    if(!this.formModel.valid){
      return
    }
    const profile:UserProfile={
      id: this.profile.id,
      username: this.username.value,
      image: '',
      dateOfBirth: this.profile.dateOfBirth
    }
    console.log(profile)
    this.storageService.uploadImage(this.image.value).subscribe(data=>{
      console.log(data)
      profile.image = data.image
      this.userService.updateProfile(profile).subscribe(data1=>{
        console.log(data1)
      })
    })
  }

  // public dropped(files: NgxFileDropEntry[]) {
  //   this.files = files;

  //   for (const droppedFile of files) {

  //     // Is it a file?
  //     if (droppedFile.fileEntry.isFile) {
  //       const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
  //       fileEntry.file((file: File) => {

  //         // Here you can access the real file
  //         console.log(droppedFile.relativePath, file);

  //         // You could upload it like this:
  //         //const formData = new FormData()
  //         this.formData.append(file.name, file
  //         //, droppedFile.relativePath
  //         )
  //         this.fileName=file.name
  //         console.log(this.formData.get(file.name))

  //         })
  //     } else {
  //       // It was a directory (empty directories are added, otherwise only files)
  //       const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
  //       //console.log(droppedFile.relativePath, fileEntry);
  //     }
  //   }
  // }

  get image() {
    return this.formModel.get('image') as FormControl;
  }

  get username() {
    return this.formModel.get('username') as FormControl;
  }
}
