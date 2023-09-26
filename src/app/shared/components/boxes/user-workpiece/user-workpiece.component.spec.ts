import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkpieceComponent } from './user-workpiece.component';

describe('UserWorkpieceComponent', () => {
  let component: UserWorkpieceComponent;
  let fixture: ComponentFixture<UserWorkpieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWorkpieceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWorkpieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
