import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { PopupMessageComponent } from '../popups/popup-message/popup-message.component';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent {
  profileImage:string=""
  constructor(private router:Router, private dialog: MatDialog,
     private tokenService:TokenService, private storageService:StorageService){
      // storageService.getProfileImageById(Number(tokenService.get())).subscribe(data=>{
      //   this.profileImage=data
      // })
  }
  navigateToSearch(){
    this.router.navigate(['./workpiece-results'])
  }

  navigateToProfile(){
    if(this.tokenService.isLoggedIn()){
      this.router.navigate(['./user-profile', Number(this.tokenService.get())])
    }
    else{
      const dialogRef = this.dialog.open(PopupMessageComponent, {
        width: '400px',
        data:"Zaloguj się lub załóż nowe konto"
      });
    }
  }

  navigateToCreate(){
    if(this.tokenService.isLoggedIn()){
      this.router.navigate(['./user-workpieces', Number(this.tokenService.get())])
    }
    else{
      const dialogRef = this.dialog.open(PopupMessageComponent, {
        width: '400px',
        data:"Zaloguj się lub załóż nowe konto"
      });
    }
  }

  navigateToNewPost(){
    if(this.tokenService.isLoggedIn()){
      this.router.navigate(['./new-post', Number(this.tokenService.get())])
    }
    else{
      const dialogRef = this.dialog.open(PopupMessageComponent, {
        width: '400px',
        data:"Zaloguj się lub załóż nowe konto"
      });
    }
  }
}
