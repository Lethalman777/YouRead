import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-read-workpiece-page',
  templateUrl: './read-workpiece-page.component.html',
  styleUrls: ['./read-workpiece-page.component.css']
})
export class ReadWorkpiecePageComponent {
  @Input() chapterPage!:string

  constructor(){
    console.log(this.chapterPage)
  }
}
