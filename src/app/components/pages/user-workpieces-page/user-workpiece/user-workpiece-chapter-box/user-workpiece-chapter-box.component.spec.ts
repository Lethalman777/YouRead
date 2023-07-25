import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkpieceChapterBoxComponent } from './user-workpiece-chapter-box.component';

describe('UserWorkpieceChapterBoxComponent', () => {
  let component: UserWorkpieceChapterBoxComponent;
  let fixture: ComponentFixture<UserWorkpieceChapterBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWorkpieceChapterBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWorkpieceChapterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
