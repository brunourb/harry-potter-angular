import { TestBed } from '@angular/core/testing';

import { AtoresDetailService } from './atores-detail.service';

describe('AtoresDetailService', () => {
  let service: AtoresDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtoresDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
