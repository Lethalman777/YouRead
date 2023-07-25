import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpieceCarouselComponent } from './workpiece-carousel.component';

describe('WorkpieceCarouselComponent', () => {
  let component: WorkpieceCarouselComponent;
  let fixture: ComponentFixture<WorkpieceCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkpieceCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkpieceCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
