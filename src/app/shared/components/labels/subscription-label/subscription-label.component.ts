import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchDataTypeEnum } from 'src/app/shared/enums/SearchEnum';
import { getSearchParam } from 'src/app/shared/functions/SearchFunction';
import { SearchParam } from 'src/app/shared/models/Search';
import { SubscriptionCreate, SubscriptionLabel } from 'src/app/shared/models/Subscription';
import { UserProfile } from 'src/app/shared/models/User';
import { SubscriptionService } from 'src/app/shared/services/subscription.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-subscription-label',
  templateUrl: './subscription-label.component.html',
  styleUrls: ['./subscription-label.component.css']
})
export class SubscriptionLabelComponent {
  @Input() set props(value:SubscriptionLabel){
    this.profile = value
    this.isLoggedProfile = this.tokenService.isLoggedIn()

      this.userService.loggedUserId().subscribe({
        next:(res)=>{
          const searchParam:SearchParam=getSearchParam(undefined, undefined, undefined, undefined, undefined, undefined, true,
            [
              getSearchParam('UserProfileId', res.userId, SearchDataTypeEnum.number),
              getSearchParam('SubscribedProfileId', this.profile.id, SearchDataTypeEnum.number)
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
  profile!:SubscriptionLabel
  isLoggedProfile:boolean=false
  isSubscribed:boolean=false

  constructor(private tokenService:TokenService, private userService:UserService, private subscriptionService:SubscriptionService){}

  subscribe(){
    this.userService.loggedUserId().subscribe(data=>{
      const createSubscription:SubscriptionCreate={
        userProfileId: data.id,
        subscribedProfileId: this.profile.id,
        dateOfCraetion: new Date()
      }
      this.subscriptionService.createSubscription(createSubscription).subscribe(data=>{

      })
    })
  }
}
