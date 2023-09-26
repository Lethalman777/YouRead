import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ReactionObjectEnum } from 'src/app/shared/enums/ReactionEnum';
import { GenreEnum, getGenreValues } from 'src/app/shared/enums/GenreEnum';
import { LanguageEnum, getLanguageValues } from 'src/app/shared/enums/Language';
import { ReactionService } from 'src/app/shared/services/reaction.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { WorkpieceLabel } from 'src/app/shared/models/Workpiece';

@Component({
  selector: 'app-workpiece-carousel-label',
  templateUrl: './workpiece-carousel-label.component.html',
  styleUrls: ['./workpiece-carousel-label.component.css']
})
export class WorkpieceCarouselLabelComponent {
  @Input() set props(value:WorkpieceLabel){
    this.workpiece = value
  }
  reactionObject:ReactionObjectEnum=ReactionObjectEnum.workpiece
  workpiece!:WorkpieceLabel
  constructor(private router:Router, private reactionService:ReactionService, private tokenService:TokenService){
    console.log(this.workpiece)
  }

  read(){
    this.router.navigate(['/read', this.workpiece.id])
  }

  getGenreLabel(genre:GenreEnum):string{
    const enums = getGenreValues()
    const label = enums.find(data=>data.enum==genre)?.label
    return String(label)
  }

  getLanguageLabel(language:LanguageEnum):string{
    const enums = getLanguageValues()
    const label = enums.find(data=>data.enum==language)?.label
    return String(label)
  }
}
