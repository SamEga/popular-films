import { TestBed } from '@angular/core/testing';

import { DescFilmService } from './desc-film.service';

describe('DescFilmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DescFilmService = TestBed.get(DescFilmService);
    expect(service).toBeTruthy();
  });
});
