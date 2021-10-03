import { TestBed } from '@angular/core/testing';

import { LinkAPIService } from './link-api.service';

describe('LinkAPIService', () => {
  let service: LinkAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
