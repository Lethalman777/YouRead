import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentReadComponent } from './comment-read.component';

describe('CommentReadComponent', () => {
  let component: CommentReadComponent;
  let fixture: ComponentFixture<CommentReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
