import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpieceEditPageComponent } from './workpiece-edit-page.component';

describe('WorkpieceEditPageComponent', () => {
  let component: WorkpieceEditPageComponent;
  let fixture: ComponentFixture<WorkpieceEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkpieceEditPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkpieceEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
