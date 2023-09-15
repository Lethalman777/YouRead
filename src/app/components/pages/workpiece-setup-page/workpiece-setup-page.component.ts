import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenreEnum } from 'src/app/models/enums/GenreEnum';
import { LanguageEnum } from 'src/app/models/enums/Language';
import { WorkpieceUpdate } from 'src/app/models/types/Workpiece';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
import { WorkpieceService } from 'src/app/services/workpiece.service';

@Component({
  selector: 'app-workpiece-setup-page',
  templateUrl: './workpiece-setup-page.component.html',
  styleUrls: ['./workpiece-setup-page.component.css']
})
export class WorkpieceSetupPageComponent {
  genre:GenreEnum=GenreEnum.mixed
  language:LanguageEnum=LanguageEnum.Polski
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
