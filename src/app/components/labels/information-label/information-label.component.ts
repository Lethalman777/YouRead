import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactionClickedEnum, ReactionObjectEnum, ReactionTypeEnum } from 'src/app/models/enums/ReactionEnum';
import { SearchOperatorEnum, SearchDataTypeEnum } from 'src/app/models/enums/SearchEnum';
import { getSearchParam } from 'src/app/models/functions/SearchFunction';
import { Information } from 'src/app/models/types/Information';
import { SearchParam } from 'src/app/models/types/Search';
import { ReactionService } from 'src/app/services/reaction.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

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
    this.userService.loggedUserId().subscribe({
      next:(res)=>{
        this.loggedUserProfileId = res.userId
      }
    })
    this.getTargetId(this.likeSearchParam.params)
    this.getTargetId(this.dislikeSearchParam.params)

    this.reactionService.getClickedReaction({targetId:this.targetId, userProfileId:this.userProfileId, object:this.object}).subscribe(data=>{
      if(this.object == ReactionObjectEnum.workpiece){
        console.log(data)

      }
      switch(data){
        case ReactionClickedEnum.like:
          this.isLike=true
          this.isDislike=false
          break
        case ReactionClickedEnum.dislike:
          this.isLike=false
          this.isDislike=true
          break
        case ReactionClickedEnum.none:
          this.isLike=false
          this.isDislike=false
          break
      }
    })
  }

  isLogged:boolean = false
  isPopupVisible:boolean = false
  information!:Information
  targetId!:number
  object!:ReactionObjectEnum
  publicationDate?:string | null
  userProfileId:number=0
  isLike:boolean=false
  isDislike:boolean=false

  likeSearchParam:SearchParam = getSearchParam(undefined ,undefined, undefined, undefined, undefined, undefined, true, [
    getSearchParam('UserProfileId', this.targetId, SearchDataTypeEnum.number),
    getSearchParam('Type', ReactionTypeEnum.like, SearchDataTypeEnum.reactionTypeEnum)
  ])

  dislikeSearchParam:SearchParam = getSearchParam(undefined ,undefined, undefined, undefined, undefined, undefined, true, [
    getSearchParam('UserProfileId', this.targetId, SearchDataTypeEnum.number),
    getSearchParam('Type', ReactionTypeEnum.dislike, SearchDataTypeEnum.reactionTypeEnum)
  ])
  loggedUserProfileId:number=0

  constructor(private datePipe: DatePipe,
    private reactionService:ReactionService,
    private tokenService:TokenService,
    private userService:UserService){

  }

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLoggedIn()
  }

  clickLike(){
    if(this.isLike){
      this.isLike=false
      this.information.likeCount--
      this.reactionService.deleteReaction(this.likeSearchParam, this.object).subscribe(()=>{
        console.log("jkjk")
      })
    } else {
      this.isLike=true
      this.information.likeCount++
      if(this.isDislike){
        this.isDislike=false
        this.information.dislikeCount--
        this.reactionService.deleteReaction(this.dislikeSearchParam, this.object).subscribe(()=>{
          console.log("jkjk")
        })
      }
      this.reactionService.createReaction({userProfileId:this.userProfileId, targetId:this.targetId, type:ReactionTypeEnum.like, object:ReactionObjectEnum.workpiece, dateOfReaction:new Date(), isClicked:this.isLike}).subscribe(data=>{
        console.log(data)
      })
    }
  }

  clickDislike(){
    if(this.isDislike){
      this.isDislike=false
      this.information.dislikeCount--
      this.reactionService.deleteReaction(this.dislikeSearchParam, this.object).subscribe(()=>{
        console.log("jkjk")
      })
    } else {
      this.isDislike=true
      this.information.dislikeCount++
      if(this.isLike){
        this.isLike=false
        this.information.likeCount--
        this.reactionService.deleteReaction(this.likeSearchParam, this.object).subscribe(()=>{
          console.log("jkjk")
        })
      }
      this.reactionService.createReaction({userProfileId:this.userProfileId, targetId:this.targetId, type:ReactionTypeEnum.dislike, object:ReactionObjectEnum.workpiece, dateOfReaction:new Date(), isClicked:this.isDislike}).subscribe(data=>{
        console.log(data)
      })
    }
  }

  getTargetId(params:SearchParam[]){
    if(params.length > 2){
      params.pop()
    }

    switch(this.object){
      case ReactionObjectEnum.workpiece:
        params.push(
          getSearchParam('WorkpieceId', this.targetId, SearchDataTypeEnum.number)
        )
        break
      case ReactionObjectEnum.post:
        params.push(
          getSearchParam('PostId', this.targetId, SearchDataTypeEnum.number)
        )
        break
      case ReactionObjectEnum.comment:
        params.push(
          getSearchParam('CommentId', this.targetId, SearchDataTypeEnum.number)
        )
        break
      default: break
    }
  }

  hidePopup(){
    this.isPopupVisible = false
  }
}
