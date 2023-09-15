import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostBoxComponent } from './new-post-box.component';

describe('NewPostBoxComponent', () => {
  let component: NewPostBoxComponent;
  let fixture: ComponentFixture<NewPostBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPostBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPostBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
