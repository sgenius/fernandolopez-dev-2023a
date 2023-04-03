import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import Legend from './Legend';

const LegendBox: React.FC = () => {
    return (
        <section id="legend" className={styles.legend}>
            <div className={styles.internalScroller}>
                <h1>Mosaic</h1>
                <p>is a browser for real maps of imaginary places.</p>
                <p><Link href="/mosaic/about">About this project</Link></p>
                <Legend />
            </div>
        </section>
    );
};

export default LegendBox;