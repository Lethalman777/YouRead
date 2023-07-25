import { TestBed } from '@angular/core/testing';

import { WorkpieceService } from './workpiece.service';

describe('WorkpieceService', () => {
  let service: WorkpieceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkpieceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
