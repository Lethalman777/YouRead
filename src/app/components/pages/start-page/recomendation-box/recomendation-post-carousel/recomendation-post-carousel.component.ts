import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { PostRead } from 'src/app/models/types/Post';
import { SearchParam } from 'src/app/models/types/Search';
import { WorkpieceLabel } from 'src/app/models/types/Workpiece';
import { PostService } from 'src/app/services/post.service';
import { WorkpieceService } from 'src/app/services/workpiece.service';

@Component({
  selector: 'app-recomendation-post-carousel',
  templateUrl: './recomendation-post-carousel.component.html',
  styleUrls: ['./recomendation-post-carousel.component.css']
})
export class RecomendationPostCarouselComponent {
  @Input() set props(value:SearchParam){
    this.param=value
    this.postService.searchPosts(this.param).subscribe(data=>{
      this.posts=data
      console.log(this.posts)
    })
  }

  param!:SearchParam
  posts:PostRead[]=[]
  indext:number=0
  isFocused:boolean=false

  constructor(private postService:PostService){

  }

  @ViewChild('slickModal') slickCarousel!: SlickCarouselComponent;

  slideConfig = {
    "slidesToShow": Number((window.innerWidth / 500).toFixed(0)),
    "slidesToScroll": Number((window.innerWidth / 500).toFixed(0)),
    infinite: true,
    ariableWidth: true
  };

  updateSlideConfig() {
    const windowWidth = window.innerWidth
    this.slideConfig = {
      slidesToShow: Number((windowWidth / 500).toFixed(0)),
      slidesToScroll: Number((windowWidth / 500).toFixed(0)),
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
