import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GenreEnum } from 'src/app/shared/enums/GenreEnum';
import { SearchPageEnum } from 'src/app/shared/enums/SearchEnum';
import { SelectEnum } from 'src/app/shared/models/Other';

export interface GenreCarouselProps{
  image:string
  genre:SelectEnum<GenreEnum>
}

@Component({
  selector: 'app-genre-carousel',
  templateUrl: './genre-carousel.component.html',
  styleUrls: ['./genre-carousel.component.css']
})
export class GenreCarouselComponent {
  @Input() props!:GenreCarouselProps

  constructor(private router:Router){}

  onClick(){
    this.router.navigate(['/search'], {
      queryParams: {
        type: SearchPageEnum.Genre,
        genre: this.props.genre.enum
      }
    });
  }

}
