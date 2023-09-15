import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileArea } from 'src/app/models/enums/ProfileArea';
import { ReactionClickedEnum, ReactionObjectEnum } from 'src/app/models/enums/ReactionEnum';
import { PostComments, PostRead } from 'src/app/models/types/Post';
import { WorkpieceLabel } from 'src/app/models/types/Workpiece';
import { PostService } from 'src/app/services/post.service';
import { WorkpieceService } from 'src/app/services/workpiece.service';
import { PopupPostReadComponent } from '../../popups/popup-post-read/popup-post-read.component';
import { SearchDataTypeEnum, SearchPageEnum } from 'src/app/models/enums/SearchEnum';
import { getEmptyParam, getSearchParam } from 'src/app/models/functions/SearchFunction';
import { SearchParam } from 'src/app/models/types/Search';

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
      if(this.post.content.length > 310){
        this.isTextOverflow = true
        this.content=this.post.content.slice(0, 310)
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

  constructor(private postService:PostService, private dialog: MatDialog){

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
