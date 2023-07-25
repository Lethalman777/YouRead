import { Component, Input } from '@angular/core';

export interface WorkpieceInfoProps{
  title:string
  description:string
  image:string
  genre:string
  language:string
}

@Component({
  selector: 'app-workpiece-info',
  templateUrl: './workpiece-info.component.html',
  styleUrls: ['./workpiece-info.component.css']
})
export class WorkpieceInfoComponent {
  @Input() props!:WorkpieceInfoProps
}
