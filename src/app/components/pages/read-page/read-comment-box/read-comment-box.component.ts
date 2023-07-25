import { Component, Input } from '@angular/core';
import { CommentTypeEnum } from 'src/app/models/enums/CommentEnum';
import { CommentRead } from 'src/app/models/types/Comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-read-comment-box',
  templateUrl: './read-comment-box.component.html',
  styleUrls: ['./read-comment-box.component.css']
})
export class ReadCommentBoxComponent {
  @Input() workpieceId!:number
  type:CommentTypeEnum = CommentTypeEnum.workpiece
}
