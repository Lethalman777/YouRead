import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ChapterLabel } from 'src/app/models/types/Chapter';

@Component({
  selector: 'app-user-workpiece-chapter',
  templateUrl: './user-workpiece-chapter.component.html',
  styleUrls: ['./user-workpiece-chapter.component.css']
})
export class UserWorkpieceChapterComponent {

  @Input()chapter!:ChapterLabel

  constructor(private router:Router){

  }

  ContinueWriting(){
    console.log(this.chapter.id)
    this.router.navigate(['/chapter-edit', this.chapter.id]
    )
  }
}
