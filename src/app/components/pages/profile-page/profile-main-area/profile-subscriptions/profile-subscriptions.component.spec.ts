import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSubscriptionsComponent } from './profile-subscriptions.component';

describe('ProfileSubscriptionsComponent', () => {
  let component: ProfileSubscriptionsComponent;
  let fixture: ComponentFixture<ProfileSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSubscriptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
