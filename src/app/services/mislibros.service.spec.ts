import { TestBed } from '@angular/core/testing';

import { MislibrosService } from './mislibros.service';

describe('MislibrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MislibrosService = TestBed.get(MislibrosService);
    expect(service).toBeTruthy();
  });
});
