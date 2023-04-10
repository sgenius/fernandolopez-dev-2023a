import React from 'react';

import DefaultOneCol from '@/components/DefaultOneCol';
import styles from './index.module.css';

const IntroRow: React.FC = () => (
    <div className={`${styles.oneCol}`}>
        <DefaultOneCol>
            <div className={styles.griddedContainer}>
                <div className={styles.gridCellLeft}>
                    <p className="subtitle">I am a frontend dev who cares about community and doing things well. Currently at Lyft, helping to make the world a better place.</p>
                </div>
                <div className={styles.gridCellRight}>
                    <p className="subtitle">Soy un desarrollador frontend al que le importa la comunidad y hacer las cosas bien. Trabajo para Lyft, ayudando a hacer un mundo mejor.</p>
                </div>
            </div>
        </DefaultOneCol>
    </div>
);

export default IntroRow;