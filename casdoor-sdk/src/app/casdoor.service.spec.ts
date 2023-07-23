import { TestBed } from '@angular/core/testing';

import { CasdoorService } from './casdoor.service';

describe('CasdoorService', () => {
  let service: CasdoorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasdoorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
