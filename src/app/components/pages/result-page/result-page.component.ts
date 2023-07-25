import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenreCriterium } from 'src/app/models/types/GenreCriterium';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent {
  genres:GenreCriterium[]=[]
  searchTerm:string="a"
  id!:number
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.id = Number(this.route.snapshot.paramMap.get('id'));
    })
    console.log(this.id)
  }

  handleGenreEvent(genresSorted:GenreCriterium[]) {
    this.genres=genresSorted
  }

  handleSearchEvent(searchTerm:string) {
    this.searchTerm=searchTerm
    console.log(searchTerm)
  }
}
