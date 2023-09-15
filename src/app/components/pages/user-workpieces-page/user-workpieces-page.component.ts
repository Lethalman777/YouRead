import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { WorkpieceService } from '../../../services/workpiece.service';import { WorkpieceLabel } from 'src/app/models/types/Workpiece';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { ButtonGroupItem } from 'src/app/models/types/Control';
;

@Component({
  selector: 'app-user-workpieces-page',
  templateUrl: './user-workpieces-page.component.html',
  styleUrls: ['./user-workpieces-page.component.css']
})
export class UserWorkpiecesPageComponent {
  workpieces:WorkpieceLabel[]=[]

  constructor(private userService:UserService, private workpieceService:WorkpieceService, private tokenService:TokenService, private router:Router){
    userService.loggedUserId().subscribe({
      next:(res)=>{
        workpieceService.getUserWorkpieces(res.userId).subscribe(data=>{
          this.workpieces=data
          console.log(this.workpieces)
        })
      }
    })
  }

  createWorkpiece(){
    this.router.navigate(['/workpiece-new'])
  }
}
