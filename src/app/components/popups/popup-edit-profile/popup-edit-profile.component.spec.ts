import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEditProfileComponent } from './popup-edit-profile.component';

describe('PopupEditProfileComponent', () => {
  let component: PopupEditProfileComponent;
  let fixture: ComponentFixture<PopupEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupEditProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
