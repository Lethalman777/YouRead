import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleFileControlComponent } from './multiple-file-control.component';

describe('MultipleFileControlComponent', () => {
  let component: MultipleFileControlComponent;
  let fixture: ComponentFixture<MultipleFileControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleFileControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleFileControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
