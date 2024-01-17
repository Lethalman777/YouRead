import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SearchDataTypeEnum } from 'src/app/shared/enums/SearchEnum';
import { getSearchParam } from 'src/app/shared/functions/SearchFunction';
import { SearchParam } from 'src/app/shared/models/Search';
import { SubscriptionCreate } from 'src/app/shared/models/Subscription';
import { UserProfile } from 'src/app/shared/models/User';
import { SubscriptionService } from 'src/app/shared/services/subscription.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { UserService } from 'src/app/shared/services/user.service';

export interface ProfileInfoLabelProps{
  author:UserProfile
  isLoggedProfile:boolean
}

@Component({
  selector: 'app-profile-info-label',
  templateUrl: './profile-info-label.component.html',
  styleUrls: ['./profile-info-label.component.css']
})
export class ProfileInfoLabelComponent {
  @Input() set props(value:ProfileInfoLabelProps){
    this.author = value.author
    this.isLoggedProfile = value.isLoggedProfile

      this.userService.loggedUserId().subscribe({
        next:(res)=>{
          const searchParam:SearchParam=getSearchParam(undefined, undefined, undefined, undefined, undefined, undefined, true,
            [
              getSearchParam('UserProfileId', res.userId, SearchDataTypeEnum.number),
              getSearchParam('SubscribedProfileId', this.author.id, SearchDataTypeEnum.number)
            ])

          this.subscriptionService.getSubscription(searchParam).subscribe(data=>{
            if(data.length==0){
              this.isSubscribed=false
            } else {
              this.isSubscribed=true
            }
          })
        }
      })
  }

  author!:UserProfile
  isLoggedProfile:boolean = false
  isSubscribed:boolean = false

  constructor(private subscriptionService:SubscriptionService, private tokenService:TokenService, private router:Router,
    private userService:UserService){

  }
  subscribe(){
    this.userService.loggedUserId().subscribe(data=>{
      const createSubscription:SubscriptionCreate={
        userProfileId: data.id,
        subscribedProfileId: this.author.id,
        dateOfCraetion: new Date()
      }
      this.subscriptionService.createSubscription(createSubscription).subscribe(data=>{

      })
    })
  }
}
