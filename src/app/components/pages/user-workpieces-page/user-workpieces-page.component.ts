import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { WorkpieceService } from '../../../services/workpiece.service';import { WorkpieceLabel } from 'src/app/models/types/Workpiece';
import { TokenService } from 'src/app/services/token.service';
;

@Component({
  selector: 'app-user-workpieces-page',
  templateUrl: './user-workpieces-page.component.html',
  styleUrls: ['./user-workpieces-page.component.css']
})
export class UserWorkpiecesPageComponent {
  workpieces:WorkpieceLabel[]=[]

  constructor(private workpieceService:WorkpieceService, private tokenService:TokenService){
    const userProfileId:number = Number(tokenService.get())
    workpieceService.getUserWorkpieces(userProfileId).subscribe(data=>{
      this.workpieces=data
      console.log(this.workpieces)
    })
  }
}
