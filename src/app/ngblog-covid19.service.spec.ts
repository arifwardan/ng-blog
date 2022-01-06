import { TestBed } from '@angular/core/testing';

import { NgblogCovid19Service } from './ngblog-covid19.service';

describe('NgblogCovid19Service', () => {
  let service: NgblogCovid19Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgblogCovid19Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
