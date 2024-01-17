import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserProfile } from 'src/app/shared/models/User';
import { TokenService } from 'src/app/shared/services/token.service';
import { UserService } from 'src/app/shared/services/user.service';

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
  isDeletePopupVisible:boolean=false

  constructor(private tokenService:TokenService, private userService:UserService,  private dialog: MatDialog){}

  editProfile(){
    this.isPopupVisible = true
  }

  deleteProfile(){
    this.isDeletePopupVisible = true
  }

  onPopupHiding(){
    this.isPopupVisible = false
    this.isDeletePopupVisible = false
  }

  onPopupDeleteHiding(isConfirmed:boolean){
    this.isDeletePopupVisible = false
    if(isConfirmed){
      this.userService.deleteProfile(this.profileId).subscribe(data=>{
        console.log(data)
      })
    }
  }
}
