import { Component, Input } from '@angular/core';
import { CommentTypeEnum } from 'src/app/shared/enums/CommentEnum';
import { SearchDataTypeEnum } from 'src/app/shared/enums/SearchEnum';
import { getEmptyParam, getSearchParam } from 'src/app/shared/functions/SearchFunction';
import { PostRead, PostComments } from 'src/app/shared/models/Post';
import { SearchParam } from 'src/app/shared/models/Search';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.css']
})
export class ProfileDashboardComponent {
  @Input() set inputProfileId(value:number){
    this.postService.getUserPosts(value).subscribe(data=>{
      this.posts=data
      console.log(data)
    })
  }
  posts:PostRead[]=[]
  postComments!:PostRead
  isCommentShown:boolean = false
  type:CommentTypeEnum = CommentTypeEnum.post
  searchParam:SearchParam = getEmptyParam()
  // searchParam:SearchParam={
  //     propertyName: 'PostId',
  //     operator: SearchOperatorEnum.equal,
  //     dataType: SearchDataTypeEnum.number,
  //     value: this.postComments.id,
  //     isAnd: true,
  //     isAndInBlock: false,
  //     isEmpty: false,
  //     params: []
  //   }

  constructor(private postService:PostService){
    console.log("jjjj")

  }

  handlePostCommentsEvent(postComments:PostComments) {
    this.postComments = postComments.post
    this.isCommentShown = postComments.isCommentShown
    this.searchParam = getSearchParam('PostId', this.postComments.id, SearchDataTypeEnum.number)
  }
}
