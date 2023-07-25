import { Component, Input } from '@angular/core';
import { CommentRead } from 'src/app/models/types/Comment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent {
  @Input() comments!:CommentRead[]
}
