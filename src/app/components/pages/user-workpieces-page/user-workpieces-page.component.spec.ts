import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkpiecesPageComponent } from './user-workpieces-page.component';

describe('UserWorkpiecesPageComponent', () => {
  let component: UserWorkpiecesPageComponent;
  let fixture: ComponentFixture<UserWorkpiecesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWorkpiecesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWorkpiecesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
