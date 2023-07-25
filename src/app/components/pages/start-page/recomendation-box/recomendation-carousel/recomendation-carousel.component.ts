import { Component, Input } from '@angular/core';
import { getRandomTopics } from 'src/app/models/functions/Recomendation';
import { WorkpieceLabel } from 'src/app/models/types/Workpiece';
import { WorkpieceService } from 'src/app/services/workpiece.service';

@Component({
  selector: 'app-recomendation-carousel',
  templateUrl: './recomendation-carousel.component.html',
  styleUrls: ['./recomendation-carousel.component.css']
})
export class RecomendationCarouselComponent {
  @Input() set inputTopic(value:number){
    this.topic=value
    console.log(this.topic)
    this.workpieceService.getRecomendedWorkpieces(15, 1).subscribe(data=>{
      this.workpieces=data
      console.log(data)
    })
  }
  topic!:number
  workpieces:WorkpieceLabel[]=[]
  constructor(private workpieceService:WorkpieceService){

  }
}
