import { Component, Input } from '@angular/core';
import { CommentTypeEnum } from 'src/app/models/enums/CommentEnum';
import { SearchOperatorEnum, SearchDataTypeEnum } from 'src/app/models/enums/SearchEnum';
import { getEmptyParam, getSearchParam } from 'src/app/models/functions/SearchFunction';
import { PostComments, PostRead } from 'src/app/models/types/Post';
import { SearchParam } from 'src/app/models/types/Search';
import { PostService } from 'src/app/services/post.service';
import { StorageService } from 'src/app/services/storage.service';

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
