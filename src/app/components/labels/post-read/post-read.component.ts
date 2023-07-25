import { Component, Input } from '@angular/core';
import { ReactionClickedEnum, ReactionObjectEnum } from 'src/app/models/enums/ReactionEnum';
import { PostRead } from 'src/app/models/types/Post';
import { WorkpieceLabel } from 'src/app/models/types/Workpiece';
import { PostService } from 'src/app/services/post.service';
import { WorkpieceService } from 'src/app/services/workpiece.service';

@Component({
  selector: 'app-post-read',
  templateUrl: './post-read.component.html',
  styleUrls: ['./post-read.component.css']
})
export class PostReadComponent {
  //@Input() isAuthorVisible!:boolean
  @Input() post!:PostRead
  reactionObject:ReactionObjectEnum=ReactionObjectEnum.post

  constructor(private postService:PostService){
    //workpieceService.getWorkpieceResult(this.id)
  }
}
