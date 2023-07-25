import { Component } from '@angular/core';
import { getRandomTopics } from 'src/app/models/functions/Recomendation';

@Component({
  selector: 'app-recomendation-box',
  templateUrl: './recomendation-box.component.html',
  styleUrls: ['./recomendation-box.component.css']
})
export class RecomendationBoxComponent {
  topics:any=[]
  constructor(){
    this.topics=getRandomTopics(3)
  }
}
