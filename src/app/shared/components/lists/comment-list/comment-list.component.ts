import { Component, Input } from '@angular/core';
import { CommentTypeEnum } from 'src/app/shared/enums/CommentEnum';
import { CommentRead } from 'src/app/shared/models/Comment';
import { SearchParam } from 'src/app/shared/models/Search';
import { CommentService } from 'src/app/shared/services/comment.service';

export interface CommentListProps{
  type:CommentTypeEnum
  searchParam:SearchParam
}

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent {
  @Input() set props(value:CommentListProps){
    this.type=value.type
    this.commentService.getComments(value.type, value.searchParam).subscribe(data=>{
      this.comments=data
      console.log(data)
    })
  }

  type!:CommentTypeEnum
  comments:CommentRead[]=[]

  constructor(private commentService:CommentService){

  }
}
