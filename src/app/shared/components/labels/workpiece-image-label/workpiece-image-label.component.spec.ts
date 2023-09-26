import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpieceImageLabelComponent } from './workpiece-image-label.component';

describe('WorkpieceImageLabelComponent', () => {
  let component: WorkpieceImageLabelComponent;
  let fixture: ComponentFixture<WorkpieceImageLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkpieceImageLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkpieceImageLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
