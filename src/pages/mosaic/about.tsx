import React from 'react';
import DefaultOneCol from '@/components/DefaultOneCol';
import TopBar from '@/components/TopBar';
import BottomBar from '@/components/BottomBar';
import { abrilFatface } from '@/components/fonts';
import styles from './styles.module.css';
import Image from 'next/image';
import Link from '@/components/Link';

const MosaicAbout: React.FC = () => (
    <>
        <TopBar />
        <header className={`${styles.headerCol} ${abrilFatface.className}`}>
            <DefaultOneCol>
                <h1>
                    <span>Mosaic:</span>
                    A map browser for imaginary worlds
                </h1>
            </DefaultOneCol>
        </header>
        <main className={styles.main}>
            <DefaultOneCol>
                <section className={styles.explanation}>
                    <h2>tl;dr</h2>
                    <p className={styles.tldr}>This is a image tile browser based on <Link href="https://konvajs.org/" target="_blank" rel="noopener noreferrer">Konva</Link>, specially designed for <Link href='http://www.jerrysmap.com/'>Jerry&apos;s Map</Link>-style projects.</p>
                    <p className={styles.firstParagraph}>This is a passion project at the intersection of coding, geography, and world building.</p>
                    <h2>The map</h2>
                    <p>I&apos;ve loved maps since I was a child. I tend to doodle geographical forms, which sometimes matured into imaginary places.</p>
                    <p>At some point, inspired by <Link href='http://www.jerrysmap.com/' target="_blank" rel="noopener noreferrer">Jerry&apos;s Map</Link>, I started a long term project to have these places live in a world to discover.</p>
                    <h3>Building the map</h3>
                    <Image className={styles.horizontal} src="/images/drawing-a-new-card.jpg" alt="Some map cards assembled in a grid, on a desk, plus a new card with a map in progress." title="Drawing new cards requires the context of its surrounding maps. This is how my desk looks like."  width={688} height={516} />
                    <p>Some basic rules for the project:</p>
                    <ul>
                        <li><strong>A road map:</strong> I wanted to create a world that anybody could relate to.</li>
                        <li><strong>A unending project:</strong> This world will survive me.</li>
                        <li><strong>Creation over deletion: </strong> I find much more interesting to build up a mosaic (hence, the project name) of the places generated throughout the years.</li>
                        <li><strong>Cheap to build:</strong> The physical version is done with pens and markers on 3x5 inch index cards.</li>
                        <li><strong>Made to last:</strong> Everything gets scanned; the map can be rebuilt from the digital backup.</li>
                        <li><strong>There might be errors: </strong> And that is fine. Same happens with real maps.</li>
                        <li><strong>Not all is represented: </strong> Maps are, by definition, editorialized. There is more than meets the eye; it&apos;s up to the viewer to imagine it.</li>
                    </ul>
                    <Image className={styles.horizontalLeft} src="/images/current-scale-card.jpg" alt="A card showing the coastline of San Francisco and a scale reference. The card is on a desk. A pen and a lamp are partially visible." title="A card showing the coastline of San Francisco and a scale reference."  width={688} height={516} />
                    <h3>Scale</h3>
                    <p>Approximately 1:300000. In the physical version, 5 cm represent 15 km.</p>
                    <p>For orography, there are level curves every 50 units. Each unit is two meters. This means each curve represents a 100m elevation change.</p>
                    <h2>Digitization and compression</h2>
                    <p>When I had around 200 map pieces, I got myself a scanner and started digitizing. The scan process results in .png files of <em>about</em> 1500x900 pixels, around 400kb each.</p>
                    <p>Out of these, zoomed-out &quot;thumbnail&quot; versions were created using Python&apos;s <Link href="https://pillow.readthedocs.io/" target="_blank" rel="noopener noreferrer">Pillow</Link> library; each thumb measures no more than 8kb.</p>
                    <h2>The Mosaic viewer</h2>
                    <Image className={styles.horizontal} src="/images/early-mosaic.jpg" alt="A series of map cards ordered in a grid on a wooden floor." title="Soon, tiling the cards on the floor became impractical."  width={688} height={516} />
                    <p>The viewer exists to inform about the map as a whole (without having to lay down all cards in the floor) and to show it to the world. Zooming and panning are included; at low zoom levels, the thumb images are used; the image set is swapped when the zoom is high enough.</p>
                    <h3>The first version</h3>
                    <p>This was created with <Link href="http://fabricjs.com/" target="_blank" rel="noopener noreferrer">Fabric</Link>, chosen for its OOP-style abstractions on top of the canvas API and its powerful utilities.</p>
                    <p>Fabric worked great, but it has its challenges. Using it with React required a wrapper based on <Link href="https://stackoverflow.com/questions/37565041/how-can-i-use-fabric-js-with-react">this.</Link> Also, swapping between image sets when zooming presented memory issues.</p>
                    <h3>The current version</h3>
                    <p>When rebuilding this website in 2023, Fabric would not play well with Next.js, so I moved to <Link href="https://konvajs.org/">Konva</Link>.</p>
                    <p>Thanks to <Link href="https://konvajs.org/docs/react/Intro.html" target="_blank" rel="noopener noreferrer">Konva&apos;s React integration</Link>, the memory management problem was gone. Each tile is a component, and tilesets are set declaratively; React takes care of the rest.</p>
                    <h3>Future plans</h3>
                    <Image className={styles.vertical} src="/images/physical-set.jpg" alt="Some map cards on a desk, plus a plastic box that holds the rest of the map cards and some blank cards. A pen and some plastic pen cases are visible." title="When not in use, cards are stored in a sturdy plastic box." width={387} height={516} />
                    <p>Some planned features include:</p>
                    <ul>
                        <li>The aforementioned tile switcher, to select different tile &quote;styles&quote;.</li>
                        <li>Additional metadata per tile, including their date of creation, as well as an interface to explore the metadata on the map.</li>
                        <li>A slider to explore how the map tiles were created.</li>
                        <li>If there is demand for it, releasing this as a project of its own, so that it could potentially be used by other hobbyists like me.</li>
                    </ul>
                </section>
                <section>
                    <Link href="/mosaic">Back to the map</Link>
                </section>
            </DefaultOneCol>
        </main>
        <BottomBar />
    </>
);

export default MosaicAbout;