import { Component, Input } from '@angular/core';
import { ChapterRead, ChapterPages } from 'src/app/models/types/Chapter';
import { ChapterService } from 'src/app/services/chapter.service';
import { StorageService } from 'src/app/services/storage.service';

export interface ReadBoxProps {
  workpieceId:number
  chapterNumber:number
}
@Component({
  selector: 'app-read-box',
  templateUrl: './read-box.component.html',
  styleUrls: ['./read-box.component.css']
})
export class ReadBoxComponent {
  // @Input() workpieceId!:number
  // @Input() chapterNumber!:number
  @Input() set inputProps(value:ReadBoxProps){
    this.chapterService.getChapterRead(value.workpieceId, value.chapterNumber).subscribe(data=>{
      this.chapter=data
      this.chapterPages={pages:this.chapter.pages, leftPage:0, rightPage:1}
      console.log(this.chapter)
      console.log(this.chapterPages)
    })
  }
  chapter!:ChapterRead
  chapterPages!:ChapterPages

  constructor(private chapterService:ChapterService){
    // chapterService.getChapterRead(this.workpieceId, this.chapterNumber).subscribe(data=>{
    //   this.chapter=data
    //   this.chapterPages={pages:this.chapter.pages, leftPage:0, rightPage:1}
    //   console.log(this.chapter)
    // })
  }

  turnPage(isRight:boolean){
    if(isRight){
      this.chapterPages.leftPage=this.chapterPages.rightPage
      this.chapterPages.rightPage++
    }else{
      this.chapterPages.rightPage=this.chapterPages.leftPage
      this.chapterPages.leftPage--
    }
  }
}
