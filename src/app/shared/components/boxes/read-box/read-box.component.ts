import { Component, Input } from '@angular/core';
import { ChapterRead, ChapterPages } from 'src/app/shared/models/Chapter';
import { ReadHistory } from 'src/app/shared/models/ReadHistory';
import { ChapterService } from 'src/app/shared/services/chapter.service';
import { ReadHistoryService } from 'src/app/shared/services/read-history.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { UserService } from 'src/app/shared/services/user.service';

export interface ReadBoxProps {
  workpieceId:number
  chapterNumber:number
  readHistory:ReadHistory
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
      this.chapterPages={pages:this.chapter.pages, leftPage:value.readHistory.leftPage, rightPage:value.readHistory.rightPage}
      console.log(this.chapter)
      console.log(this.chapterPages)
    })
  }
  chapter!:ChapterRead
  chapterPages!:ChapterPages
  readHistory!:ReadHistory

  constructor(private chapterService:ChapterService, private readHistoryService:ReadHistoryService,
    private userService:UserService, private tokenService:TokenService){
    // chapterService.getChapterRead(this.workpieceId, this.chapterNumber).subscribe(data=>{
    //   this.chapter=data
    //   this.chapterPages={pages:this.chapter.pages, leftPage:0, rightPage:1}
    //   console.log(this.chapter)
    // })
  }

  getRightPage(){
    if(this.chapterPages.rightPage > this.chapterPages.pages.length-1){
      return ""
    } else {
      return this.chapterPages.pages[this.chapterPages.rightPage]
    }
  }

  turnPage(isRight:boolean){
    if(isRight){
      if(this.chapterPages.rightPage === this.chapterPages.pages.length-1 || this.chapterPages.leftPage === this.chapterPages.pages.length-1){
        return
      }
      this.chapterPages.leftPage+=2
      this.chapterPages.rightPage+=2
    }else{
      if(this.chapterPages.leftPage === 0){
        return
      }
      this.chapterPages.rightPage-=2
      this.chapterPages.leftPage-=2
    }

    if(this.tokenService.isLoggedIn()){
      this.readHistory.leftPage = this.chapterPages.leftPage
      this.readHistory.rightPage = this.chapterPages.rightPage
      console.log(this.readHistory.leftPage, this.readHistory.rightPage)
      this.readHistoryService.updateReadHistory(this.readHistory).subscribe(data=>{
        console.log(data)
      })
    }
  }
}
