import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendationPostCarouselComponent } from './recomendation-post-carousel.component';

describe('RecomendationPostCarouselComponent', () => {
  let component: RecomendationPostCarouselComponent;
  let fixture: ComponentFixture<RecomendationPostCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomendationPostCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecomendationPostCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
