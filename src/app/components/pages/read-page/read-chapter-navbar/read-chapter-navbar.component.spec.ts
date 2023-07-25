import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadChapterNavbarComponent } from './read-chapter-navbar.component';

describe('ReadChapterNavbarComponent', () => {
  let component: ReadChapterNavbarComponent;
  let fixture: ComponentFixture<ReadChapterNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadChapterNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadChapterNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
