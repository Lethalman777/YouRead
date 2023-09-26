import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonControlComponent } from './radio-button-control.component';

describe('RadioButtonControlComponent', () => {
  let component: RadioButtonControlComponent;
  let fixture: ComponentFixture<RadioButtonControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioButtonControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioButtonControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
