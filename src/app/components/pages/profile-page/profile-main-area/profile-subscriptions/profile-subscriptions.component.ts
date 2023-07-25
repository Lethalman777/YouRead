import { Component, Input } from '@angular/core';
import { AuthorLabel } from 'src/app/models/types/User';
import { SubscriptionService } from 'src/app/services/subscription.service';

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
  subscribedProfiles:AuthorLabel[]=[]

  constructor(private subscriptionService:SubscriptionService){}

}
