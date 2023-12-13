import { TestBed } from '@angular/core/testing';

import { ApiTaskJenishService } from './api-task-jenish.service';

describe('ApiTaskJenishService', () => {
  let service: ApiTaskJenishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTaskJenishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
