import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpieceSetupPageComponent } from './workpiece-setup-page.component';

describe('WorkpieceSetupPageComponent', () => {
  let component: WorkpieceSetupPageComponent;
  let fixture: ComponentFixture<WorkpieceSetupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkpieceSetupPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkpieceSetupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
