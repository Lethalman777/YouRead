import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpieceSetupBoxComponent } from './workpiece-setup-box.component';

describe('WorkpieceSetupBoxComponent', () => {
  let component: WorkpieceSetupBoxComponent;
  let fixture: ComponentFixture<WorkpieceSetupBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkpieceSetupBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkpieceSetupBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
