export interface SearchResults {
  results: [
    {
      address: {
        country: string;
        countryCode: string;
        countryCodeISO3: string;
        countrySecondarySubdivision: string;
        countrySubdivision: string;
        freeformAddress: string;
        municipality: string;
        municipalitySubdivision: string;
        postalCode: string;
        streetName: string | null;
      };
      boundingBox: object;
      dataSources: object;
      entityType: string;
      id: string;
      position: {
        lat: number;
        lon: number;
      };
      score: number;
      type: string;
      viewport: object;
    }
  ];
  summary: {
    fuzzyLevel: number;
    numResults: number;
    offset: number;
    query: string;
    queryTime: number;
    queryType: string;
    totalResults: number;
  };
}
