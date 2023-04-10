import React from 'react';
import Image from 'next/image';
import BottomBar from '@/components/BottomBar';
import { RC_COUNTRIES, RC_COUNTRIES_BY_CCA3 } from '@/components/Countries/data/rcCountries';
import CountryLink from '@/components/Countries/CountryLink';
import DefaultOneCol from '@/components/DefaultOneCol';
import { titleFont } from '@/components/fonts';
import Link from '@/components/Link';
import TopBar from '@/components/TopBar';
import { roundDec, largeNumberFormat } from '@/helpers/format';
import styles from './countries.module.css';
import { RcCountryData, RcCountryImage, RcCountryIdd } from './defs';

export async function getStaticPaths() {
    const paths = RC_COUNTRIES.map((countryData) => ({
        params: { code: countryData.cca3 },
    }));

    return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { code: string } }) {
    const { code } = params;
    return {
        props: {
            rcCountryData: RC_COUNTRIES_BY_CCA3[code],
        }
    }
}

interface CountryPageProps {
    rcCountryData: RcCountryData,
}

const Country: React.FC<CountryPageProps> = ({ rcCountryData }) => {
    const borderLinks = rcCountryData.borders?.map((border) => (
        <>
            <CountryLink cca3={border} key={`border-${border}`} />{' '}
        </>
    ));

    const currencyData = Object.values(rcCountryData.currencies || {});
    const languageData = Object.values(rcCountryData.languages || {});

    console.log(rcCountryData)
    
    return (
        <>
            <TopBar />
            <section id="back-to-home" className={styles.backToHome}>
                <DefaultOneCol>
                    <Link href="/countries">Back to the country index</Link>
                </DefaultOneCol>
            </section>
            <header className={`${styles.headerCol} ${titleFont.className}`}>
                <DefaultOneCol>
                    <div className={`${styles.contentGrid} ${styles.headerGrid}`}>
                        <h1>
                            <span className="shadowedTitle">{rcCountryData.name.common}</span>
                        </h1>
                        <div id="emblems" className={styles.emblems}>
                            <Image src={rcCountryData.flags.png} width={100} height={100} alt={rcCountryData.flags.alt || `Flag of ${rcCountryData.name}`} />
                            {rcCountryData.coatOfArms && (rcCountryData.coatOfArms as RcCountryImage).png && (
                                <Image src={(rcCountryData.coatOfArms as RcCountryImage).png} width={100} height={100} alt={`Coat of arms of ${rcCountryData.name}`} />
                            )}
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
                                {rcCountryData.area} km<sup>2</sup>
                            </article>
                            <article className={styles.cellArticle}>
                                <span className={styles.articleName}>Population</span>
                                {largeNumberFormat(rcCountryData.population)} inhabitants
                            </article>
                            <article className={styles.cellArticle}>
                                <span className={styles.articleName}>Density</span>
                                {roundDec(rcCountryData.population / rcCountryData.area, 3)} pop / km<sup>2</sup>
                            </article>
                            <article className={styles.cellArticle}>
                                <span className={styles.articleName}>Demonyms</span>
                                {rcCountryData.demonyms ? (
                                    <>
                                        <em>(m)</em> {rcCountryData.demonyms.eng.m} / <em>(f)</em> {rcCountryData.demonyms.eng.f}
                                    </>
                                ) : (<>none</>)}
                            </article>
                            <article className={styles.cellArticle}>
                                <span className={styles.articleName}>Official languages</span>
                                {languageData.join(', ')}
                            </article>
                        </div>
                        <div id="intl-relations-cell">
                            <article className={styles.cellArticle}>
                                <span className={styles.articleName}>Capital(s)</span>
                                {(rcCountryData.capital || ['none']).join(', ')}
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
                            {rcCountryData.gini && (
                                <article className={styles.cellArticle}>
                                    <span className={styles.articleName}>GINI</span>
                                    {Object.entries(rcCountryData.gini)[0][1]} ({Object.entries(rcCountryData.gini)[0][0]})
                                </article>
                            )}
                        </div>
                        <div id="others-cell" className={styles.contentCellFull}>
                            <article className={styles.cellArticle}>
                                <span className={styles.articleName}>TLD</span>
                                {rcCountryData.tld}
                            </article>
                            {(rcCountryData.idd as RcCountryIdd).root && (
                                <article className={styles.cellArticle}>
                                    <span className={styles.articleName}>Phone code</span>
                                    {(rcCountryData.idd as RcCountryIdd).root}, suffix(es): {(rcCountryData.idd as RcCountryIdd).suffixes.map((item) => (
                                        <React.Fragment key={`idd-suffix-${item}`}>
                                            {item}{' '}
                                        </React.Fragment>
                                    ))}
                                </article>
                            )}
                            <article className={styles.cellArticle}>
                                <span className={styles.articleName}>Postal code format</span>
                                {rcCountryData.postalCode ? rcCountryData.postalCode.format : 'none'}
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