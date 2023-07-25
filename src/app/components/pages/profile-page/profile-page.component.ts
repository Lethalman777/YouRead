import { Component, OnInit } from '@angular/core';
import { ProfileArea } from '../../../models/enums/ProfileArea';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  currentArea:ProfileArea = ProfileArea.WorkpiecesList
  profileId!:number

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      //this.id = Number(params['id']);
      console.log(Number(this.route.snapshot.paramMap.get('id')))
      //this.profileId = Number(this.route.snapshot.paramMap.get('id'))
      this.profileId = 1
  })
  }
  handleMainAreaEvent(currentArea:ProfileArea) {
    this.currentArea = currentArea
  }
}
