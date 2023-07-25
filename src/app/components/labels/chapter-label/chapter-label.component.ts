import { Component, Input } from '@angular/core';
import { ChapterLabel } from 'src/app/models/types/Chapter';
import { WorkpieceLabel } from 'src/app/models/types/Workpiece';
import { WorkpieceService } from 'src/app/services/workpiece.service';

@Component({
  selector: 'app-chapter-label',
  templateUrl: './chapter-label.component.html',
  styleUrls: ['./chapter-label.component.css']
})
export class ChapterLabelComponent {
  @Input() chapter!:ChapterLabel
}
