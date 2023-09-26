import { Component, Input } from '@angular/core';
import { WorkpieceRead } from 'src/app/shared/models/Workpiece';
import { ReactionService } from 'src/app/shared/services/reaction.service';
import { SubscriptionService } from 'src/app/shared/services/subscription.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { UserService } from 'src/app/shared/services/user.service';

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
