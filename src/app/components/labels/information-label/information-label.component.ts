import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactionClickedEnum, ReactionObjectEnum, ReactionTypeEnum } from 'src/app/models/enums/ReactionEnum';
import { Information } from 'src/app/models/types/Information';
import { ReactionService } from 'src/app/services/reaction.service';
import { TokenService } from 'src/app/services/token.service';

export interface InformationLabelProps{
  targetId:number
  information:Information
  object:ReactionObjectEnum
}
@Component({
  selector: 'app-information-label',
  templateUrl: './information-label.component.html',
  styleUrls: ['./information-label.component.css']
})
export class InformationLabelComponent {
  @Input() set props(value:InformationLabelProps){
    this.information=value.information
    this.targetId=value.targetId
    this.object=value.object
    this.publicationDate=this.datePipe.transform(this.information.publicationDate, 'dd-MM-yyyy')
    if(!this.tokenService.isLoggedIn()){
      return
    }
    this.reactionService.getClickedReaction({targetId:this.targetId, userProfileId:this.userProfileId, object:this.object}).subscribe(data=>{
      switch(data){
        case ReactionClickedEnum.like:
          this.isLike=true
          this.isDislike=false
          break
        case ReactionClickedEnum.dislike:
          this.isLike=false
          this.isDislike=true
          break
        case ReactionClickedEnum.like:
          this.isLike=false
          this.isDislike=false
          break
      }
    })
  }
  information!:Information
  targetId!:number
  object!:ReactionObjectEnum
  publicationDate?:string | null
  userProfileId:number=0
  isLike:boolean=false
  isDislike:boolean=false

  constructor(private datePipe: DatePipe,
    private reactionService:ReactionService,
    private tokenService:TokenService){
      this.userProfileId = Number(tokenService.get())
  }

  clickLike(){
    if(this.isLike){
      return
    }
    this.reactionService.createReaction({userProfileId:this.userProfileId, targetId:this.targetId, type:ReactionTypeEnum.like, object:ReactionObjectEnum.workpiece, dateOfReaction:new Date(), isClicked:this.isLike}).subscribe(data=>
      {
        console.log(data)
      })
  }

  clickDislike(){
    if(this.isDislike){
      return
    }
    this.reactionService.createReaction({userProfileId:this.userProfileId, targetId:this.targetId, type:ReactionTypeEnum.dislike, object:ReactionObjectEnum.workpiece, dateOfReaction:new Date(), isClicked:this.isDislike}).subscribe(data=>{
      console.log(data)
    })
  }
}
