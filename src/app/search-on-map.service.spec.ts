import { TestBed } from '@angular/core/testing';

import { SearchOnMapService } from './search-on-map.service';

describe('SearchOnMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchOnMapService = TestBed.get(SearchOnMapService);
    expect(service).toBeTruthy();
  });
});
