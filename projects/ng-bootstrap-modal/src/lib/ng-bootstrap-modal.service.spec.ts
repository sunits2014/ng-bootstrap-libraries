import { TestBed } from '@angular/core/testing';

import { NgBootstrapModalService } from './ng-bootstrap-modal.service';

describe('NgBootstrapModalService', () => {
  let service: NgBootstrapModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgBootstrapModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
