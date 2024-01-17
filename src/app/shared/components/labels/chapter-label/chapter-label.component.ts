import { Component, Input } from '@angular/core';
import { ChapterLabel } from 'src/app/shared/models/Chapter';

@Component({
  selector: 'app-chapter-label',
  templateUrl: './chapter-label.component.html',
  styleUrls: ['./chapter-label.component.css']
})
export class ChapterLabelComponent {
  @Input() chapter!:ChapterLabel
  @Input() isSelected:boolean = false
}
