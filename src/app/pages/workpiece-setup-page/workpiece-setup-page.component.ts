import { Component } from '@angular/core';
import { GenreEnum } from 'src/app/shared/enums/GenreEnum';
import { LanguageEnum } from 'src/app/shared/enums/Language';
import { WorkpieceUpdate } from 'src/app/shared/models/Workpiece';
import { TokenService } from 'src/app/shared/services/token.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-workpiece-setup-page',
  templateUrl: './workpiece-setup-page.component.html',
  styleUrls: ['./workpiece-setup-page.component.css']
})
export class WorkpieceSetupPageComponent {
  genre:GenreEnum=GenreEnum.mixed
  language:LanguageEnum=LanguageEnum.Polish
  userProfileId:number = 0
  workpiece!:WorkpieceUpdate
  date:Date=new Date()

  constructor(private tokenService:TokenService, private userService:UserService){
    userService.loggedUserId().subscribe({
      next:(res)=>{
        this.userProfileId = res.userId
      }
    })
  }
}
