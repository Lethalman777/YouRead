import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DxScrollViewComponent } from 'devextreme-angular';
import { DxTreeViewTypes } from 'devextreme-angular/ui/tree-view';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
import { ScreenService } from 'src/app/shared/services';

@Component({
  selector: 'app-outer-navbar',
  templateUrl: './outer-navbar.component.html',
  styleUrls: ['./outer-navbar.component.css']
})
export class OuterNavbarComponent {
  @ViewChild(DxScrollViewComponent) scrollView!: DxScrollViewComponent;
  selectedRoute = '';

  menuOpened!: boolean;
  temporaryMenuOpened = true;

  isLogged:boolean = false

  @Input()
  title!: string;

  menuMode = 'shrink';
  menuRevealMode = 'expand';
  minMenuSize = 0;
  shaderEnabled = true;

  constructor(private screen: ScreenService, private router: Router,
    private userService:UserService, private tokenService:TokenService,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    //this.menuOpened = this.screen.sizes['screen-large'];
    this.menuOpened = false;

    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.selectedRoute = val.urlAfterRedirects.split('?')[0];
      }
    });

    this.screen.changed.subscribe(() => this.updateDrawer());

    this.updateDrawer();
  }

  triggerReRender() {
    this.cdRef.detectChanges();
  }

  updateDrawer() {
    const isXSmall = this.screen.sizes['screen-x-small'];
    const isLarge = this.screen.sizes['screen-large'];

    this.menuMode = isLarge ? 'shrink' : 'overlap';
    this.menuRevealMode = isXSmall ? 'slide' : 'expand';
    this.minMenuSize = isXSmall ? 0 : 60;
    this.shaderEnabled = !isLarge;
  }

  get hideMenuAfterNavigation() {
    return this.menuMode === 'overlap' || this.temporaryMenuOpened;
  }

  get showMenuAfterClick() {
    return !this.menuOpened;
  }

  navigationChanged(event: DxTreeViewTypes.ItemClickEvent) {
    const path = (event.itemData as any).path;
    const state = (event.itemData as any).state;
    const pointerEvent = event.event;

    if (path && this.menuOpened) {
      if (event.node?.selected) {
        pointerEvent?.preventDefault();
      }

      if(state != null){
        this.router.navigate([path], {
          queryParams: {
            type: state.type,
            genre: state.genre
          }
        });
      } else {
        this.router.navigate([path]);
      }

      this.scrollView.instance.scrollTo(0);

      if (this.hideMenuAfterNavigation) {
        this.temporaryMenuOpened = false;
        this.menuOpened = false;
        pointerEvent?.stopPropagation();
      }
    } else {
      pointerEvent?.preventDefault();
    }
  }

  navigationTitle(){
    this.router.navigate(['/home']);
  }

  navigationClick() {
    if (this.showMenuAfterClick) {
      this.temporaryMenuOpened = true;
      this.menuOpened = true;
    }
  }
}
