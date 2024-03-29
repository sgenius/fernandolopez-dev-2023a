import React from 'react';
import { titleFont } from '@/components/fonts';

import DefaultOneCol from '@/components/DefaultOneCol';
import Link from '@/components/Link';
import styles from './index.module.css';

const ProjectsRow: React.FC = () => (
    <>
        <DefaultOneCol>
            <h2 className={`${styles.h2} ${titleFont.className}`}>Projects / Proyectos</h2>
            <div className={`${styles.griddedContainer}`}>
                <article className={`${styles.projectCell} ${styles.countries}`}>
                    <h3><Link href="/countries">The World&apos;s Countries</Link></h3>
                    <p>A quick reference and an experiment on static deployment.</p>
                </article>
                <article className={styles.projectCell}>
                    <h3><Link href="/mosaic">Mosaic</Link></h3>
                    <p>A browser for real maps of imaginary places.</p>
                </article>
                <article className={styles.projectCell}>
                    <h3><Link href="https://bi3vr.csb.app/" target="_blank" rel="noreferrer noopener">Unicode Tapestry</Link></h3>
                    <p>An animated &quot;toy&quot; inspired by retro sci-fi interfaces.</p>
                </article>
            </div>
        </DefaultOneCol>
    </>
);

export default ProjectsRow;