import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { SearchOnMapService } from "./search-on-map.service";

describe("SearchOnMapService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchOnMapService]
    })
  );

  it("should be created", () => {
    const service: SearchOnMapService = TestBed.get(SearchOnMapService);
    expect(service).toBeTruthy();
  });
});
