import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { SelectEnum, GenreEnum } from 'src/app/models/enums/GenreEnum';
import { SearchParam } from 'src/app/models/types/Search';
import { WorkpieceLabel } from 'src/app/models/types/Workpiece';

@Component({
  selector: 'app-recomendation-genre-carousel',
  templateUrl: './recomendation-genre-carousel.component.html',
  styleUrls: ['./recomendation-genre-carousel.component.css']
})
export class RecomendationGenreCarouselComponent {
  @Input() props!:SelectEnum<GenreEnum>[]

  constructor(){

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

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
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
