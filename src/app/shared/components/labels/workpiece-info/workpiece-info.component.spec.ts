import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpieceInfoComponent } from './workpiece-info.component';

describe('WorkpieceInfoComponent', () => {
  let component: WorkpieceInfoComponent;
  let fixture: ComponentFixture<WorkpieceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkpieceInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkpieceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
