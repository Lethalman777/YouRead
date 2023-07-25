import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendationCarouselComponent } from './recomendation-carousel.component';

describe('RecomendationCarouselComponent', () => {
  let component: RecomendationCarouselComponent;
  let fixture: ComponentFixture<RecomendationCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomendationCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecomendationCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
