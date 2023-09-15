import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendationGenreCarouselComponent } from './recomendation-genre-carousel.component';

describe('RecomendationGenreCarouselComponent', () => {
  let component: RecomendationGenreCarouselComponent;
  let fixture: ComponentFixture<RecomendationGenreCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomendationGenreCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecomendationGenreCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
