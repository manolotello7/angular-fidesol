import { TestBed } from '@angular/core/testing';

import { PaisesService } from './paises.service';
import { HttpClientModule } from '@angular/common/http';

describe('PaisesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: PaisesService = TestBed.get(PaisesService);
    expect(service).toBeTruthy();
  });
});
