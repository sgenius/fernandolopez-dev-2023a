import React from 'react';
import TopBar from '@/components/TopBar';
import DefaultOneCol from '@/components/DefaultOneCol';
import Image from 'next/image';
import Link from '@/components/Link';
import BottomBar from '@/components/BottomBar';
import styles from './countries.module.css';
import { abrilFatface } from '@/components/fonts';
import { getTextWithCommasList } from '@/helpers/format';
import { RcCountryData } from './defs';
import { RC_COUNTRIES_URI, getRcCountryUri } from './helpers';
import CountryLink from '@/components/Countries/CountryLink';

export async function getStaticPaths() {
    const countriesResponse = await fetch(RC_COUNTRIES_URI)
    const rcCountriesDataObj: RcCountryData[] = await countriesResponse.json();

    const paths = rcCountriesDataObj.map((countryData) => ({
        params: { code: countryData.cca3 },
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
    const borderLinks = rcCountryData.borders.map((border) => (
        <>
            <CountryLink name={border} cca3={border} flag={undefined} key={`border-${border}`} />{' '}
        </>
    ));

    const currencyData = Object.values(rcCountryData.currencies);
    
    return (
        <>
            <TopBar />
            <section id="back-to-home" className={styles.backToHome}>
                <DefaultOneCol>
                    <Link href="/countries">Back to the country index</Link>
                </DefaultOneCol>
            </section>
            <header className={`${styles.headerCol} ${abrilFatface.className}`}>
                <DefaultOneCol>
                    <div className={`${styles.contentGrid} ${styles.headerGrid}`}>
                        <h1>
                            <span>{rcCountryData.name.common}</span>
                        </h1>
                        <div id="emblems" className={styles.emblems}>
                            <Image src={rcCountryData.flags.png} width={100} height={100} alt={rcCountryData.flags.alt || `Flag of ${rcCountryData.name}`} />
                            <Image src={rcCountryData.coatOfArms.png} width={100} height={100} alt={`Coat of arms of ${rcCountryData.name}`} />
                        </div>
                    </div>
                </DefaultOneCol>
            </header>
            <main className={styles.main}>
                <DefaultOneCol>
                    <div className={styles.contentGrid}>
                        <div id="name-cell">
                            <article className={styles.cellArticle}>
                                <span className={styles.articleName}>Official name</span>
                                {rcCountryData.name.official}
                            </article>
                            <article className={styles.cellArticle}>
                                <span className={styles.articleName}>Location</span>
                                {rcCountryData.region} | {rcCountryData.subregion}
                            </article>
                            <article className={styles.cellArticle}>
                                <span className={styles.articleName}>Borders</span>
                                {borderLinks}
                            </article>
                        </div>
                        <div id="area-pop-cell" className={styles.contentCellRight}>
                            <article className={styles.cellArticle}>
                                <span className={styles.articleName}>Area</span>
                                {rcCountryData.area} km2
                            </article>
                            <article className={styles.cellArticle}>
                                <span className={styles.articleName}>Population</span>
                                {rcCountryData.population} habitants
                            </article>
                            <article className={styles.cellArticle}>
                                <span className={styles.articleName}>Density</span>
                                {rcCountryData.population / rcCountryData.area} hab / km2
                            </article>
                            <article className={styles.cellArticle}>
                                <span className={styles.articleName}>Demonyms</span>
                                <em>(m)</em> {rcCountryData.demonyms.eng.m} / <em>(f)</em> {rcCountryData.demonyms.eng.f}
                            </article>
                        </div>
                        <div id="map-cell" className={`${styles.contentCellFull} ${styles.nonTextCell}`}>
                            map
                        </div>
                        <div id="intl-relations-cell">
                            <article className={styles.cellArticle}>
                                <span className={styles.articleName}>Capital(s)</span>
                                {getTextWithCommasList(rcCountryData.capital).map((item) => (
                                    <React.Fragment key={`capital-${item}`}>
                                        {item}
                                    </React.Fragment>
                                ))}
                            </article>
                            <article className={styles.cellArticle}>
                                <span className={styles.articleName}>Status</span>
                                {rcCountryData.independent ? 'independent' : 'dependency'}, {rcCountryData.status}
                            </article>
                            <article className={styles.cellArticle}>
                                <span className={styles.articleName}>Memberships</span>
                                {rcCountryData.unMember ? 'UN, ' : ''}{rcCountryData.fifa ? 'FIFA' : ''}
                                {!rcCountryData.unMember && !rcCountryData.fifa ? 'none': ''}
                            </article>
                        </div>
                        <div id="economy-cell" className={styles.contentCellRight}>
                            <article className={styles.cellArticle}>
                                <span className={styles.articleName}>Currency</span>
                                {
                                    currencyData.map((currency, index) => (
                                        <React.Fragment key={`cur-${currency.name}`}>
                                            <span className={styles.currency} >{currency.name} ({currency.symbol})</span>
                                            {index < currencyData.length - 1 &&  ', '}
                                        </React.Fragment>

                                    ))
                                }
                            </article>
                        </div>
                        <div id="others-cell" className={styles.contentCellFull}>
                            <article className={styles.cellArticle}>
                                <span className={styles.articleName}>TLD</span>
                                {rcCountryData.tld}
                            </article>
                            <article className={styles.cellArticle}>
                                <span className={styles.articleName}>Phone code</span>
                                {rcCountryData.idd.root}, suffix(es): {rcCountryData.idd.suffixes.map((item) => (
                                    <React.Fragment key={`idd-suffix-${item}`}>
                                        {item}{' '}
                                    </React.Fragment>
                                ))}
                            </article>
                            <article className={styles.cellArticle}>
                                <span className={styles.articleName}>Postal code format</span>
                                {rcCountryData.postalCode.format}
                            </article>
                            <article className={styles.cellArticle}>
                                <span className={styles.articleName}>Drives on the</span>
                                {rcCountryData.car.side}
                            </article>
                        </div>
                    </div>
                </DefaultOneCol>
            </main>
            <BottomBar />
        </>
    )
}

export default Country;