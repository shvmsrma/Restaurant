import { TestBed } from '@angular/core/testing';

import { LeaderService } from './leaders.service';

describe('LeadersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeaderService = TestBed.get(LeaderService);
    expect(service).toBeTruthy();
  });
});
