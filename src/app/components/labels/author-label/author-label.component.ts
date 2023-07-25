import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorLabel } from 'src/app/models/types/User';
import { StorageService } from 'src/app/services/storage.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-author-label',
  templateUrl: './author-label.component.html',
  styleUrls: ['./author-label.component.css']
})
export class AuthorLabelComponent {
  @Input() author!:AuthorLabel

  constructor(private subscriptionService:SubscriptionService, private tokenService:TokenService, private router:Router){

  }

  goToProfile(){
    this.router.navigate(['/user-profile', this.author.id])
  }

  subscribe(){
    this.subscriptionService.createSubscription({userProfileId:Number(this.tokenService.get()), subscribedProfileId:this.author.id, dateOfCraetion:new Date()}).subscribe(data=>{
      console.log(data)
    })
  }
}
