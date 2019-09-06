import { TestBed } from '@angular/core/testing';

import { MislibrosService } from './mislibros.service';
import { HttpClientModule } from '@angular/common/http';

describe('MislibrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: MislibrosService = TestBed.get(MislibrosService);
    expect(service).toBeTruthy();
  });
});
