import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GenreEnum } from 'src/app/models/enums/GenreEnum';
import { LanguageEnum } from 'src/app/models/enums/Language';
import { WorkpieceLabel, WorkpieceUpdate } from 'src/app/models/types/Workpiece';
import { WorkpieceService } from 'src/app/services/workpiece.service';

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

  constructor(private workpieceService:WorkpieceService, private router:Router){

  }

  publish(){
    this.workpiece.isPublished = !this.workpiece.isPublished
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
      isPublished: this.workpiece.isPublished
    }

    this.workpieceService.updateWorkpiece(workpieceUpdate).subscribe(data=>{
      console.log(data)
    })
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

  handleNewChapterEvent(isChapterSetup:boolean) {
    this.isChapterSetup = isChapterSetup
    this.newButtonText="Dodaj Nowy Rozdział"
  }
}
