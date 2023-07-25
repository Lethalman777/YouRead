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
    console.log(this.profileId)
    this.userService.getProfile(value).subscribe(data=>{
      this.profile=data
    })
    if(value==Number(this.tokenService.get())){
      this.isLogedProfile=true
    }
  }
  isLogedProfile:boolean=false
  profileId!:number
  profile!:UserProfile

  constructor(private tokenService:TokenService, private userService:UserService,  private dialog: MatDialog){}

  editProfile(){
    const dialogRef = this.dialog.open(PopupEditProfileComponent, {
      width: '800px',
      height: '800px',
      data:this.profileId
    });
  }
}
