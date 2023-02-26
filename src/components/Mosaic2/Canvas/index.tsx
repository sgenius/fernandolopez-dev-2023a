import React, { useState, useLayoutEffect, useRef } from 'react';
import { Stage, Layer } from 'react-konva';
import styles from './index.module.css';
import Tileset from './Tileset';

const Mosaic2Canvas: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const [curWidth, setCurWidth] = useState(0);
    const [curHeight, setCurHeight] = useState(0);

    useLayoutEffect(() => {
        if (targetRef.current) {
            setCurWidth(targetRef.current.offsetWidth);
            setCurHeight(targetRef.current.offsetHeight);
        }
    }, []);

    return (
        <div ref={targetRef} className={styles.fullScreener}>
            <Stage width={curWidth} height={curHeight}>
                <Layer>
                    <Tileset />
                </Layer>
            </Stage>
        </div>
    )
};

export default Mosaic2Canvas;