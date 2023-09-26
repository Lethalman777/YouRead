import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpieceCarouselLabelComponent } from './workpiece-carousel-label.component';

describe('WorkpieceCarouselLabelComponent', () => {
  let component: WorkpieceCarouselLabelComponent;
  let fixture: ComponentFixture<WorkpieceCarouselLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkpieceCarouselLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkpieceCarouselLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
