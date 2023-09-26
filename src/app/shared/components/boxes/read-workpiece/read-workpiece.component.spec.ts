import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadWorkpieceComponent } from './read-workpiece.component';

describe('ReadWorkpieceComponent', () => {
  let component: ReadWorkpieceComponent;
  let fixture: ComponentFixture<ReadWorkpieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadWorkpieceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadWorkpieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
