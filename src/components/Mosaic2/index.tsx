import React from 'react';
import TopBar from '@/components/TopBar';
import Canvas from './Canvas';
import styles from './index.module.css';
import { Mosaic2StateProvider } from './context';

const Mosaic2: React.FC = () => (
    <>
        <TopBar />
        <Mosaic2StateProvider>
            <section className={styles.canvasWrap}>
                <Canvas />
            </section>
        </Mosaic2StateProvider>
    </>
);

export default Mosaic2;