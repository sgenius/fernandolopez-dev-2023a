import { RcCountryData } from './defs';
import { RC_COUNTRIES_URI, getRcCountryUri } from './helpers';

export async function getStaticPaths() {
    const countriesResponse = await fetch(RC_COUNTRIES_URI)
    const rcCountriesDataObj: RcCountryData[] = await countriesResponse.json();

    const paths = rcCountriesDataObj.map((countryData) => ({
        params: { code: countryData.cca2 },
    }));

    return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { code: string } }) {
    const { code } = params;
    const fetchUri = getRcCountryUri(code);
    const countryResponse = await fetch(fetchUri);
    const rcCountryDataArr: RcCountryData[] = await countryResponse.json();
    return {
        props: {
            rcCountryData: rcCountryDataArr[0],
        }
    }
}

interface CountryPageProps {
    rcCountryData: RcCountryData,
}

const Country: React.FC<CountryPageProps> = ({ rcCountryData }) => {
    console.log('Country > ', rcCountryData)
    return (
        <h1>{rcCountryData.name.common}</h1>
    )
}

export default Country;