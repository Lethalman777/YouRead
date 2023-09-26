import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterLabelComponent } from './chapter-label.component';

describe('ChapterLabelComponent', () => {
  let component: ChapterLabelComponent;
  let fixture: ComponentFixture<ChapterLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
