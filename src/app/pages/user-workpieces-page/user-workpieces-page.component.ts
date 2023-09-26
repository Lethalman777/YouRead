import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WorkpieceLabel } from 'src/app/shared/models/Workpiece';
import { TokenService } from 'src/app/shared/services/token.service';
import { UserService } from 'src/app/shared/services/user.service';
import { WorkpieceService } from 'src/app/shared/services/workpiece.service';
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
