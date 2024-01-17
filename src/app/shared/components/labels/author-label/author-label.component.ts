import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SearchDataTypeEnum } from 'src/app/shared/enums/SearchEnum';
import { getSearchParam } from 'src/app/shared/functions/SearchFunction';
import { SearchParam } from 'src/app/shared/models/Search';
import { AuthorLabel } from 'src/app/shared/models/User';
import { SubscriptionService } from 'src/app/shared/services/subscription.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { UserService } from 'src/app/shared/services/user.service';

export interface AuthorLabelProps{
  author:AuthorLabel
  isSubscribedVisible:boolean
}

@Component({
  selector: 'app-author-label',
  templateUrl: './author-label.component.html',
  styleUrls: ['./author-label.component.css']
})
export class AuthorLabelComponent {
  @Input() set props(value:AuthorLabelProps){
    this.author=value.author
    this.isSubscribedVisible=value.isSubscribedVisible
    if(this.tokenService.isLoggedIn()){
      this.userService.loggedUserId().subscribe({
        next:(res)=>{
          this.loggedUserProfileId = res.userId
          const searchParam:SearchParam=getSearchParam(undefined, undefined, undefined, undefined, undefined, true, true, [
            getSearchParam('UserProfileId', res.userId, SearchDataTypeEnum.number),
            getSearchParam('SubscribedProfileId', this.author.id, SearchDataTypeEnum.number)
          ])
          this.subscriptionService.getSubscription(searchParam).subscribe(data=>{
            if(data.length==0){
              this.isSubscribed=false
            } else {
              this.isSubscribed=true
              console.log("sds")
            }
          })
        }
      })
    } else {
      this.isSubscribedVisible = false
    }
  }
  author!:AuthorLabel
  isSubscribedVisible:boolean = false
  isSubscribed:boolean = false
  loggedUserProfileId:number=0

  constructor(private userService:UserService, private subscriptionService:SubscriptionService, private tokenService:TokenService, private router:Router){

  }

  goToProfile(){
    this.router.navigate(['/user-profile', this.author.id])
  }

  subscribe(){
    this.subscriptionService.createSubscription({userProfileId:this.loggedUserProfileId, subscribedProfileId:this.author.id, dateOfCraetion:new Date()}).subscribe(data=>{
      console.log(data)
    })
  }
}
