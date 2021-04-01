import { TestBed } from '@angular/core/testing';

import { EnroleesService } from './enrolees.service';

describe('EnroleesService', () => {
  let service: EnroleesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnroleesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
