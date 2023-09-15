import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterRead } from 'src/app/models/types/Chapter';
import { ReadHistory } from 'src/app/models/types/ReadHistory';
import { WorkpieceRead } from 'src/app/models/types/Workpiece';
import { ChapterService } from 'src/app/services/chapter.service';
import { ReadHistoryService } from 'src/app/services/read-history.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
import { WorkpieceService } from 'src/app/services/workpiece.service';

@Component({
  selector: 'app-read-page',
  templateUrl: './read-page.component.html',
  styleUrls: ['./read-page.component.css']
})
export class ReadPageComponent {
  workpiece!:WorkpieceRead
  currentChapterNumber:number = 1
  loggedUserProfileId:number=0
  readHistory:ReadHistory = {
    id: 0,
    userProfileId: 0,
    workpieceId: 0,
    creationDate: new Date(),
    chapterNumber: 1,
    leftPage: 0,
    rightPage: 1
  }

  constructor(private workpieceService:WorkpieceService, private tokenService:TokenService,
    private route:ActivatedRoute, private readHistoryService:ReadHistoryService,
    private userService:UserService){

  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params=>{
      const id = Number(this.route.snapshot.paramMap.get('id'))
      this.workpieceService.getWorkpieceRead(id).subscribe(data=>{
        this.workpiece=data
        console.log(this.workpiece)
        if(this.tokenService.isLoggedIn()){
          this.userService.loggedUserId().subscribe({
            next:(res)=>{
              this.loggedUserProfileId = res.userId
              this.readHistoryService.createReadHistory({userProfileId:this.loggedUserProfileId, workpieceId:id, creationDate:new Date()}).subscribe(data1=>{
                this.readHistory = data1
                this.currentChapterNumber = this.readHistory.chapterNumber
                console.log(data1)
              })
            }
          })
        } else {
          this.readHistoryService.createReadHistory({userProfileId:0, workpieceId:id, creationDate:new Date()}).subscribe(data1=>{
            this.readHistory = data1
            this.currentChapterNumber = this.readHistory.chapterNumber
            console.log(data1)
          })
        }
      })
      console.log(id)
    })

  }

  handleChapterChooseEvent(chapterNumber:number){
    this.currentChapterNumber=chapterNumber
    if(this.readHistory.chapterNumber != chapterNumber){
      this.readHistory.chapterNumber=chapterNumber
      this.readHistory.leftPage = 0
      this.readHistory.rightPage = 1
      this.readHistoryService.updateReadHistory(this.readHistory).subscribe(data=>{
        console.log(data)
      })
    }
  }
}
