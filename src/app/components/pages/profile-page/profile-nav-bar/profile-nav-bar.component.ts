import { Component, EventEmitter, Output } from '@angular/core';
import { ProfileArea } from '../../../../models/enums/ProfileArea';

@Component({
  selector: 'app-profile-nav-bar',
  templateUrl: './profile-nav-bar.component.html',
  styleUrls: ['./profile-nav-bar.component.css']
})
export class ProfileNavBarComponent {
  @Output() MainAreaEvent: EventEmitter<ProfileArea> = new EventEmitter<ProfileArea>();
  currentArea:ProfileArea = ProfileArea.WorkpiecesList

  changeArea(area:string){
    if(area == "WorkpiecesList"){
      this.currentArea = ProfileArea.WorkpiecesList
    }
    else if(area == "Dashboard"){
      this.currentArea = ProfileArea.ProfileDashboard
    }
    else{
      this.currentArea = ProfileArea.ProfileSubscribsions
    }

    this.MainAreaEvent.emit(this.currentArea)
  }
}
