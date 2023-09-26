import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChapterWrite } from 'src/app/shared/models/Chapter';
import { ChapterService } from 'src/app/shared/services/chapter.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { UserService } from 'src/app/shared/services/user.service';
import { WorkpieceService } from 'src/app/shared/services/workpiece.service';

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
  loggedUserProfileId:number=0

  constructor(private workpieceService:WorkpieceService,
    private tokenService:TokenService,
    private chapterService:ChapterService,
    private userService:UserService,
    private router:Router){
    this.formModel = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      file: new FormControl('', [
        Validators.minLength(3)
      ]),
    });
  }

  ngOnInit(): void {
    this.userService.loggedUserId().subscribe({
      next:(res)=>{
        this.loggedUserProfileId = res.userId
      }
    })

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
        this.navigation()
      })
    } else{
      this.chapterService.updateChapter(this.chapter).subscribe(data=>{
        console.log(data)
        this.navigation()
      })
    }
  }

  navigation(){
    this.router.navigate(['user-workpieces', this.loggedUserProfileId])
  }

  get title() {
    return this.formModel.get('title') as FormControl;
  }

  get file() {
    return this.formModel.get('file') as FormControl;
  }
}
