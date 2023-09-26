import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserProfile } from 'src/app/shared/models/User';
import { StorageService } from 'src/app/shared/services/storage.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-popup-edit-profile',
  templateUrl: './popup-edit-profile.component.html',
  styleUrls: ['./popup-edit-profile.component.css']
})
export class PopupEditProfileComponent {
  @Output() HidePopupEvent:EventEmitter<any> = new EventEmitter()
  @Input() isPopupVisible:boolean = false
  profile!:UserProfile
  formModel: FormGroup;
  formData:FormData = new FormData()
  isConfirmVisible:boolean = false
  isSubmit:boolean = false

  constructor(private storageService:StorageService, private userService:UserService){
    this.formModel = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      description: new FormControl(''),
      image: new FormControl(''),
      imageSecond: new FormControl('')
    });
      userService.loggedUserId().subscribe(data=>{
        this.userService.getProfile(data.userId).subscribe(data1=>{
          this.profile=data1;
          this.username.setValue(this.profile.username)
          this.description.setValue(this.profile.description)
          this.image.setValue(this.profile.image)
          this.imageSecond.setValue(this.profile.backgroundImage)
          console.log(this.profile);
        })
      })
    }

  submit(){
    console.log(this.formModel)
    if(!this.formModel.valid){
      return
    }
    this.isConfirmVisible = true
    this.isSubmit = true
  }

  cancel(){
      this.isConfirmVisible = true
      this.isSubmit = false
  }

  onPopupConfirmed(isConfirmed:boolean){
    this.isConfirmVisible = false
    if(isConfirmed){
      if(this.isSubmit){
        const profile:UserProfile={
          id: this.profile.id,
          username: this.username.value,
          image: this.image.value,
          dateOfBirth: this.profile.dateOfBirth,
          subscriberCount: 0,
          workpieceCount: 0,
          description: this.description.value,
          backgroundImage: this.imageSecond.value
        }
        console.log(profile)
        this.userService.updateProfile(profile).subscribe(data=>{
          console.log(data)
          this.HidePopupEvent.emit()
        })
      } else {
        this.HidePopupEvent.emit()
      }
    }
  }

  get image() {
    return this.formModel.get('image') as FormControl;
  }

  get imageSecond() {
    return this.formModel.get('imageSecond') as FormControl;
  }

  get username() {
    return this.formModel.get('username') as FormControl;
  }

  get description() {
    return this.formModel.get('description') as FormControl;
  }
}
