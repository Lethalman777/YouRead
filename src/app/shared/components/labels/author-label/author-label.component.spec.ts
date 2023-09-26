import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorLabelComponent } from './author-label.component';

describe('AuthorLabelComponent', () => {
  let component: AuthorLabelComponent;
  let fixture: ComponentFixture<AuthorLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
