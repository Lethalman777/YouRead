import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { getGenreValues, GenreEnum } from 'src/app/models/enums/GenreEnum';
import { getLanguageValues, LanguageEnum } from 'src/app/models/enums/Language';
import { ValidationMessage, validationMessagesList } from 'src/app/models/enums/ValidationMessage';
import { ChapterWrite } from 'src/app/models/types/Chapter';
import { WorkpieceUpdate, WorkpieceCreate } from 'src/app/models/types/Workpiece';
import { ChapterService } from 'src/app/services/chapter.service';
import { StorageService } from 'src/app/services/storage.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
import { WorkpieceService } from 'src/app/services/workpiece.service';

export interface WritingChapterBoxProps{
  isNew:boolean
  chapter:ChapterWrite
}

@Component({
  selector: 'app-writing-chapter-box',
  templateUrl: './writing-chapter-box.component.html',
  styleUrls: ['./writing-chapter-box.component.css']
})
export class WritingChapterBoxComponent {
  @Input() set props(value:WritingChapterBoxProps){
    this.isNew = value.isNew
    this.chapter = value.chapter
    this.title.setValue(this.chapter.title)
    this.file.setValue(this.chapter.file)
  }
  isNew:boolean=true
  userProfileId:number=0
  chapter!:ChapterWrite
  formModel:FormGroup
  messages:ValidationMessage[]

  constructor(private workpieceService:WorkpieceService,
    private tokenService:TokenService,
    private chapterService:ChapterService){
    this.messages=validationMessagesList()
    this.formModel = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      file: new FormControl('', [
        Validators.minLength(3)
      ]),
    });
    this.userProfileId = Number(tokenService.get())
  }

  public submit(){
    if(!this.formModel.valid){
      return
    }

    this.chapter.file = this.file.value
    this.chapter.title = this.title.value

    if(this.isNew){
      this.chapterService.createChapter(this.chapter).subscribe(data=>{
        console.log(data)
      })
    } else{
      this.chapterService.updateChapter(this.chapter).subscribe(data=>{
        console.log(data)
      })
    }
  }

  get title() {
    return this.formModel.get('title') as FormControl;
  }

  get file() {
    return this.formModel.get('file') as FormControl;
  }
}
