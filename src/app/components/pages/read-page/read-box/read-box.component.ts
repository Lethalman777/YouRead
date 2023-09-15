import { Component, Input } from '@angular/core';
import { ChapterRead, ChapterPages } from 'src/app/models/types/Chapter';
import { ReadHistory } from 'src/app/models/types/ReadHistory';
import { ChapterService } from 'src/app/services/chapter.service';
import { ReadHistoryService } from 'src/app/services/read-history.service';
import { StorageService } from 'src/app/services/storage.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

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

  turnPage(isRight:boolean){
    if(isRight){
      this.chapterPages.leftPage=this.chapterPages.rightPage
      this.chapterPages.rightPage++
    }else{
      this.chapterPages.rightPage=this.chapterPages.leftPage
      this.chapterPages.leftPage--
    }

    if(this.tokenService.isLoggedIn()){
      this.readHistory.leftPage = this.chapterPages.leftPage
      this.readHistory.rightPage = this.chapterPages.rightPage
      this.readHistoryService.updateReadHistory(this.readHistory).subscribe(data=>{
        console.log(data)
      })
    }
  }
}
