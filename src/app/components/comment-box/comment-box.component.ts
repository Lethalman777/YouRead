import { Component, Input } from '@angular/core';
import { CommentTypeEnum } from 'src/app/models/enums/CommentEnum';
import { SearchDataTypeEnum, SearchOperatorEnum } from 'src/app/models/enums/SearchEnum';
import { CommentRead } from 'src/app/models/types/Comment';
import { SearchParam } from 'src/app/models/types/Search';
import { CommentService } from 'src/app/services/comment.service';
import { TokenService } from 'src/app/services/token.service';

export interface CommentBoxProps{
  targetId:number
  type:CommentTypeEnum
  searchParam:SearchParam
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
      type:value.type,
      searchParam:value.searchParam
    }
    console.log(value.searchParam)
    this.commentService.getComments(value.type, value.searchParam).subscribe(data=>{
      this.comments=data
      console.log(this.comments)
    })
  }

  props!:CommentBoxProps
  comments!:CommentRead[]
  isLogged:boolean = false

  constructor(private commentService:CommentService, private tokenService:TokenService){

  }

  ngOnInit(): void {
   this.isLogged = this.tokenService.isLoggedIn()
  }
}
