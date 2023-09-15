import { Component, NgModule, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService, IUser } from '../../services';
import { UserPanelModule } from '../user-panel/user-panel.component';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';

import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Token } from '@angular/compiler';
import { TokenService } from 'src/app/services/token.service';
import { AuthorLabel, UserProfile } from 'src/app/models/types/User';
import { navigation } from 'src/app/app-navigation';
import { CreationPanelComponent } from 'src/app/components/nav-bar/creation-panel/creation-panel.component';
import { AppModule } from 'src/app/app.module';
import { DxContextMenuModule, DxListModule } from 'devextreme-angular';
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Output()
  menuToggle = new EventEmitter<boolean>();
  @Output()
  TitleClick = new EventEmitter();

  @Input()
  menuToggleEnabled = false;

  @Input()
  title!: string;

  menuMode: string = 'context';

  user!: UserProfile

  userMenuItems = [{
    text: 'Profil',
    icon: 'user',
    onClick: () => {
      this.router.navigate(['user-profile', this.user.id]);
    }
  },
  {
    text: 'Wyloguj się',
    icon: 'runner',
    onClick: () => {
      this.authService.logOut();
    }
  }];

  constructor(private authService: AuthService, private router: Router,
    private userService:UserService, private tokenService:TokenService) { }

  ngOnInit() {
    //this.authService.getUser().then((e) => this.user = e.data);
    if(this.tokenService.isLoggedIn()){
      this.userService.loggedUserId().subscribe(data=>{
        this.userService.getProfile(data.userId).subscribe(data1=>{
          this.user=data1
        })
      })
    }
  }

  menuItems = [
    {
      text: 'Stwórz nową opowieść',
      icon: 'edit',
      onClick: () => {
        this.router.navigate(['new-workpiece']);
      }
    },
    {
      text: 'Twoje dzieła',
      icon: 'description',
      onClick: () => {
        this.router.navigate(['user-workpiece', this.user.id]);
      }
    }];

  toggleMenu = () => {
    this.menuToggle.emit();
  }

  titleClick(){
    this.TitleClick.emit();
  }
}

@NgModule({
  imports: [
    CommonModule,
    DxButtonModule,
    UserPanelModule,
    DxToolbarModule,
    DxListModule,
    DxContextMenuModule
  ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
