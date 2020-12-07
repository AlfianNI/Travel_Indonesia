import { TestBed } from '@angular/core/testing';

import { FbServiceService } from './fb-service.service';

describe('FbServiceService', () => {
  let service: FbServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
