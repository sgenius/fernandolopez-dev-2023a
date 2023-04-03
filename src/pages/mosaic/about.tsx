import React from 'react';
import DefaultOneCol from '@/components/DefaultOneCol';
import TopBar from '@/components/TopBar';
import BottomBar from '@/components/BottomBar';
import { abrilFatface } from '@/components/fonts';
import styles from './styles.module.css'
import Link from 'next/link';

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
                    <p className={styles.firstParagraph}>This is the second iteration of a passion project at the intersection of coding, geography, and world building.</p>
                    <p>It has three parts:</p>
                    <h2>The map</h2>
                    <p>I&apos;ve loved maps since I was a child. I also loved reading and learning about the world, its countries, its people, and their history. Long hours were spent copying maps and creating imaginary worlds on paper.</p>
                    <p>After growing up, this never went away. Oftentimes I would doodle geographical forms on paper until they resembled a place. Sometimes these matured into imaginary countries.</p>
                    <p>At some point, inspired by <a href='http://www.jerrysmap.com/'>Jerry&apos;s Map</a>, I started a long term project to have these places and countries live in a whole world to discover.</p>
                    <h3>Building the map</h3>
                    <p>To start creating this world, I had to lay some basic rules first:</p>
                    <ul>
                        <li><strong>A road map:</strong> I wanted to create a world that anybody could relate to. Instead of a medieval world or a Tolkienesque fantasy, the world would be firmly placed in a modern setting. There is still a fantasy element in the world-building, but it is kept at a minimum. This should feel like a real road map.</li>
                        <li><strong>A unending project:</strong> The idea is that this world will survive me. I will never finish creating it, yet it will exist as a manifestation of myself - both as an imaginary story, and as an encoded diary of sorts.</li>
                        <li><strong>Creation over deletion: </strong> While the construction is Jerry-like, the rules for Jerry&apos;s map allow for both creation and destruction. I wanted to focus on creation: while still possible to destroy, I find much more interesting to end up seeing a mosaic (hence, the project name) of the places generated throughout the years, and being able to travel back to them if desired.</li>
                        <li><strong>Cheap to build:</strong> A life long project needs to be supported by media easily accessible. For media, I went for pens and markers over 3x5 inch index cards, which are easy to store and obtain and slightly more resistant than bond paper.</li>
                        <li><strong>Made to last:</strong> I am aware the media I chose will degrade after some years. As a response, I am scanning everything, to keep both a record of the physical maps and a way to rebuild or replace them if needed.</li>
                    </ul>
                    <p>After these tenets were set, up next was deciding what would be represented in the map. &quot;Real&quot; world maps try to represent reality, but no map can show everything; a process of editorialization has to happen. In so, the reader of a map must understand and accept that the map is, by necessity, incomplete: it is more representative of the intention of the map.</p>
                    <p>When creating a world through a map, the map itself becomes the main source of truth - especially if not supported by a narrative to complement it. Even when that narrative exists, as long as it comes from the original author, the map assembles canon: it does not represent, but it itself is its own truth... unless the author itself says that is not the case, of course.</p>
                    <p>This map intends to be a &quot;real&quot; map for an imaginary world. In building it, I am creating the world, or rather, discovering it. At the same time, as with a real map, there might be errors and omissions. This is intentional: from time to time, I will reassemble part of the map and &quot;discover&quot; that a road was in a place that I had not marked before, because that it would not make sense otherwise.</p>
                    <p>With all of this in mind, before starting the map I first decided on a scale and a style. I went for an approximate scale of 1:300000, so that 5 cm would represent 15 km; this allows a midpoint between the details of urban maps and the generalizations of wide scale ones.</p>
                    <p>As for orography, I decided to go for level curves each 50 units. These units were originally metres, but after some more measurement it was decided to retcon that to &quot;double metres&quot;, so that each curve actually represents a 100m elevation gain.</p>
                    <h2>Digitization and compression</h2>
                    <p>I had to come up with a standard way of doing this, both for speed and to get somewhat uniform results. The scanner would tend to crop the card edges (there is no <a href="https://web.printingcenterusa.com/blog/what-is-full-bleed-printing">bleed</a> spacing in them!); this was solved via settings in the Scan application that comes with Windows.</p>
                    <p>When I had around 200 map pieces, I got myself a scanner and started digitizing. </p>
                    <p>The result would be .png files of <em>about</em> 1500x900 pixels, around 400kb each.</p>
                    <h2>The Mosaic viewer</h2>
                    <h3>The first version</h3>
                    <p>At around this time, I decided to build a browser that would allow me to understand the map I was building as a whole, without the need of displaying its pieces on my apartment floor. I was also running out of floor space, anyways...</p>
                    <p>I had no real experience with canvas. After evaluating a number of libraries, I went with the one that would enable me to put tile images in a grid the fastest. This ended up being <a href="http://fabricjs.com/">Fabric.</a></p>
                    <p>Fabric worked great for me at that time. It allows for powerful abstractions to manage &quot;objects&quot; inside the canvas plus a great number of utilities. It is not very React-friendly out of the box, but a wrapper was created inspired on <a href="https://stackoverflow.com/questions/37565041/how-can-i-use-fabric-js-with-react">this ReactOverflow answer.</a></p>
                    <p>An early problem was zooming. It quickly became evident that storing hundreds of full resolution images is not very friendly to the browser memory. The solution was creating a smaller copy of each tile using Python and its <a href="https://pillow.readthedocs.io/">Pillow</a> library. A couple of scripts give me two sets of images: the originals and the &quot;thumbs&quot;, each thumb measuring no more than 8kb.</p>
                    <p>A powerful feature of Fabric is being able to apply graphic filters on the fly. This opened the door to creating diverse data views, emphasizing different parts of the map depending on their color.</p>
                    <p>Still, Fabric was not without its problems. The on-the-fly filters are very memory and processor intensive, taking seconds to render each time. Plus, changing between zoom levels (that is, between showing the &quot;thumb&quot; image set at higher zoom levels and the original images at lower ones) required reloading images; after doing that, the old ones would remain in memory for reasons I could never fully understand.</p>
                    <h3>The current version</h3>
                    <p>When rebuilding this website in 2023, the landscape had changed and Fabric itself was now more than 10 years old. Given that the website itself would be ported to Next.js, I decided to find a suitable alternative to Fabric, ideally one that would work with (and not despite of) React.</p>
                    <p>I quickly settled on <a href="https://konvajs.org/">Konva</a>. From the last time I had evaluated this library, it had now evolved to the point that it made my life much easier.</p>
                    <p>Thanks to <a href="https://konvajs.org/docs/react/Intro.html">Konva&apos;s React integration</a>, the memory management problem was gone. Each tile is a component. The code takes advantage of React to declaratively select the appropriate tileset depending on zoom, and the associated memory management is already taken care of.</p>
                    <p>Konva does not support on-the-fly filtering the way Fabric does, but this is okay: such an operation should be handled offline anyway. At a future point I might be building a stronger support for alternative tiles, and use Python to generate these alternate image versions.</p>
                    <h3>Future plans</h3>
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