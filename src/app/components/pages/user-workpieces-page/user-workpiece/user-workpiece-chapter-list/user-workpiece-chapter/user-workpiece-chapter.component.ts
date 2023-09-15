import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ChapterLabel } from 'src/app/models/types/Chapter';
import { ChapterService } from 'src/app/services/chapter.service';

@Component({
  selector: 'app-user-workpiece-chapter',
  templateUrl: './user-workpiece-chapter.component.html',
  styleUrls: ['./user-workpiece-chapter.component.css']
})
export class UserWorkpieceChapterComponent {

  @Input()chapter!:ChapterLabel
  @Input()isEdited:boolean = false

  constructor(private router:Router, private chapterService:ChapterService){
    console.log(this.isEdited)
  }

  ContinueWriting(){
    console.log(this.chapter.id)
    this.router.navigate(['/chapter-edit', this.chapter.id]
    )
  }

  publish(){
    this.chapter.isPublished = !this.chapter.isPublished
    console.log(this.chapter)

    this.chapterService.publishChapter(this.chapter.id, this.chapter.isPublished).subscribe()
  }
}
