import { TestBed } from '@angular/core/testing';

import { AtoresListService } from './atores-list.service';

describe('AtoresListService', () => {
  let service: AtoresListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtoresListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
