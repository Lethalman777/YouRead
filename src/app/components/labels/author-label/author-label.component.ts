import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SearchOperatorEnum, SearchDataTypeEnum } from 'src/app/models/enums/SearchEnum';
import { getSearchParam } from 'src/app/models/functions/SearchFunction';
import { SearchParam } from 'src/app/models/types/Search';
import { AuthorLabel } from 'src/app/models/types/User';
import { StorageService } from 'src/app/services/storage.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

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
      const searchParam:SearchParam=getSearchParam(undefined, undefined, undefined, undefined, undefined, true, true, [
        getSearchParam('UserProfileId', this.loggedUserProfileId, SearchDataTypeEnum.number),
        getSearchParam('SubscribedProfileId', this.author.id, SearchDataTypeEnum.number)
      ])
  //     const searchParam:SearchParam={
  //       propertyName: '',
  //       operator: SearchOperatorEnum.equal,
  //       dataType: SearchDataTypeEnum.number,
  //       value: 0,
  //       isAnd: true,
  //       isAndInBlock: false,
  //       isEmpty: true,
  //       params: [
  //     {
  //       propertyName: 'UserProfileId',
  //       operator: SearchOperatorEnum.equal,
  //       dataType: SearchDataTypeEnum.number,
  //       value: Number(this.tokenService.get()),
  //       isAnd: true,
  //       isAndInBlock: false,
  //       isEmpty: false,
  //       params: []
  //     },
  //     {
  //       propertyName: 'SubscribedProfileId',
  //       operator: SearchOperatorEnum.equal,
  //       dataType: SearchDataTypeEnum.number,
  //       value: this.author.id,
  //       isAnd: true,
  //       isAndInBlock: false,
  //       isEmpty: false,
  //       params: []
  //     }
  //   ]
  // }

      this.subscriptionService.getSubscription(searchParam).subscribe(data=>{
        if(data.length==0){
          this.isSubscribed=false
        } else {
          this.isSubscribed=true
        }
      })
    }
  }
  author!:AuthorLabel
  isSubscribedVisible:boolean = false
  isSubscribed:boolean = false
  loggedUserProfileId:number=0

  constructor(private userService:UserService, private subscriptionService:SubscriptionService, private tokenService:TokenService, private router:Router){
    this.userService.loggedUserId().subscribe({
      next:(res)=>{
        this.loggedUserProfileId = res.userId
      }
    })
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
