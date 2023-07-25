import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadWorkpiecePageComponent } from './read-workpiece-page.component';

describe('ReadWorkpiecePageComponent', () => {
  let component: ReadWorkpiecePageComponent;
  let fixture: ComponentFixture<ReadWorkpiecePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadWorkpiecePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadWorkpiecePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
