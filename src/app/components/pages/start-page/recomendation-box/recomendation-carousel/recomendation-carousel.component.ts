import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { GenreEnum } from 'src/app/models/enums/GenreEnum';
import { SearchOperatorEnum, SearchDataTypeEnum } from 'src/app/models/enums/SearchEnum';
import { getRandomTopics } from 'src/app/models/functions/Recomendation';
import { SearchParam } from 'src/app/models/types/Search';
import { WorkpieceLabel } from 'src/app/models/types/Workpiece';
import { TokenService } from 'src/app/services/token.service';
import { WorkpieceService } from 'src/app/services/workpiece.service';

@Component({
  selector: 'app-recomendation-carousel',
  templateUrl: './recomendation-carousel.component.html',
  styleUrls: ['./recomendation-carousel.component.css']
})
export class RecomendationCarouselComponent {
  @Input() set props(value:WorkpieceLabel[]){
    this.workpieces=value
  }

  params:SearchParam[]=[]
  workpieces:WorkpieceLabel[]=[]
  indext:number=0
  isFocused:boolean=false

  constructor(private workpieceService:WorkpieceService, private tokenService:TokenService){

  }

  @ViewChild('slickModal') slickCarousel!: SlickCarouselComponent;

  slides = [
    {img: "assets/images/heroes3.png"},
    {img: "assets/images/polskagurom.png"},
    {img: "assets/images/agresja.png"},
    {img: "assets/images/gothic.png"}
  ];

    slideConfig = {
      "slidesToShow": Number((window.innerWidth / 500).toFixed(0)),
      "slidesToScroll": Number((window.innerWidth / 500).toFixed(0)),
      infinite: true,
      ariableWidth: true
    };

    updateSlideConfig() {
      const windowWidth = window.innerWidth
      this.slideConfig = {
        slidesToShow: Number((windowWidth / 300).toFixed(0)),
        slidesToScroll: Number((windowWidth / 300).toFixed(0)),
        infinite: true,
        ariableWidth: true
      };

      this.slickCarousel.unslick();
      setTimeout(() => {
        this.slickCarousel.initSlick();
      });
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: Event): void {
      this.updateSlideConfig();
    }

  changeConfig(slidesToShow:number){
    this.slideConfig.slidesToShow += slidesToShow
    console.log(this.slideConfig)
  }

  switchLeft(){
    this.slickCarousel.slickNext()
  }

  switchRight(){
    this.slickCarousel.slickPrev()
  }

  focus(i:number){
    this.isFocused!=this.isFocused
    this.indext=i
  }

  isRight(index:number){
    if(index%4==0 || index%4==1){
      return true
    } else {
      return false
    }
  }

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log(this.slideConfig);
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
