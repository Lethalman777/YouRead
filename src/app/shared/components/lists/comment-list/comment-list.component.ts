import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommentTypeEnum } from 'src/app/shared/enums/CommentEnum';
import { SortByEnum, getSortByOptions } from 'src/app/shared/enums/SortByEnum';
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

  @Input() isSortByVisible = true

  type!:CommentTypeEnum
  comments:CommentRead[]=[]
  sortByOptions=getSortByOptions().filter(item=>item.enum == SortByEnum.likeAsc || item.enum == SortByEnum.dateDesc)
  sortBy= new FormControl('')

  constructor(private commentService:CommentService){

  }

  handleSortBy(sortOption:SortByEnum){
    switch(sortOption){
      case SortByEnum.likeAsc:
        this.comments.sort((a, b) => {
          return (b.information.likeCount - b.information.dislikeCount/2) - (a.information.likeCount - a.information.dislikeCount/2)
        });
        break;
      case SortByEnum.dateDesc:
        this.comments.sort((a, b) => {
          return a.information.publicationDate.getDate() - b.information.publicationDate.getDate()
        });
        break;
      default: break;
    }

  }
}
