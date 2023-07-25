import { Component, Input } from '@angular/core';
import { WorkpieceService } from '../../../../../services/workpiece.service';
import { WorkpieceLabel } from 'src/app/models/types/Workpiece';

@Component({
  selector: 'app-profile-workpieces-list',
  templateUrl: './profile-workpieces-list.component.html',
  styleUrls: ['./profile-workpieces-list.component.css']
})
export class ProfileWorkpiecesListComponent {
  @Input() set inputProfileId(value:number){
    this.profileId=value
    this.workpieceService.getUserWorkpieces(value).subscribe(data=>{
      this.workpieces=data
    })
  }
  profileId!:number
  workpieces:WorkpieceLabel[]=[]

  constructor(private workpieceService:WorkpieceService){

  }
}
