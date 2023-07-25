import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-post-page',
  templateUrl: './new-post-page.component.html',
  styleUrls: ['./new-post-page.component.css']
})
export class NewPostPageComponent {

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {

  }
}
