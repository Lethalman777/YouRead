import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileArea } from 'src/app/shared/enums/ProfileArea';
import { TokenService } from 'src/app/shared/services/token.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  currentArea:ProfileArea = ProfileArea.WorkpiecesList
  profileId!:number
  isLoggedProfile:boolean = false
  loggedUserProfileId:number=0

  constructor(private route:ActivatedRoute, private tokenService:TokenService, private userService:UserService){}

  ngOnInit(): void {
    this.userService.loggedUserId().subscribe({
      next:(res)=>{
        this.loggedUserProfileId = res.userId
      }
    })
    this.route.params.subscribe((params) => {
      this.profileId = Number(params['id']);
    });
    if(this.profileId == this.loggedUserProfileId){
      this.isLoggedProfile = true
    }
  }
  handleMainAreaEvent(currentArea:ProfileArea) {
    this.currentArea = currentArea
  }
}
