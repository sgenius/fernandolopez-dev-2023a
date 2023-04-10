import React from 'react';
import styles from './index.module.css';
import Link from '@/components/Link';
import { RC_COUNTRIES_BY_CCA3 } from '@/components/Countries/data/rcCountries';

interface Props {
    cca3: string;
}

const CountryLink: React.FC<Props> = ({ cca3 }) => {
    const { name, flag, independent } = RC_COUNTRIES_BY_CCA3[cca3];
    return (
        <Link className={`${styles.countryLink} ${!independent ? styles.isDependency : ''}`} href={`/countries/${cca3 ?? ''}`}>
            {flag && (
                <span className={styles.flag}>{flag}{' '}</span>
            )}
            <span className={styles.name}>{name.common}</span>
        </Link>
    );
};

export default CountryLink;