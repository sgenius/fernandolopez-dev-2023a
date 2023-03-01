import { RcCountryData } from "./defs";

export const RC_COUNTRIES_URI = 'https://restcountries.com/v3.1/all';
export const getRcCountryUri = (code: string): string => `https://restcountries.com/v3.1/alpha/${code}`;

export const sortCountriesByName = (countries: RcCountryData[]): RcCountryData[] => {
    return countries.sort((country1, country2) => {
        const name1 = country1.name.common;
        const name2 = country2.name.common;
        if (name1 < name2) {
            return -1;
        } else if (name1 > name2) {
            return 1;
        }
        return 0;
    });
};

export const groupCountriesByRegion = (countries: RcCountryData[]): Record<string, RcCountryData[]> => {
    const groupedCountries: Record<string, RcCountryData[]> = {};
    countries.forEach((country) => {
        const { region } = country;
        const regionGroup = groupedCountries[region] || [];
        regionGroup.push(country);
        groupedCountries[region] = regionGroup;
    });

    const groupedCountriesArr = Object.values(groupedCountries);
    groupedCountriesArr.forEach(countryGroup => sortCountriesByName(countryGroup));

    return groupedCountries;
};