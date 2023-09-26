import { Component, Input } from '@angular/core';
import { CommentTypeEnum } from 'src/app/shared/enums/CommentEnum';
import { SearchDataTypeEnum } from 'src/app/shared/enums/SearchEnum';
import { getSearchParam } from 'src/app/shared/functions/SearchFunction';
import { SearchParam } from 'src/app/shared/models/Search';

@Component({
  selector: 'app-read-comment-box',
  templateUrl: './read-comment-box.component.html',
  styleUrls: ['./read-comment-box.component.css']
})
export class ReadCommentBoxComponent {
  @Input() set props(value:number){
    this.workpieceId=value
    this.searchParam=getSearchParam('WorkpieceId', value, SearchDataTypeEnum.number)
    // this.searchParam={
    //     propertyName: 'WorkpieceId',
    //     operator: SearchOperatorEnum.equal,
    //     dataType: SearchDataTypeEnum.number,
    //     value: value,
    //     isAnd: true,
    //     isAndInBlock: false,
    //     isEmpty: false,
    //     params: []
    //   }
  }
  type:CommentTypeEnum = CommentTypeEnum.workpiece
  searchParam!:SearchParam
  workpieceId!:number
}
