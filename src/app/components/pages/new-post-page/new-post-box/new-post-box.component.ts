import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { PostCreate } from 'src/app/models/types/Post';
import { PostService } from 'src/app/services/post.service';
import { StorageService } from 'src/app/services/storage.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-new-post-box',
  templateUrl: './new-post-box.component.html',
  styleUrls: ['./new-post-box.component.css']
})
export class NewPostBoxComponent {
  formModel: FormGroup;
  userId!:number

  constructor(
    private postService:PostService,
    private storageService:StorageService,
    private tokenService:TokenService){
      this.userId = Number(tokenService.get())
      console.log(this.userId)
    this.formModel = new FormGroup({
      content: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      images: new FormControl(),
    });
  }

  submit(){
    if(!this.formModel.valid){
      return
    }

    const post:PostCreate = {
      content: this.content.value,
      images: [],
      userProfileId: this.userId
    }
    console.log(post)
    if(post.images.length > 0){
      this.storageService.uploadMultipleImages(this.images.value).subscribe(data=>{
        data.forEach(image => {
          post.images.push(image.image)
        });
      })
    } else {
      this.postService.createPost(post).subscribe(data=>{
        console.log(data)
      })
    }
  }

  get content() {
    return this.formModel.get('content') as FormControl;
  }

  get images() {
    return this.formModel.get('images') as FormControl;
  }
}
