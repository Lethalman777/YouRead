import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommentTypeEnum } from 'src/app/shared/enums/CommentEnum';
import { SearchDataTypeEnum } from 'src/app/shared/enums/SearchEnum';
import { SortByEnum, getSortByOptions } from 'src/app/shared/enums/SortByEnum';
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
  sortByOptions=getSortByOptions().filter(item=>item.enum == SortByEnum.likeAsc || item.enum == SortByEnum.dateDesc)
  sortBy= new FormControl('')


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

  handleSortBy(sortOption:SortByEnum){
    switch(sortOption){
      case SortByEnum.likeAsc:
        this.posts.sort((a, b) => {
          return (b.information.likeCount - b.information.dislikeCount/2) - (a.information.likeCount - a.information.dislikeCount/2)
        });
        break;
      case SortByEnum.dateDesc:
        this.posts.sort((a, b) => {
          return a.information.publicationDate.getDate() - b.information.publicationDate.getDate()
        });
        break;
      default: break;
    }

  }
}
