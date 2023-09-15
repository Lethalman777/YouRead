import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommentTypeEnum } from 'src/app/models/enums/CommentEnum';
import { CommentWrite } from 'src/app/models/types/Comment';
import { CommentService } from 'src/app/services/comment.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

export interface CommentWriteProps{
  targetId:number
  type:CommentTypeEnum
  isAnswer:boolean
  commentAnsweredId:number
}

@Component({
  selector: 'app-comment-write',
  templateUrl: './comment-write.component.html',
  styleUrls: ['./comment-write.component.css']
})
export class CommentWriteComponent {
  @Input() set inputProps(value:CommentWriteProps){
    this.props = {
      targetId:value.targetId,
      type:value.type,
      isAnswer:value.isAnswer,
      commentAnsweredId:value.commentAnsweredId
    }
  }
  props!:CommentWriteProps
  formModel: FormGroup;
  userId!:number
  isFocused:boolean = false
  loggedUserProfileId:number=0

  constructor(private commentService:CommentService, private tokenService:TokenService, private userService:UserService){

    this.formModel = new FormGroup({
      content: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  ngOnInit(): void {
    this. userService.loggedUserId().subscribe({
      next:(res)=>{
        this.loggedUserProfileId = res.userId
      }
    })
  }

  submit(){
    if(!this.formModel.valid){
      return
    }
    let postId:number = 0
    let workpieceId:number = 0
    if(this.props.type == CommentTypeEnum.workpiece){
      workpieceId = this.props.targetId
    }
    else{
      postId = this.props.targetId
    }
    const comment:CommentWrite = {
      content: this.content.value,
      workpieceId: workpieceId,
      userProfileId: this.loggedUserProfileId,
      postId: postId,
      commentType: this.props.type,
      commentAnsweredId: 0
    }
    if(this.props.isAnswer){
      console.log(comment)
      comment.commentAnsweredId = this.props.commentAnsweredId
      this.commentService.createComment(comment).subscribe(data=>{
        console.log(data)
      })
    } else {
      console.log(comment)
      this.commentService.createComment(comment).subscribe(data=>{
        console.log(data)
      })
    }
  }

  changeStatus(status:boolean){
    this.isFocused = status
    if(!this.isFocused){
      this.content.setValue('')
    }
  }

  get content() {
    return this.formModel.get('content') as FormControl;
  }
}
