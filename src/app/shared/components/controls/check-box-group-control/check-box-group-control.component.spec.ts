import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxGroupControlComponent } from './check-box-group-control.component';

describe('CheckBoxGroupControlComponent', () => {
  let component: CheckBoxGroupControlComponent;
  let fixture: ComponentFixture<CheckBoxGroupControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBoxGroupControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckBoxGroupControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
