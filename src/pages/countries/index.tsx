import React from 'react';
import TopBar from '@/components/TopBar';
import DefaultOneCol from '@/components/DefaultOneCol';
import Link from '@/components/Link';
import BottomBar from '@/components/BottomBar';
import { abrilFatface } from '@/components/fonts';
import styles from './countries.module.css';
import CountryLink from '@/components/Countries/CountryLink';
import { RC_COUNTRIES } from '@/components/Countries/data/rcCountries';
import WorldMap from '@/components/Countries/WorldMap';
import { groupCountriesByRegion } from './helpers';
import { RcCountryData } from './defs';

const makeCountryList = (countryArray: RcCountryData[]) => {
    const countryList = countryArray
        .map((country => (
        <li key={`li-country-${country.cca3}`}>
            <CountryLink
                cca3={country.cca3}
            />
        </li>
    )), []);

    return (
        <ul className={styles.ul}>
            {countryList}
        </ul>
    );
}

const makeRegionalCountryList = (countryArray: RcCountryData[], regionName: string) => (
    <section key={`regionList-${regionName.replace(' ', '')}`} className={styles.regionSection}>
        <h3 className={styles.regionName}>{regionName}</h3>
        { makeCountryList(countryArray) }
    </section>
);

export const makeRegionalCountryLists = (countriesByRegion: Record<string, RcCountryData[]>) => {
    const countryLists = [];
    for (let [regionName, countryArray] of Object.entries(countriesByRegion)) {
        countryLists.push(makeRegionalCountryList(countryArray, regionName));
    }
    return countryLists;
}

const CountriesHome: React.FC = () => {
    const countriesByRegion = groupCountriesByRegion(RC_COUNTRIES);
    const countryLists = makeRegionalCountryLists(countriesByRegion);

    return (
        <>
            <TopBar />
            <header className={`${styles.headerCol} ${abrilFatface.className}`}>
                <DefaultOneCol>
                    <h1>
                        A Guide To The World&apos;s <span>Countries.</span>
                    </h1>
                </DefaultOneCol>
            </header>
            <main className={styles.main}>
                <DefaultOneCol>
                    <section>
                        <p>Before I loved web development, I loved geography. As a child, I used to buy 
                            these yearly World Almanacs. This intends to be pretty much like that: a reference
                            for the world&apos;s countries, with basic data to jumpstart a research session.</p>
                        <p>This was created as an experiment to test the power of static websites - in this case, <Link href="https://nextjs.org/">Next.js</Link>.
                            The previous version of this website used <Link href="https://github.com/nozzle/react-static">React Static</Link>,
                            which meant using different techniques than the current version.</p>
                        <p>Most data comes from <Link href="https://restcountries.eu">REST Countries</Link>; it 
                            was consumed at compilation time to generate static pages which are fast to load, yet extremely versatile. 
                        </p>
                    </section>
                    <section>
                        <h2 className={styles.countriesHeader}>The countries</h2>
                        <section className={styles.worldMapSection}>
                            <WorldMap />
                        </section>
                        {countryLists}
                    </section>
                </DefaultOneCol>
            </main>
            <BottomBar />
        </>
    );
};

export default CountriesHome;