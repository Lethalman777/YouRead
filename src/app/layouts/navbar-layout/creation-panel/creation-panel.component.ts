import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/services/token.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-creation-panel',
  templateUrl: './creation-panel.component.html',
  styleUrls: ['./creation-panel.component.css']
})
export class CreationPanelComponent {
  @Input()
  menuMode!: string;
  @Input()
  menuItems: any;
  loggedUserId!:number

  constructor(private router:Router, private userService:UserService, private tokenService:TokenService){

  }

  // menuItems = [
  // {
  //   text: 'Stwórz nową opowieść',
  //   icon: 'edit',
  //   onClick: () => {
  //     this.router.navigate(['new-workpiece']);
  //   }
  // },
  // {
  //   text: 'Twoje dzieła',
  //   icon: 'description',
  //   onClick: () => {
  //     this.router.navigate(['user-workpiece', this.loggedUserId]);
  //   }
  // }];
}
