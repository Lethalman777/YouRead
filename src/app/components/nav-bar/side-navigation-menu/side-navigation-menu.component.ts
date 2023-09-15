import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DxTreeViewComponent } from 'devextreme-angular';
import { DxTreeViewTypes } from 'devextreme-angular/ui/tree-view';
import { navigation } from 'src/app/app-navigation';
import * as events from 'devextreme/events';
import { UserService } from 'src/app/services/user.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-sider-navigation-menu',
  templateUrl: './side-navigation-menu.component.html',
  styleUrls: ['./side-navigation-menu.component.css']
})
export class SideNavigationMenuComponent {
  @ViewChild(DxTreeViewComponent, { static: true })
  menu!: DxTreeViewComponent;

  @Output()
  selectedItemChanged = new EventEmitter<DxTreeViewTypes.ItemClickEvent>();

  @Output()
  openMenu = new EventEmitter<any>();

  private _selectedItem!: String;
  @Input()
  set selectedItem(value: String) {
    this._selectedItem = value;
    if (!this.menu.instance) {
      return;
    }

    this.menu.instance.selectItem(value);
  }

  isLogged:boolean = false

  private _items!: Record <string, unknown>[];
  get items() {
    if (!this._items) {
      this._items = navigation.map((item) => {
        if(item.path && !(/^\//.test(item.path))){
          item.path = `/${item.path}`;
        }
         return { ...item, expanded: !this._compactMode }
        });
    }

    if(!this.isLogged){
      this._items = this._items.filter(item=>item['text'] != "Polecane" && item['text'] != "Historia Użytkownika" && item['text'] != "Subskrypcje")
    }

    return this._items;
  }

  private _compactMode = false;
  @Input()
  get compactMode() {
    return this._compactMode;
  }
  set compactMode(val) {
    this._compactMode = val;

    if (!this.menu.instance) {
      return;
    }

    if (val) {
      this.menu.instance.collapseAll();
    } else {
      this.menu.instance.expandItem(this._selectedItem);
    }
  }

  constructor(private elementRef: ElementRef, public tokenService:TokenService) { }

  onItemClick(event: DxTreeViewTypes.ItemClickEvent) {
    this.selectedItemChanged.emit(event);
  }

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLoggedIn()

  }

  ngAfterViewInit() {
    events.on(this.elementRef.nativeElement, 'dxclick', (e: Event) => {
      this.openMenu.next(e);
    });
  }

  ngOnDestroy() {
    events.off(this.elementRef.nativeElement, 'dxclick');
  }
}
