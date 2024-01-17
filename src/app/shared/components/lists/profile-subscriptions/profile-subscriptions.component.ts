import { Component, Input } from '@angular/core';
import { SubscriptionLabel } from 'src/app/shared/models/Subscription';
import { AuthorLabel } from 'src/app/shared/models/User';
import { SubscriptionService } from 'src/app/shared/services/subscription.service';

@Component({
  selector: 'app-profile-subscriptions',
  templateUrl: './profile-subscriptions.component.html',
  styleUrls: ['./profile-subscriptions.component.css']
})
export class ProfileSubscriptionsComponent {
  @Input() set inputProfileId(value:number){
    this.profileId=value
    this.subscriptionService.getSubscriptions(value).subscribe(data=>{
      this.subscribedProfiles=data
    })
  }
  profileId!:number
  subscribedProfiles:SubscriptionLabel[]=[]

  constructor(private subscriptionService:SubscriptionService){}

}
