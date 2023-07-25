import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkpieceChapterComponent } from './user-workpiece-chapter.component';

describe('UserWorkpieceChapterComponent', () => {
  let component: UserWorkpieceChapterComponent;
  let fixture: ComponentFixture<UserWorkpieceChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWorkpieceChapterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWorkpieceChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
