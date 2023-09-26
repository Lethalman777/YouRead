import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMainAreaComponent } from './profile-main-area.component';

describe('ProfileMainAreaComponent', () => {
  let component: ProfileMainAreaComponent;
  let fixture: ComponentFixture<ProfileMainAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMainAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileMainAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
