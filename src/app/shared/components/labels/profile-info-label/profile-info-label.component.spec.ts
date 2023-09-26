import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoLabelComponent } from './profile-info-label.component';

describe('ProfileInfoLabelComponent', () => {
  let component: ProfileInfoLabelComponent;
  let fixture: ComponentFixture<ProfileInfoLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInfoLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileInfoLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
