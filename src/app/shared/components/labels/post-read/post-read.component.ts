import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReactionObjectEnum } from 'src/app/shared/enums/ReactionEnum';
import { SearchDataTypeEnum, SearchPageEnum } from 'src/app/shared/enums/SearchEnum';
import { getEmptyParam, getSearchParam } from 'src/app/shared/functions/SearchFunction';
import { PostRead, PostComments } from 'src/app/shared/models/Post';
import { SearchParam } from 'src/app/shared/models/Search';
import { PostService } from 'src/app/shared/services/post.service';

export interface PostReadProps{
  post:PostRead
  isExtended:boolean
}

@Component({
  selector: 'app-post-read',
  templateUrl: './post-read.component.html',
  styleUrls: ['./post-read.component.css']
})
export class PostReadComponent {
  @Input() set props(value:PostReadProps){
    this.post = value.post
    this.isExtended = value.isExtended
    console.log(this.post)
    if(this.isExtended){
      this.content=this.post.content
      this.isTextOverflow=false
    } else {
      if(this.post.content.length > 130){
        this.isTextOverflow = true
        this.content=this.post.content.slice(0, 130)
        console.log(this.content)
      } else {
        this.isTextOverflow = false
        this.content=this.post.content
      }
    }
  }
  @Output() PostCommentsEvent: EventEmitter<PostComments> = new EventEmitter<PostComments>();

  post!:PostRead
  isCommentShown:boolean = false
  isExtended:boolean = false
  isTextOverflow:boolean = false
  content:string=''
  reactionObject:ReactionObjectEnum=ReactionObjectEnum.post
  isPopupVisible:boolean = false
  searchParam:SearchParam = getEmptyParam()

  constructor(){

  }

  ShowComment(){
    // this.isCommentShown = !this.isCommentShown
    // this.PostCommentsEvent.emit({isCommentShown:this.isCommentShown, post:this.post})
    // const dialogRef = this.dialog.open(PopupPostReadComponent, {
    //   width: '1000px',
    //   height: '1200px',
    //   data:this.post
    // });
    this.searchParam = getSearchParam('PostId', this.post.id, SearchDataTypeEnum.number)
    this.isPopupVisible = true
  }

  onPopupHiding(e:boolean){
    this.isPopupVisible = e
  }
}
