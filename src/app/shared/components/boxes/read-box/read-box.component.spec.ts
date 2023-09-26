import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadBoxComponent } from './read-box.component';

describe('ReadBoxComponent', () => {
  let component: ReadBoxComponent;
  let fixture: ComponentFixture<ReadBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
