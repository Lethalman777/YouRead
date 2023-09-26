import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpieceLabelComponent } from './workpiece-label.component';

describe('WorkpieceLabelComponent', () => {
  let component: WorkpieceLabelComponent;
  let fixture: ComponentFixture<WorkpieceLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkpieceLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkpieceLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
