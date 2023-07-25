import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingChapterEditPageComponent } from './writing-chapter-edit-page.component';

describe('WritingChapterEditPageComponent', () => {
  let component: WritingChapterEditPageComponent;
  let fixture: ComponentFixture<WritingChapterEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritingChapterEditPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritingChapterEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
