import { Component, HostListener, Input } from '@angular/core';
import { WorkpieceService } from '../../../../services/workpiece.service';
import { WorkpieceLabel } from 'src/app/models/types/Workpiece';
import { SearchParam } from 'src/app/models/types/Search';

import { getEmptyParam } from 'src/app/models/functions/SearchFunction';

export interface ResultsBoxProps{
  searchTerm?:string
  searchParam:SearchParam
  workpieces:WorkpieceLabel[]
}

@Component({
  selector: 'app-results-box',
  templateUrl: './results-box.component.html',
  styleUrls: ['./results-box.component.css']
})

export class ResultsBoxComponent {
  @Input() set props(value:ResultsBoxProps){
    this.searchTerm=value.searchTerm
    this.searchParam=value.searchParam
    this.workpieces=value.workpieces
    //this.search()
  }
  searchParam:SearchParam = getEmptyParam()
  searchTerm?:string
  workpieces:WorkpieceLabel[]=[]
  colNumber:number = 0

  constructor(private workpieceService:WorkpieceService){
    //this.search()
  }

  updateGridSize() {
    const windowWidth = window.innerWidth
    this.colNumber =  Number((windowWidth / 300).toFixed(0));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateGridSize();
  }

  isNewColumn(index:number){

    if(index%3 == 0){
      this.colNumber++
      return true
    } else {
      return false
    }
  }

  newColumn(index:number):number{
    if(index%3==0){
      this.colNumber++
    }

    return this.colNumber
  }

  // @Input() search(){
  //   console.log(this.searchTerm)
  //   console.log(this.searchParam)

  //   this.workpieceService.searchWorkpieces(this.searchParam, this.searchTerm).subscribe(data=>{
  //     this.results=data
  //     console.log(this.results)
  //   })
  // }
}
