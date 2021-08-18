import { TestBed } from '@angular/core/testing';

import { JurnalService } from './jurnal.service';

describe('JurnalService', () => {
  let service: JurnalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JurnalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
