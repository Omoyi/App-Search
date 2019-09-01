import { TestBed } from '@angular/core/testing';

import { PortraitService } from './portrait.service';

describe('PortraitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortraitService = TestBed.get(PortraitService);
    expect(service).toBeTruthy();
  });
});
