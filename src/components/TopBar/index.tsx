import React from 'react';
import Link from 'next/link';
import DefaultOneCol from '@/components/DefaultOneCol';
import styles from './index.module.css';

export const TopBar: React.FC = () => (
    <div className={styles.topBar}>
        <DefaultOneCol>
            <Link href="/">fernandolopez.dev</Link>
        </DefaultOneCol>
    </div>
);

export default TopBar;