import React from 'react';
import Canvas from './Canvas';
import styles from './index.module.css';
import { Mosaic2StateProvider } from './context';

const Mosaic2: React.FC = () => (
    <Mosaic2StateProvider>
        <section className={styles.canvasWrap}>
            <Canvas />
        </section>
    </Mosaic2StateProvider>
);

export default Mosaic2;