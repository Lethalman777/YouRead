import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-workpiece-image-label',
  templateUrl: './workpiece-image-label.component.html',
  styleUrls: ['./workpiece-image-label.component.css']
})
export class WorkpieceImageLabelComponent {
  @Input() image:string = 'assets/images/default_cover.png'
}
