import { Component, Input } from '@angular/core';
import { UserProfile } from 'src/app/shared/models/User';

@Component({
  selector: 'app-navbar-panel',
  templateUrl: './navbar-panel.component.html',
  styleUrls: ['./navbar-panel.component.css']
})
export class NavbarPanelComponent {
  @Input()
  menuItems: any;

  @Input()
  menuMode!: string;

  @Input()
  user!:UserProfile

  constructor() {}
}
