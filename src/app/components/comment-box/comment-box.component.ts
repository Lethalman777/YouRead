import { Component, Input } from '@angular/core';
import { CommentTypeEnum } from 'src/app/models/enums/CommentEnum';
import { CommentRead } from 'src/app/models/types/Comment';
import { CommentService } from 'src/app/services/comment.service';

export interface CommentBoxProps{
  targetId:number
  type:CommentTypeEnum
}
@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent {
  @Input() set inputProps(value:CommentBoxProps){
    this.props = {
      targetId:value.targetId,
      type:value.type
    }
    this.commentService.getComments(value.targetId, value.type).subscribe(data=>{
      this.comments=data
      console.log(this.comments)
    })
  }

  props!:CommentBoxProps
  comments!:CommentRead[]
  constructor(private commentService:CommentService){

  }
}
