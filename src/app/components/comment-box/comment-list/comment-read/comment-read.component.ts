import { Component, Input } from '@angular/core';
import { CommentTypeEnum } from 'src/app/models/enums/CommentEnum';
import { ReactionObjectEnum } from 'src/app/models/enums/ReactionEnum';
import { SearchOperatorEnum, SearchDataTypeEnum } from 'src/app/models/enums/SearchEnum';
import { getSearchParam } from 'src/app/models/functions/SearchFunction';
import { CommentRead } from 'src/app/models/types/Comment';
import { SearchParam } from 'src/app/models/types/Search';
import { CommentService } from 'src/app/services/comment.service';

export interface CommentReadProps{
  type:CommentTypeEnum
  comment:CommentRead
}

@Component({
  selector: 'app-comment-read',
  templateUrl: './comment-read.component.html',
  styleUrls: ['./comment-read.component.css']
})
export class CommentReadComponent {
  @Input() set props(value:CommentReadProps){
    this.comment=value.comment
    this.type=value.type
    this.searchParam = getSearchParam('CommentAnswerId', value.comment.id, SearchDataTypeEnum.number)
    // this.searchParam={
    //   propertyName: 'CommentAnswerId',
    //   operator: SearchOperatorEnum.equal,
    //   dataType: SearchDataTypeEnum.number,
    //   value: value.comment.id,
    //   isAnd: true,
    //   isAndInBlock: false,
    //   isEmpty: false,
    //   params: []
    // }
  }
  isAnswerComment:boolean = false
  isAnswersShown:boolean = false
  reactionObject:ReactionObjectEnum=ReactionObjectEnum.comment
  type:CommentTypeEnum=CommentTypeEnum.post
  comment!:CommentRead
  comments:CommentRead[]=[]
  searchParam!:SearchParam

  constructor(private commentService:CommentService){

  }

  answerComment(){
    this.isAnswerComment = !this.isAnswerComment
  }

  showAnswers(){
    if(!this.isAnswersShown){
      this.searchParam = getSearchParam('CommentAnswerId', this.comment.id, SearchDataTypeEnum.number)

      // this.searchParam={
      //   propertyName: 'CommentAnswerId',
      //   operator: SearchOperatorEnum.equal,
      //   dataType: SearchDataTypeEnum.number,
      //   value: this.comment.id,
      //   isAnd: true,
      //   isAndInBlock: false,
      //   isEmpty: false,
      //   params: []
      // }
    }
    this.isAnswersShown = !this.isAnswersShown
  }
}
