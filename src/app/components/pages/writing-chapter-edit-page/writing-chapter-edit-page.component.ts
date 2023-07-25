import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterWrite } from 'src/app/models/types/Chapter';
import { ChapterService } from 'src/app/services/chapter.service';

@Component({
  selector: 'app-writing-chapter-edit-page',
  templateUrl: './writing-chapter-edit-page.component.html',
  styleUrls: ['./writing-chapter-edit-page.component.css']
})
export class WritingChapterEditPageComponent {
  chapter!:ChapterWrite
  constructor(private route:ActivatedRoute, private chapterService:ChapterService){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      //this.id = Number(params['id']);
      console.log(Number(this.route.snapshot.paramMap.get('id')))
      const id:number = Number(this.route.snapshot.paramMap.get('id'))
      //this.profileId = Number(this.route.snapshot.paramMap.get('id'))
      this.chapterService.getChapterWrite(id).subscribe(data=>{
        this.chapter=data
      })
    })
  }
}
