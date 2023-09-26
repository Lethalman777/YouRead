import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { WorkpieceLabel } from 'src/app/shared/models/Workpiece';

@Component({
  selector: 'app-workpiece-carousel',
  templateUrl: './workpiece-carousel.component.html',
  styleUrls: ['./workpiece-carousel.component.css'],
})
export class WorkpieceCarouselComponent {
  @Input() set props(value:WorkpieceLabel){
    this.workpiece=value
  }
  @Input() isRight:boolean = true
  @Output() WorkpieceFocusEvent = new EventEmitter<number>()
  @Output() WorkpieceFocusCloseEvent = new EventEmitter<number>()

  workpiece!:WorkpieceLabel
  @Input() isFocused:boolean = false

  changeFocus(){
    console.log(this.workpiece.title)
    this.isFocused = true
    this.WorkpieceFocusCloseEvent.emit(this.workpiece.id)
  }

  ConvertIdToString():string{
    return String(this.workpiece.id)
  }
}
