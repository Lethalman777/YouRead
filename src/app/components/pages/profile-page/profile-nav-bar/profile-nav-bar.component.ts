import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProfileArea } from '../../../../models/enums/ProfileArea';
import { ButtonGroupItem } from 'src/app/models/types/Control';

@Component({
  selector: 'app-profile-nav-bar',
  templateUrl: './profile-nav-bar.component.html',
  styleUrls: ['./profile-nav-bar.component.css']
})
export class ProfileNavBarComponent {
  @Input() set props(value:boolean){
    this.isLoggedProfile = value
  }
  @Output() MainAreaEvent: EventEmitter<ProfileArea> = new EventEmitter<ProfileArea>();

  areas:ButtonGroupItem[]=[
    {text:'Dzieła', value:ProfileArea.WorkpiecesList},
    {text:'Stwórz Post', value:ProfileArea.ProfileNewPost},
    {text:'Dashboard', value:ProfileArea.ProfileDashboard},
    {text:'Subskrypcje', value:ProfileArea.ProfileSubscribsions}
  ]

  isLoggedProfile:boolean = false

  defaultArea:ButtonGroupItem[] = [{text:'Dzieła', value:ProfileArea.WorkpiecesList}]
  currentArea:ProfileArea = ProfileArea.WorkpiecesList
  workpiecesList:ProfileArea = ProfileArea.WorkpiecesList
  profileDashboard:ProfileArea = ProfileArea.ProfileDashboard
  profileSubscribsions:ProfileArea = ProfileArea.ProfileSubscribsions
  profileNewPost:ProfileArea = ProfileArea.ProfileNewPost

  changeArea(area:any){
    console.log(area)
    this.currentArea = area.value as ProfileArea
    this.MainAreaEvent.emit(this.currentArea)
  }
  // changeArea(area:string){
  //   if(area == "WorkpiecesList"){
  //     this.currentArea = ProfileArea.WorkpiecesList
  //   }
  //   else if(area == "Dashboard"){
  //     this.currentArea = ProfileArea.ProfileDashboard
  //   }
  //   else if(area == "NewPost"){
  //     this.currentArea = ProfileArea.ProfileNewPost
  //   }
  //   else{
  //     this.currentArea = ProfileArea.ProfileSubscribsions
  //   }

  //   this.MainAreaEvent.emit(this.currentArea)
  // }
}
