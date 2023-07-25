import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCommentBoxComponent } from './read-comment-box.component';

describe('ReadCommentBoxComponent', () => {
  let component: ReadCommentBoxComponent;
  let fixture: ComponentFixture<ReadCommentBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadCommentBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadCommentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
