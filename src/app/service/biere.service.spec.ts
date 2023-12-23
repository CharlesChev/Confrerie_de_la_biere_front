import { TestBed } from '@angular/core/testing';

import { BiereService } from './biere.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('BiereService', () => {
  let service: BiereService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BiereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
