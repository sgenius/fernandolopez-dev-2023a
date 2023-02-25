import React from 'react';
import Image from 'next/image';
import { merriweather, abrilFatface } from '@/components/fonts';

import DefaultOneCol from '@/components/DefaultOneCol';
import Link from '@/components/Link';
import styles from './index.module.css';

const ProjectsRow: React.FC = () => (
    <>
        <DefaultOneCol>
            <h2 className={`${styles.h2} ${abrilFatface.className}`}>Projects / Proyectos</h2>
            <div className={`${styles.griddedContainer} ${merriweather.className}`}>
                {/* <ProjectCell>
                    <img src="images/the-worlds-countries.png" alt="Cropped screenshot" />
                    <h3><Link as="a" href="/countries">A Guide To The World&aquo;s Countries</Link></h3>
                    <p>A simplistic World Almanac statically compiled using React Static and public APIs.</p>
                    <p>
                        <EsSpan>Un Almanaque Mundial simplista, construido est&aacute;ticamente usando React Static y APIs p&uacute;blicas. En ingl&eacute;s solamente.</EsSpan>
                    </p>
                </ProjectCell>
                <ProjectCell>
                    <img src="images/mosaic-screenshot.png" alt="Cropped screenshot" />
                    <h3><Link as="a" href="/mosaic">Map Mosaic</Link></h3>
                    <p>A barebones renderer for scanned pieces of an off-line imaginary map. Use the mouse to interact with the map. Uses <Link as="a" href="http://fabricjs.com/">Fabric</Link>, a React library for canvas manipulation.</p>
                    <p>
                        <EsSpan>Un desplegador muy básico para mostrar piezas escaneadas de un mapa imaginario. Usa el mouse para interactuar con el mapa. Hecho con <Link as="a" href="http://fabricjs.com/">Fabric</Link>, una biblioteca de React para manipulación de canvas.</EsSpan>
                    </p>
                </ProjectCell> */}
                <article className={styles.projectCell}>
                    <Image src="/images/mosaic-screenshot.png" width={640} height={640} alt="Cropped screenshot" className={styles.projectCellImg} />
                    <h3><Link href="/mosaic" target="_blank">Map Mosaic</Link></h3>
                    <p>A barebones renderer for scanned pieces of an off-line imaginary map. Use the mouse to interact with the map. Uses <Link as="a" href="http://fabricjs.com/">Fabric</Link>, a React library for canvas manipulation..</p>
                    <p>Un desplegador muy básico para mostrar piezas escaneadas de un mapa imaginario. Usa el mouse para interactuar con el mapa. Hecho con <Link as="a" href="http://fabricjs.com/">Fabric</Link>, una biblioteca de React para manipulación de canvas.</p>
                </article>
                <article className={styles.projectCell}>
                    <Image src="/images/unicode-mosaic.png" width={640} height={640} alt="Cropped screenshot" className={styles.projectCellImg} />
                    <h3><Link href="https://bi3vr.csb.app/" target="_blank">Unicode Tapestry</Link></h3>
                    <p>An animated &quot;toy&quot; made with React, Typescript, and a few strategically chosen text outputs.</p>
                    <p>Un &quot;juguete&quot; animado hecho con React, Typescript y algunos textos bien escogidos.</p>
                </article>
            </div>
        </DefaultOneCol>
    </>
);

export default ProjectsRow;