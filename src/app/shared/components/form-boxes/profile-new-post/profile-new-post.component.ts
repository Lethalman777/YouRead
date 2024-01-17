import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-profile-new-post',
  templateUrl: './profile-new-post.component.html',
  styleUrls: ['./profile-new-post.component.css']
})
export class ProfileNewPostComponent {
  @Output() NewPostEvent: EventEmitter<any> = new EventEmitter<any>();

  newPostSubmitted(){
    this.NewPostEvent.emit()
  }
}
