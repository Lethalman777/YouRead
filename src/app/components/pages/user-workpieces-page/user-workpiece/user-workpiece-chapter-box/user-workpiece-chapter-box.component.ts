import { Component, Input } from '@angular/core';
import { SearchDataTypeEnum } from 'src/app/models/enums/SearchEnum';
import { getSearchParam } from 'src/app/models/functions/SearchFunction';
import { ChapterLabel } from 'src/app/models/types/Chapter';
import { ChapterService } from 'src/app/services/chapter.service';

export interface UserWorkpieceChapterBoxProps{
  isVisible:boolean
  workpieceId:number
}

@Component({
  selector: 'app-user-workpiece-chapter-box',
  templateUrl: './user-workpiece-chapter-box.component.html',
  styleUrls: ['./user-workpiece-chapter-box.component.css']
})
export class UserWorkpieceChapterBoxComponent {
  @Input()
  set props(value:UserWorkpieceChapterBoxProps){
    this.isChapterPosition = value.isVisible
    const searchParam = getSearchParam("WorkpieceId", value.workpieceId, SearchDataTypeEnum.number)
    this.chapterService.getChapterLabels(searchParam).subscribe(data=>{
      this.chapters=data
      console.log(this.chapters)
    })
  }
  @Input() isEdited:boolean = false
  chapters:ChapterLabel[]=[]
  chapterPosition:number = 0
  isChapterPosition:boolean=false

  constructor(private chapterService:ChapterService){

  }

  changeChapterPosition(isUp:boolean){
    if(isUp){
      if(this.chapterPosition == 0){
        return
      }
      const backupChapter:ChapterLabel = this.chapters[this.chapterPosition - 1]
      const changedChapter:ChapterLabel = this.chapters[this.chapterPosition]
      backupChapter.chapterNumber++
      changedChapter.chapterNumber--
      this.chapters[this.chapterPosition - 1] = changedChapter
      this.chapters[this.chapterPosition] = backupChapter

      this.chapterService.updateChapterLabel(changedChapter).subscribe(data=>{
        console.log(data)
      })
      this.chapterService.updateChapterLabel(backupChapter).subscribe(data=>{
        console.log(data)
      })
      this.chapterPosition--
    } else{
      if(this.chapterPosition == this.chapters.length-1){
        return
      }
      const backupChapter:ChapterLabel = this.chapters[this.chapterPosition + 1]
      const changedChapter:ChapterLabel = this.chapters[this.chapterPosition]
      backupChapter.chapterNumber--
      changedChapter.chapterNumber++
      this.chapters[this.chapterPosition + 1] = changedChapter
      this.chapters[this.chapterPosition] = backupChapter

      this.chapterService.updateChapterLabel(this.chapters[this.chapterPosition + 1]).subscribe(data=>{
        console.log(data)
      })
      this.chapterService.updateChapterLabel(backupChapter).subscribe(data=>{
        console.log(data)
      })
      this.chapterPosition++
    }
  }

  onChapterPositionClick(index:number){
    this.chapterPosition = index
  }
}
