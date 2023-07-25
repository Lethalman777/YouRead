import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpiecesListComponent } from './workpieces-list.component';

describe('WorkpiecesListComponent', () => {
  let component: WorkpiecesListComponent;
  let fixture: ComponentFixture<WorkpiecesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkpiecesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkpiecesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
