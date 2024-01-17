import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SortByEnum, getSortByOptions } from 'src/app/shared/enums/SortByEnum';
import { WorkpieceLabel } from 'src/app/shared/models/Workpiece';

@Component({
  selector: 'app-workpieces-list',
  templateUrl: './workpieces-list.component.html',
  styleUrls: ['./workpieces-list.component.css']
})
export class WorkpiecesListComponent {
  @Input() workpieces:WorkpieceLabel[] = []

  currentFocus:number = 0

  sortByOptions=getSortByOptions()
  sortBy= new FormControl('')

  constructor(){
    console.log("jj")
    //this.updateGridColumns(4);
  }

  handleSortBy(sortOption:SortByEnum){
    switch(sortOption){
      case SortByEnum.likeAsc:
        this.workpieces.sort((a, b) => {
          return (b.information.likeCount - b.information.dislikeCount/2) - (a.information.likeCount - a.information.dislikeCount/2)
        });
        break;
      case SortByEnum.titleAsc:
        this.workpieces.sort((a, b) => {
          return a.title.localeCompare(b.title)
        });
        break;
      case SortByEnum.titleDesc:
        this.workpieces.sort((a, b) => {
          return b.title.localeCompare(a.title)
        });
        break;
      case SortByEnum.dateAsc:
        this.workpieces.sort((a, b) => {
          return b.information.publicationDate.getDate() - a.information.publicationDate.getDate()
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

  updateGridColumns(columnCount:number) {
    const gridElement:any = document.getElementById("workpiece-list");
    console.log(gridElement)
    gridElement.style.setProperty('--grid-columns', columnCount);
  }

  isRight(index:number){
    if(index%4==0 || index%4==1){
      return true
    } else {
      return false
    }
  }

  changeFocus(id:number){
    this.currentFocus = id
  }

  sendFocus(id:number){
    return id === this.currentFocus
  }
}
