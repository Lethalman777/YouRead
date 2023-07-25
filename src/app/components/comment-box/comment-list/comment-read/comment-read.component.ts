import { Component, Input } from '@angular/core';
import { ReactionObjectEnum } from 'src/app/models/enums/ReactionEnum';
import { CommentRead } from 'src/app/models/types/Comment';

@Component({
  selector: 'app-comment-read',
  templateUrl: './comment-read.component.html',
  styleUrls: ['./comment-read.component.css']
})
export class CommentReadComponent {
  @Input() comment!:CommentRead
  isAnswerComment:boolean = false
  isAnswersShown:boolean = false
  reactionObject:ReactionObjectEnum=ReactionObjectEnum.comment

  answerComment(){
    this.isAnswerComment = !this.isAnswerComment
  }

  showAnswers(){
    this.isAnswersShown = !this.isAnswersShown
  }
}
