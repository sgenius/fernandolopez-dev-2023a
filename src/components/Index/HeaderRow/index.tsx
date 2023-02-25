import React from 'react';
import DefaultOneCol from '@/components/DefaultOneCol';
import { merriweather, abrilFatface } from '@/components/fonts';
import styles from './index.module.css';

const HeaderRow: React.FC = () => (
    <DefaultOneCol className={styles.firstCol}>
        <div className={styles.preTitleWrap}>
            <div className={`${styles.preTitle} ${merriweather.className}`}>Hi. I&apos;m •&nbsp;</div>
            <div className={`${styles.preTitle} ${merriweather.className}`}>Hola. Soy</div>
        </div>
        <h1 className={`${styles.h1} ${abrilFatface.className}`}>Fernando L&oacute;pez. </h1>
    </DefaultOneCol>
);

export default HeaderRow;