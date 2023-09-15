import { TestBed } from '@angular/core/testing';

import { ReadHistoryService } from './read-history.service';

describe('ReadHistoryService', () => {
  let service: ReadHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
