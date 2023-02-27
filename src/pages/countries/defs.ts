export interface GnCountryDataResponse {
    geonames: GnCountryData[];
}

export interface GnCountryData {
    continent: string;
    capital: string;
    languages: string;
    geonameId: number;
    south: number;
    isoAlpha3: string;
    north: string;
    fipsCode: string;
    population: string;
    east: string;
    isoNumeric: string;
    areaInSqKm: string;
    countryCode: string;
    west: number;
    countryName: string;
    postalCodeFormat: string;
    continentName: string;
    currencyCode: string;
}