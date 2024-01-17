import { Component, Input } from '@angular/core';
import { CommentTypeEnum } from 'src/app/shared/enums/CommentEnum';
import { CommentRead } from 'src/app/shared/models/Comment';
import { SearchParam } from 'src/app/shared/models/Search';
import { CommentService } from 'src/app/shared/services/comment.service';
import { TokenService } from 'src/app/shared/services/token.service';

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
  isRerender:boolean = false

  constructor(private commentService:CommentService, private tokenService:TokenService){

  }

  ngOnInit(): void {
   this.isLogged = this.tokenService.isLoggedIn()
  }

  rerender(){
    console.log(this.isRerender)
    this.isRerender = !this.isRerender
    console.log(this.isRerender)
  }
}
