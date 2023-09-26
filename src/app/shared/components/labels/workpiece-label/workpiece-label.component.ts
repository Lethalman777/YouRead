import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GenreEnum, getGenreValues } from 'src/app/shared/enums/GenreEnum';
import { LanguageEnum, getLanguageValues } from 'src/app/shared/enums/Language';
import { ReactionObjectEnum } from 'src/app/shared/enums/ReactionEnum';
import { WorkpieceLabel } from 'src/app/shared/models/Workpiece';
import { ReactionService } from 'src/app/shared/services/reaction.service';
import { TokenService } from 'src/app/shared/services/token.service';

export interface WorkpieceLabelProps{
  isAuthorVisible:boolean
  workpiece:WorkpieceLabel
}

@Component({
  selector: 'app-workpiece-label',
  templateUrl: './workpiece-label.component.html',
  styleUrls: ['./workpiece-label.component.css']
})
export class WorkpieceLabelComponent {
  //@Input() id!:number
  @Input() set props(value:WorkpieceLabelProps){
    this.workpiece = value.workpiece
    this.isAuthorVisible = value.isAuthorVisible
  }
  isAuthorVisible!:boolean
  reactionObject:ReactionObjectEnum=ReactionObjectEnum.workpiece
  workpiece!:WorkpieceLabel
  constructor(private router:Router, private reactionService:ReactionService, private tokenService:TokenService){
    console.log(this.workpiece)
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

  read(){
    // const reaction:Reaction={
    //   userProfileId: Number(this.tokenService.get()),
    //   type: ReactionTypeEnum.view,
    //   object: ReactionObjectEnum.workpiece,
    //   targetId: this.workpiece.id,
    //   dateOfReaction: new Date()
    // }
    // this.reactionService.createReaction(reaction)
    this.router.navigate(['/read', this.workpiece.id])
  }
}
