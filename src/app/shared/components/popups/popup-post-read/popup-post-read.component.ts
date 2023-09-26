import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommentTypeEnum } from 'src/app/shared/enums/CommentEnum';
import { CommentRead } from 'src/app/shared/models/Comment';
import { PostRead } from 'src/app/shared/models/Post';
import { SearchParam } from 'src/app/shared/models/Search';
import { CommentService } from 'src/app/shared/services/comment.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-popup-post-read',
  templateUrl: './popup-post-read.component.html',
  styleUrls: ['./popup-post-read.component.css']
})
export class PopupPostReadComponent {
  @Output() HidePopupEvent:EventEmitter<boolean> = new EventEmitter<boolean>()
  @Input() isPopupVisible:boolean = false
  @Input() post!:PostRead
  comments:CommentRead[]=[]
  @Input()searchParam!:SearchParam
  type:CommentTypeEnum=CommentTypeEnum.post

  constructor(private commentService:CommentService) {
    // this.searchParam={
    //   propertyName: 'PostId',
    //   operator: SearchOperatorEnum.equal,
    //   value: this.post.id,
    //   dataType: SearchDataTypeEnum.number,
    //   isAnd: true,
    //   isAndInBlock: false,
    //   isEmpty: false,
    //   params: []
    // }
    // commentService.getComments(CommentTypeEnum.post, searchParams).subscribe(data=>{
    //   this.comments=data
    // })
  }

  onPopupHiding(){
    this.HidePopupEvent.emit(false)
  }
}
