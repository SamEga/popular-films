import { TestBed } from '@angular/core/testing';

import { CheckFavoritesService } from './check-favorites.service';

describe('CheckFavoritesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckFavoritesService = TestBed.get(CheckFavoritesService);
    expect(service).toBeTruthy();
  });
});
