import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWorkpiecesListComponent } from './profile-workpieces-list.component';

describe('ProfileWorkpiecesListComponent', () => {
  let component: ProfileWorkpiecesListComponent;
  let fixture: ComponentFixture<ProfileWorkpiecesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileWorkpiecesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileWorkpiecesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
