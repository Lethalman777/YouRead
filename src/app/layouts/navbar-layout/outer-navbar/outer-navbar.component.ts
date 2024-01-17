import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DxScrollViewComponent } from 'devextreme-angular';
import { DxTreeViewTypes } from 'devextreme-angular/ui/tree-view';
import { ScreenService } from 'src/app/shared/services/screen.service';

@Component({
  selector: 'app-outer-navbar',
  templateUrl: './outer-navbar.component.html',
  styleUrls: ['./outer-navbar.component.css']
})
export class OuterNavbarComponent implements OnInit {
  @ViewChild(DxScrollViewComponent, {static: true}) scrollView!: DxScrollViewComponent;
  @ViewChild('scrollViewMain', {static: false}) scrollViewElement!: ElementRef;
  selectedRoute = '';

  menuOpened!: boolean;
  temporaryMenuOpened = true;

  isLogged:boolean = false

  @Input()
  title!: string;

  menuMode = 'shrink';
  menuRevealMode = 'expand';
  minMenuSize = 0;
  shaderEnabled = false;

  constructor(private screen: ScreenService, private router: Router, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

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


    const element = this.document.getElementById("scrollViewMain")
    this.renderer.setStyle(element, 'background-color', '#2a2a2a');
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
