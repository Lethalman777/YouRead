import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingChapterBoxComponent } from './writing-chapter-box.component';

describe('WritingChapterBoxComponent', () => {
  let component: WritingChapterBoxComponent;
  let fixture: ComponentFixture<WritingChapterBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritingChapterBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritingChapterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
