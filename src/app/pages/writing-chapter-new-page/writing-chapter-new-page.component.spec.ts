import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingChapterNewPageComponent } from './writing-chapter-new-page.component';

describe('WritingChapterNewPageComponent', () => {
  let component: WritingChapterNewPageComponent;
  let fixture: ComponentFixture<WritingChapterNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritingChapterNewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritingChapterNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
