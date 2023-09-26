import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.css']
})
export class NavbarButtonComponent {
  @Input() icon:string = ""
  @Input() text:string = ""
  @Input() route:string = ""

  constructor(private router:Router){}

  navigation(){
    this.router.navigate([this.route]);
  }
}
