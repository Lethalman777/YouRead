import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { getSortByOptions, SortByEnum } from 'src/app/shared/enums/SortByEnum';
import { WorkpieceLabel } from 'src/app/shared/models/Workpiece';
import { WorkpieceService } from 'src/app/shared/services/workpiece.service';

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
  sortByOptions=getSortByOptions()
  sortBy= new FormControl('')

  constructor(private workpieceService:WorkpieceService){

  }

  handleSortBy(sortOption:SortByEnum){
    switch(sortOption){
      case SortByEnum.likeAsc:
        this.workpieces.sort((a, b) => {
          return (b.information.likeCount - b.information.dislikeCount/2) - (a.information.likeCount - a.information.dislikeCount/2)
        });
        break;
      case SortByEnum.dateDesc:
        this.workpieces.sort((a, b) => {
          return a.information.publicationDate.getDate() - b.information.publicationDate.getDate()
        });
        break;
      default: break;
    }

  }
}
