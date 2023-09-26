import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPostReadComponent } from './popup-post-read.component';

describe('PopupPostReadComponent', () => {
  let component: PopupPostReadComponent;
  let fixture: ComponentFixture<PopupPostReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupPostReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupPostReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
