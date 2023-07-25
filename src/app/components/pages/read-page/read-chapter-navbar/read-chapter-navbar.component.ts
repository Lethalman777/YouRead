import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChapterLabel, ChapterRead } from 'src/app/models/types/Chapter';

export interface ReadChapterNavbarProps{
  currentChapter:number,
  chapters:ChapterRead[]
}

@Component({
  selector: 'app-read-chapter-navbar',
  templateUrl: './read-chapter-navbar.component.html',
  styleUrls: ['./read-chapter-navbar.component.css']
})
export class ReadChapterNavbarComponent {
  @Input() set props(value:ReadChapterNavbarProps){
    this.currentChapter=value.currentChapter
    this.chapters = value.chapters.map((data:ChapterRead)=>({
      id:data.id,
      title:data.title,
      chapterNumber:data.chapterNumber,
      dateOfPublication:data.dateOfPublication,
      workpieceId:0
    }))
  }
  @Output() ChapterChooseEvent:EventEmitter<number> = new EventEmitter<number>();

  chapters:ChapterLabel[]=[]
  currentChapter!:number

  chapterChoose(chapter:number){
    this.ChapterChooseEvent.emit(chapter)
  }
}
