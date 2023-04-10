import React from 'react';
// import Link from 'next/link';
import Link from '@/components/Link';
import styles from './styles.module.css';
import Legend from './Legend';
import { titleFont, merriweather } from '@/components/fonts';


const LegendBox: React.FC = () => {
    return (
        <section id="legend" className={styles.legend}>
            <div className={styles.internalScroller}>
                <h1 className={`shadowedTitle ${titleFont.className}`}>Mosaic</h1>
                <p className={merriweather.className}>is a browser for real maps of imaginary places.</p>
                <p><Link href="/mosaic/about">About this project</Link></p>
                <Legend />
            </div>
        </section>
    );
};

export default LegendBox;