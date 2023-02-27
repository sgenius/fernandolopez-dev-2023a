import { GnCountryDataResponse, GnCountryData } from './defs';

export async function getStaticPaths() {
    const countriesResponse = await fetch('https://secure.geonames.org/countryInfoJSON?lang=en&username=fa_lopez&style=full')
    const gnCountriesDataObj: GnCountryDataResponse = await countriesResponse.json();

    const paths = gnCountriesDataObj.geonames.map((countryData) => ({
        params: { code: countryData.countryCode },
    }));

    return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { code: string } }) {
    const { code } = params;
    const fetchUri = `https://secure.geonames.org/countryInfoJSON?lang=en&username=fa_lopez&country=${code}&style=full`;
    console.log('countries.getStaticProps > fetchUri: ', fetchUri);
    const countryResponse = await fetch(fetchUri);
    const gnCountryDataObj: GnCountryDataResponse = await countryResponse.json();

    console.log('countries.getStaticProps > gnCountryDataObj: ', gnCountryDataObj);
    const gnCountryData = gnCountryDataObj.geonames[0] || {};

    return {
        props: {
            gnCountryData,
        }
    }
}

interface CountryPageProps {
    gnCountryData: GnCountryData,
}

const Country: React.FC<CountryPageProps> = ({ gnCountryData }) => {
    return (
        <h1>{gnCountryData.countryName}</h1>
    )
}

export default Country;