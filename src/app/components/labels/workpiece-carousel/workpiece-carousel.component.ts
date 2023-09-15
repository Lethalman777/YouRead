import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { timer } from 'rxjs';
import { getCarouselItems } from 'src/app/models/functions/Recomendation';
import { WorkpieceLabel } from 'src/app/models/types/Workpiece';

@Component({
  selector: 'app-workpiece-carousel',
  templateUrl: './workpiece-carousel.component.html',
  styleUrls: ['./workpiece-carousel.component.css'],
  // animations: [
  //   trigger('slide', [
  //     transition(':leave', [
  //       animate('500ms', keyframes([
  //         style({ transform: 'translateX(0%)', opacity: 1 }),
  //         style({ transform: 'translateX(100%)', opacity: 0 })
  //       ]))
  //     ]),
  //     transition(':enter', [
  //       animate('500ms 500ms', keyframes([
  //         style({ transform: 'translateX(-100%)', opacity: 0 }),
  //         style({ transform: 'translateX(0%)', opacity: 1 })
  //       ]))
  //     ])
  //   ])
  // ]
})
export class WorkpieceCarouselComponent {
  @Input() set props(value:WorkpieceLabel){
    this.workpiece=value
  }
  @Input() isRight:boolean = true
  @Output() WorkpieceFocusEvent = new EventEmitter<number>()

  workpiece!:WorkpieceLabel
  isFocused:boolean = false

  changeFocus(isFocused:boolean){
    this.isFocused=isFocused
  }
}
