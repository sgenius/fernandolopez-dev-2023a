import React from 'react';
import styles from './index.module.css';
import Link from '@/components/Link';

interface Props {
    name: string;
    cca2?: string;
    flag?: string;
    isDependency?: boolean;
}

const CountryLink: React.FC<Props> = ({ name, cca2, flag, isDependency = false }) => (
    <Link className={`${styles.countryLink} ${isDependency ? styles.dependency : ''}`} href={`/countries/${cca2 ?? ''}`}>
        {flag && (
            <span className={styles.flag}>{flag}{' '}</span>
        )}
        <span className={styles.name}>{name}</span>
    </Link>
);

export default CountryLink;