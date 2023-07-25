import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-writing-chapter-new-page',
  templateUrl: './writing-chapter-new-page.component.html',
  styleUrls: ['./writing-chapter-new-page.component.css']
})
export class WritingChapterNewPageComponent {
  workpieceId!:number
  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      //this.id = Number(params['id']);
      console.log(Number(this.route.snapshot.paramMap.get('id')))
      //this.profileId = Number(this.route.snapshot.paramMap.get('id'))
      this.workpieceId = Number(this.route.snapshot.paramMap.get('id'))
    })
  }
}
