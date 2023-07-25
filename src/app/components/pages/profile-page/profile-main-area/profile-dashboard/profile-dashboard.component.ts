import { Component, Input } from '@angular/core';
import { PostRead } from 'src/app/models/types/Post';
import { PostService } from 'src/app/services/post.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.css']
})
export class ProfileDashboardComponent {
  @Input() set inputProfileId(value:number){
    console.log(value)

    this.postService.getUserPosts(1).subscribe(data=>{
      this.posts=data
    })
  }
  posts:PostRead[]=[]

  constructor(private postService:PostService){

  }
}
