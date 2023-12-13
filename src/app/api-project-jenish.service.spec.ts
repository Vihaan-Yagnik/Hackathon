import { TestBed } from '@angular/core/testing';

import { ApiProjectJenishService } from './api-project-jenish.service';

describe('ApiProjectJenishService', () => {
  let service: ApiProjectJenishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiProjectJenishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
