import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { PostCreate } from 'src/app/models/types/Post';
import { PostService } from 'src/app/services/post.service';
import { StorageService } from 'src/app/services/storage.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-post-box',
  templateUrl: './new-post-box.component.html',
  styleUrls: ['./new-post-box.component.css']
})
export class NewPostBoxComponent {
  formModel: FormGroup;
  loggedUserProfileId:number=0

  constructor(
    private postService:PostService,
    private storageService:StorageService,
    private tokenService:TokenService,
    private userService:UserService){
      userService.loggedUserId().subscribe({
        next:(res)=>{
          this.loggedUserProfileId = res.userId
        }
      })
      console.log(this.loggedUserProfileId)
    this.formModel = new FormGroup({
      content: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      images: new FormControl(new FormData()),
    });
  }

  submit(){
    if(!this.formModel.valid){
      return
    }

    const post:PostCreate = {
      content: this.content.value,
      images: [],
      userProfileId: this.loggedUserProfileId
    }
    console.log("kkk")
    console.log(this.images.value)
    this.storageService.uploadMultipleImages(this.images.value).subscribe(data=>{
      console.log(data)
      data.forEach(image => {
        post.images.push(image.image)
      });
      this.postService.createPost(post).subscribe(data1=>{
        console.log(data1)
      })
    })
  }

  get content() {
    return this.formModel.get('content') as FormControl;
  }

  get images() {
    return this.formModel.get('images') as FormControl;
  }
}
