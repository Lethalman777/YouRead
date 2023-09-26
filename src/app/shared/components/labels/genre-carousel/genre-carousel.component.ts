import { Component, Input } from '@angular/core';
import { GenreEnum, SelectEnum } from 'src/app/shared/enums/GenreEnum';

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
}
