import { Component, EventEmitter, Output } from '@angular/core';
import { GenreCriterium } from '../../../../models/types/GenreCriterium';
import { WorkpieceService } from '../../../../services/workpiece.service';

@Component({
  selector: 'app-sort-box',
  templateUrl: './sort-box.component.html',
  styleUrls: ['./sort-box.component.css']
})
export class SortBoxComponent {
  @Output() CriteriumEvent: EventEmitter<GenreCriterium[]> = new EventEmitter<GenreCriterium[]>();
  genres:GenreCriterium[]=[]
  constructor(workpieceService:WorkpieceService){
    // genreService.getGenres().subscribe(data=>{
    //   data.forEach(genre=>this.genres.push({ id: genre.id, name: genre.name, isChecked: false }))
    // })
    // this.genres.push({
    //   id:1,
    //   genre:"fantasy",
    //   isChecked:false
    // })
    // this.genres.push({
    //   id:2,
    //   genre:"historical",
    //   isChecked:false
    // })
  }

  onChange(genre:GenreCriterium){
    genre.isChecked=!genre.isChecked
    console.log(genre)
    this.CriteriumEvent.emit(this.genres)
  }
}
