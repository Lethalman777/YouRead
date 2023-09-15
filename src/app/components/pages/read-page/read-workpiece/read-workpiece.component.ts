import { Component, Input } from '@angular/core';
import { ReactionService } from 'src/app/services/reaction.service';
import { ReactionObjectEnum, ReactionTypeEnum } from 'src/app/models/enums/ReactionEnum';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { WorkpieceRead } from 'src/app/models/types/Workpiece';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-read-workpiece',
  templateUrl: './read-workpiece.component.html',
  styleUrls: ['./read-workpiece.component.css']
})
export class ReadWorkpieceComponent {
  @Input() workpiece!:WorkpieceRead
  userId!:number

  constructor(private reactionService:ReactionService,
    private subscriptionService:SubscriptionService,
    private tokenService:TokenService,
    private userService:UserService){
      userService.loggedUserId().subscribe({
        next:(res)=>{
          this.userId = res.userId
        }
      })
  }

  // clickLike(){
  //   console.log(this.workpiece)
  //   console.log(this.userId)
  //   this.reactionService.createReaction({userProfileId:this.userId, targetId:this.workpiece.workpiece.id, type:ReactionTypeEnum.like, object:ReactionObjectEnum.workpiece, dateOfReaction:new Date()}).subscribe(data=>
  //     {
  //       console.log(data)
  //     })
  // }

  // clickDislike(){
  //   this.reactionService.createReaction({userProfileId:this.userId, targetId:this.workpiece.workpiece.id, type:ReactionTypeEnum.dislike, object:ReactionObjectEnum.workpiece, dateOfReaction:new Date()}).subscribe(data=>{
  //     console.log(data)
  //   })
  // }

  subscribe(){
    console.log(this.workpiece.author)
    this.subscriptionService.createSubscription({userProfileId:this.userId, subscribedProfileId:this.workpiece.workpiece.author.id, dateOfCraetion:new Date()}).subscribe(data=>{
      console.log(data)
    })
  }
}
