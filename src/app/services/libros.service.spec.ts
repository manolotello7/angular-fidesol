import { TestBed } from '@angular/core/testing';

import { LibrosService } from './libros.service';
import { HttpClientModule } from '@angular/common/http';

describe('LibrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: LibrosService = TestBed.get(LibrosService);
    expect(service).toBeTruthy();
  });
});
