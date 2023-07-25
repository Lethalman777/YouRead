import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChapterService } from '../../../../../services/chapter.service';
import { ChapterLabel } from 'src/app/models/types/Chapter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-workpiece-chapter-list',
  templateUrl: './user-workpiece-chapter-list.component.html',
  styleUrls: ['./user-workpiece-chapter-list.component.css']
})
export class UserWorkpieceChapterListComponent {
  workpieceId!:number
  @Output() chooseChapterEvent = new EventEmitter<number>();
  @Input() chapters:ChapterLabel[]=[]

  constructor(private chapterService:ChapterService, private router:Router){

  }

  chooseChapter(index:number){
    this.chooseChapterEvent.emit(index);
  }
}
