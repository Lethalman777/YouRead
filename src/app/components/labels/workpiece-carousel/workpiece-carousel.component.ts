import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { getCarouselItems } from 'src/app/models/functions/Recomendation';
import { WorkpieceLabel } from 'src/app/models/types/Workpiece';

@Component({
  selector: 'app-workpiece-carousel',
  templateUrl: './workpiece-carousel.component.html',
  styleUrls: ['./workpiece-carousel.component.css'],
  animations: [
    trigger('slide', [
      transition(':leave', [
        animate('500ms', keyframes([
          style({ transform: 'translateX(0%)', opacity: 1 }),
          style({ transform: 'translateX(100%)', opacity: 0 })
        ]))
      ]),
      transition(':enter', [
        animate('500ms 500ms', keyframes([
          style({ transform: 'translateX(-100%)', opacity: 0 }),
          style({ transform: 'translateX(0%)', opacity: 1 })
        ]))
      ])
    ])
  ]
})
export class WorkpieceCarouselComponent {
  @Input() set inputWorkpieces(value:WorkpieceLabel[]){
    this.visibleWorkpieces=getCarouselItems(value, this.columnNumber)
  }

  visibleWorkpieces:WorkpieceLabel[][]=[]
  currentIndex = 0;
  columnNumber = 3;
  itemWidth = 360;

  @ViewChild('carouselContainer') carouselContainer!: ElementRef<HTMLDivElement>;
  carouselContainerWidth = 0;

  ngAfterViewInit() {
    // this.carouselContainerWidth = this.carouselContainer.nativeElement.offsetWidth;
    // this.columnNumber = Math.round(this.carouselContainerWidth/this.itemWidth)
    // console.log(this.columnNumber)
  }

  ngOnInit() {

  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.visibleWorkpieces.length;
  }

  prevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.visibleWorkpieces.length) % this.visibleWorkpieces.length;
  }

  repeatColumn(){
    let text = ''
    for(let i = 1; i <= this.columnNumber; i++){
      text += "1fr "
    }

    return text
  }
}
