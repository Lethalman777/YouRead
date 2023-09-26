import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkpieceChapterListComponent } from './user-workpiece-chapter-list.component';

describe('UserWorkpieceChapterListComponent', () => {
  let component: UserWorkpieceChapterListComponent;
  let fixture: ComponentFixture<UserWorkpieceChapterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWorkpieceChapterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWorkpieceChapterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
