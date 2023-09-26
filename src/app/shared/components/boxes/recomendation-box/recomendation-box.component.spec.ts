import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendationBoxComponent } from './recomendation-box.component';

describe('RecomendationBoxComponent', () => {
  let component: RecomendationBoxComponent;
  let fixture: ComponentFixture<RecomendationBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomendationBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecomendationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
