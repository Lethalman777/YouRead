import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChapterService } from '../../../../services/chapter.service';
import { StorageService } from 'src/app/services/storage.service';
import { ChapterCreate, ChapterWrite } from 'src/app/models/types/Chapter';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-chapter',
  templateUrl: './new-chapter.component.html',
  styleUrls: ['./new-chapter.component.css']
})
export class NewChapterComponent {
  workpieceId!:number
  @Input() set inputWorkpieceId(value:number){
    this.workpieceId=value
    // this.chapterService.getChapterNumber(value).subscribe(data=>{
    //   this.chapter.chapterNumber=data
    // })
  }
  @Output() NewChapterEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  formModel: FormGroup;

  constructor(private chapterService:ChapterService, private storageService:StorageService){
    this.formModel = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      chapterNumber: new FormControl('', [
         Validators.required,
      ])
    });
  }

  submit(){
    console.log("gjhghg")
    if(!this.formModel.valid){
      return
    }
    const chapter:ChapterWrite = {
      workpieceId: this.workpieceId,
      title: this.title.value,
      chapterNumber: this.chapterNumber.value,
      id: 0,
      file: ''
    }
    this.chapterService.createChapter(chapter).subscribe(data=>{
      console.log(data)
    })

    this.NewChapterEvent.emit(false)
  }

  get title() {
    return this.formModel.get('title') as FormControl;
  }

  get chapterNumber() {
    return this.formModel.get('chapterNumber') as FormControl;
  }
}
