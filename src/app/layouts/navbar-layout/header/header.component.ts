import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UserProfile } from 'src/app/shared/models/User';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output()
  menuToggle = new EventEmitter<boolean>();
  @Output()
  TitleClick = new EventEmitter();

  @Input()
  menuToggleEnabled = true;

  @Input()
  title!: string;

  menuMode: string = 'context';

  user!: UserProfile

  isLogged:boolean = false

  currentRoute:string = ''

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
      this.tokenService.clear();
      this.router.navigate(['login']);
    }
  }];

  constructor(private router: Router,
    private userService:UserService, private tokenService:TokenService,
    public route:ActivatedRoute) { }

  ngOnInit() {
    //this.authService.getUser().then((e) => this.user = e.data);

    this.isLogged = this.tokenService.isLoggedIn()
    if(this.isLogged){
      this.userService.loggedUserId().subscribe(data=>{
        this.userService.getProfile(data.userId).subscribe(data1=>{
          this.user=data1
          console.log(this.user)
        })
      })
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.onRouteChange(event);
      }
    });
  }

  menuItems = [
    {
      text: 'Stwórz nową opowieść',
      icon: 'edit',
      onClick: () => {
        this.router.navigate(['workpiece-new']);
      }
    },
    {
      text: 'Twoje dzieła',
      icon: 'description',
      onClick: () => {
        this.router.navigate(['user-workpieces', this.user.id]);
      }
    }];

  onRouteChange(routeEvent:any) {
    const routeSplitOne = routeEvent.urlAfterRedirects.split('?')[0]
    const routePath = routeSplitOne.split('/')[1]
    console.log(routePath)
    this.currentRoute = routePath
  }

  toggleMenu = () => {
    this.menuToggle.emit();
  }

  titleClick(){
    this.TitleClick.emit();
  }
}
