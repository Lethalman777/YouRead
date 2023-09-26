import { Component, Input } from '@angular/core';
import { WorkpieceLabel } from 'src/app/shared/models/Workpiece';

@Component({
  selector: 'app-workpieces-list',
  templateUrl: './workpieces-list.component.html',
  styleUrls: ['./workpieces-list.component.css']
})
export class WorkpiecesListComponent {
  @Input() workpieces:WorkpieceLabel[] = []

  currentFocus:number = 0

  constructor(){
    console.log("jj")
    //this.updateGridColumns(4);
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
