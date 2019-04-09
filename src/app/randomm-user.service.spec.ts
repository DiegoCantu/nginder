import { TestBed } from '@angular/core/testing';

import { RandommUserService } from './randomm-user.service';

describe('RandommUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandommUserService = TestBed.get(RandommUserService);
    expect(service).toBeTruthy();
  });
});
