import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupEditProfileComponent } from 'src/app/components/popups/popup-edit-profile/popup-edit-profile.component';
import { UserProfile } from 'src/app/models/types/User';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent {
  @Input() set inputProfileId(value:number){
    this.profileId=value

    this.userService.getProfile(Number(value)).subscribe(data=>{
      console.log(data)
      this.profile=data
    })
    this.userService.loggedUserId().subscribe({
      next:(res)=>{
        if(value==res.userId){
          this.isLogedProfile=true
        }
      }
    })
  }
  isLogedProfile:boolean=false
  profileId!:number
  profile!:UserProfile
  loggedUserProfileId:number=0
  isPopupVisible:boolean=false

  constructor(private tokenService:TokenService, private userService:UserService,  private dialog: MatDialog){}

  editProfile(){
    // const dialogRef = this.dialog.open(PopupEditProfileComponent, {
    //   width: '800px',
    //   height: '600px',
    //   data:this.profileId
    // });
    this.isPopupVisible = true
  }

  onPopupHiding(){
    this.isPopupVisible = false
  }

  hide(){
    console.log('FFF')
  }
}
