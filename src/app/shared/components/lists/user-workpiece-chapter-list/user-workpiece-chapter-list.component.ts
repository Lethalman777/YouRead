import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChapterLabel } from 'src/app/shared/models/Chapter';
import { Router } from '@angular/router';
import { ChapterService } from 'src/app/shared/services/chapter.service';

@Component({
  selector: 'app-user-workpiece-chapter-list',
  templateUrl: './user-workpiece-chapter-list.component.html',
  styleUrls: ['./user-workpiece-chapter-list.component.css']
})
export class UserWorkpieceChapterListComponent {
  workpieceId!:number
  @Output() chooseChapterEvent = new EventEmitter<number>();
  @Input() chapters:ChapterLabel[]=[]
  @Input() isEdited:boolean = false

  constructor(private chapterService:ChapterService, private router:Router){

  }

  chooseChapter(index:number){
    this.chooseChapterEvent.emit(index);
  }
}
