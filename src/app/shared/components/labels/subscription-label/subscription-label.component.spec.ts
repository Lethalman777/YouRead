import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionLabelComponent } from './subscription-label.component';

describe('SubscriptionLabelComponent', () => {
  let component: SubscriptionLabelComponent;
  let fixture: ComponentFixture<SubscriptionLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
