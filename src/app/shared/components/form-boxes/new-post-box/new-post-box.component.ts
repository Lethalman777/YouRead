import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostCreate } from 'src/app/shared/models/Post';
import { PostService } from 'src/app/shared/services/post.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-new-post-box',
  templateUrl: './new-post-box.component.html',
  styleUrls: ['./new-post-box.component.css']
})
export class NewPostBoxComponent {
  formModel: FormGroup;
  loggedUserProfileId:number=0
  isError:boolean=false
  isConfirmVisible:boolean = false

  @Output() NewPostEvent: EventEmitter<any> = new EventEmitter<any>();

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
        Validators.minLength(3),
        Validators.maxLength(1050),
      ]),
      images: new FormControl(new FormData()),
    });
  }

  submit(){
    if(!this.formModel.valid){
      this.isError = true
      return
    }
    this.isConfirmVisible = true
  }

  onPopupConfirmed(isConfirmed:boolean){
    this.isConfirmVisible = false
    if(isConfirmed){
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
          this.NewPostEvent.emit()
        })
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
