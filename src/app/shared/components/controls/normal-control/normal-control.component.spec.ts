import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalControlComponent } from './normal-control.component';

describe('NormalControlComponent', () => {
  let component: NormalControlComponent;
  let fixture: ComponentFixture<NormalControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
