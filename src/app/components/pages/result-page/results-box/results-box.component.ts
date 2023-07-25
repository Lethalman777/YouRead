import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { WorkpieceService } from '../../../../services/workpiece.service';
import { UserService } from '../../../../services/user.service';
import { GenreCriterium } from '../../../../models/types/GenreCriterium';
import { WorkpieceLabel } from 'src/app/models/types/Workpiece';
import { getCarouselItems, getRandomTopics } from 'src/app/models/functions/Recomendation';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-results-box',
  templateUrl: './results-box.component.html',
  styleUrls: ['./results-box.component.css'],
  animations: [
    trigger('slide', [
      transition(':leave', [
        animate('500ms', keyframes([
          style({ transform: 'translateX(0%)', opacity: 1 }),
          style({ transform: 'translateX(100%)', opacity: 0 })
        ]))
      ]),
      transition(':enter', [
        animate('500ms 500ms', keyframes([
          style({ transform: 'translateX(-100%)', opacity: 0 }),
          style({ transform: 'translateX(0%)', opacity: 1 })
        ]))
      ])
    ])
  ]
})

export class ResultsBoxComponent {
  @Input() genres:GenreCriterium[]=[]
  @Input() set inputSearchTerm(value:string){
    this.searchTerm=value
    this.search()
  }
  currentIndex = 0;
  searchTerm:string = 'a'
  results:WorkpieceLabel[]=[]
  constructor(private workpieceService:WorkpieceService){
    this.workpieceService=workpieceService
    this.search()
  }

  @Input() search(){
    const genresId:number[]=[]
    this.genres.map(data=>{
      if(data.isChecked){
        genresId.push(data.id)
      }
    })
    console.log(this.searchTerm)
    this.workpieceService.searchWorkpieces().subscribe(data=>{
      this.results=data
      //console.log(this.results)
    })
  }
}
