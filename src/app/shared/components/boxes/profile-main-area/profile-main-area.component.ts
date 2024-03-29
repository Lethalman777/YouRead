import { Component, Input } from '@angular/core';
import { ProfileArea } from '../../../enums/ProfileArea';

export interface ProfileMainAreaProps{
  profileId:number
  profileArea:ProfileArea
}

@Component({
  selector: 'app-profile-main-area',
  templateUrl: './profile-main-area.component.html',
  styleUrls: ['./profile-main-area.component.css']
})
export class ProfileMainAreaComponent {
  @Input() set props(value:ProfileMainAreaProps){
    this.profileArea=value.profileArea
    this.profileId=value.profileId
    console.log(this.profileId)
  }
  profileId!:number
  profileArea:ProfileArea=ProfileArea.WorkpiecesList

  newPostSubmitted(){
    this.profileArea=ProfileArea.ProfileDashboard
  }
}
