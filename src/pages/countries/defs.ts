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

export interface RcCountryName {
    common: string;
    official: string;
}

export interface RcCountryNameRoot extends RcCountryName {
    native: Record<string, RcCountryName>;
}

export interface RcCountryCurrency {
    name: string;
    symbol: string;
}

export interface RcCountryImage {
    png: string;
    svg: string;
    alt?: string;
}

export interface RcCountryData {
    name: RcCountryNameRoot;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Record<string, RcCountryCurrency>;
    idd: {
        root: string;
        suffixes: string[];
    };
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Record<string, string>;
    translations: Record<string, RcCountryName>;
    latlng: number[];
    demonyms: Record<string, Record<'f' | 'm', string>>;
    landlocked: boolean;
    borders: string[];
    area: number;
    callingCodes: string[];
    flag: string;
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    }
    population: number;
    gini: Record<string, number>;
    fifa: string;
    car: {
        signs: string[];
        side: 'left' | 'right';
    };
    timezones: string[];
    continents: string[];
    flags: RcCountryImage;
    coatOfArms: RcCountryImage;
    startOfWeek: string;
    capitalInfo: {
        latlng: number[];
    };
    postalCode: {
        format: string;
        regex: string;
    };
}

export interface FullCountryData {}