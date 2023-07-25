import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterRead } from 'src/app/models/types/Chapter';
import { WorkpieceRead } from 'src/app/models/types/Workpiece';
import { ChapterService } from 'src/app/services/chapter.service';
import { WorkpieceService } from 'src/app/services/workpiece.service';

@Component({
  selector: 'app-read-page',
  templateUrl: './read-page.component.html',
  styleUrls: ['./read-page.component.css']
})
export class ReadPageComponent {
  workpiece!:WorkpieceRead
  currentChapterNumber:number = 1

  constructor(private workpieceService:WorkpieceService, private route:ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      const id = Number(this.route.snapshot.paramMap.get('id'))
      this.workpieceService.getWorkpieceRead(id).subscribe(data=>{
        this.workpiece=data
        console.log(this.workpiece)
      })
      console.log(id)
    })

  }

  handleChapterChooseEvent(chapterNumber:number){
    this.currentChapterNumber=chapterNumber
  }
}
