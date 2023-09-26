import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GenreEnum } from 'src/app/shared/enums/GenreEnum';
import { LanguageEnum } from 'src/app/shared/enums/Language';
import { SearchDataTypeEnum } from 'src/app/shared/enums/SearchEnum';
import { getSearchParam } from 'src/app/shared/functions/SearchFunction';
import { WorkpieceLabel, WorkpieceUpdate } from 'src/app/shared/models/Workpiece';
import { ChapterService } from 'src/app/shared/services/chapter.service';
import { WorkpieceService } from 'src/app/shared/services/workpiece.service';

@Component({
  selector: 'app-user-workpiece',
  templateUrl: './user-workpiece.component.html',
  styleUrls: ['./user-workpiece.component.css']
})
export class UserWorkpieceComponent {
  @Input() workpiece!:WorkpieceLabel
  isChapterPosition:boolean=false
  isChapterSetup:boolean=false
  choosenChapter?:number
  developButtonText:string="Pokaż Rozdziały"
  newButtonText:string="Dodaj Nowy Rozdział"
  isPublishedPopupVisible:boolean = false

  constructor(private workpieceService:WorkpieceService, private router:Router,
    private chapterService:ChapterService){

  }

  publish(){
    if(this.workpiece.isPublished){
      this.workpiece.isPublished = false
        console.log(this.workpiece)

        const workpieceUpdate:WorkpieceUpdate = {
          id: this.workpiece.id,
          title: this.workpiece.title,
          description: this.workpiece.description,
          image: this.workpiece.image,
          userProfileId: this.workpiece.author.id,
          dateOfPublication: new Date(),
          genre: GenreEnum.mixed,
          language: LanguageEnum.Polski,
          isPublished: this.workpiece.isPublished,
          tags: []
        }

        this.workpieceService.updateWorkpiece(workpieceUpdate).subscribe(data=>{
          console.log(data)
        })
    } else {
      const searchParam = getSearchParam(undefined, undefined, undefined, undefined, undefined, undefined, true, [
        getSearchParam("WorkpieceId", this.workpiece.id, SearchDataTypeEnum.number),
        getSearchParam("IsPublished", true, SearchDataTypeEnum.boolean)
      ])

      this.chapterService.getChapterLabels(searchParam).subscribe(data=>{
        if(data.length > 0){
          this.workpiece.isPublished = true
          console.log(this.workpiece)

          const workpieceUpdate:WorkpieceUpdate = {
            id: this.workpiece.id,
            title: this.workpiece.title,
            description: this.workpiece.description,
            image: this.workpiece.image,
            userProfileId: this.workpiece.author.id,
            dateOfPublication: new Date(),
            genre: GenreEnum.mixed,
            language: LanguageEnum.Polski,
            isPublished: this.workpiece.isPublished,
            tags: []
          }

          this.workpieceService.updateWorkpiece(workpieceUpdate).subscribe(data=>{
            console.log(data)
          })
        } else {
          this.isPublishedPopupVisible = true
        }
      })
    }
  }

  changeChapterPositionVisibility(){
    this.isChapterPosition=!this.isChapterPosition
  }

  editWorkpiece(){
    this.router.navigate(['./workpiece-edit', this.workpiece.id])
  }

  addChapter(){
    this.router.navigate(['./chapter-new', this.workpiece.id])
  }

  deleteWorkpiece(){
    this.workpieceService.deleteWorkpiece(this.workpiece.id)
  }

  handleNewChapterEvent(isChapterSetup:boolean) {
    this.isChapterSetup = isChapterSetup
    this.newButtonText="Dodaj Nowy Rozdział"
  }

  navigation(){
    this.router.navigate(['./read', this.workpiece.id])
  }

  onPopupClosed(){
    this.isPublishedPopupVisible = false
  }
}
