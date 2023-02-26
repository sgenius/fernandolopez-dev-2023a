import { KonvaEventObject } from 'konva/lib/Node';
import React, { useState, useLayoutEffect, useRef } from 'react';
import { Stage, Layer } from 'react-konva';
import styles from './index.module.css';
import Tileset from './Tileset';
import { MOSAIC_DATA } from '../constants';

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

    const { scaleBy } = MOSAIC_DATA;

    // Zoom event handler.
    // https://konvajs.org/docs/sandbox/Zooming_Relative_To_Pointer.html#
    const onStageWheel = (evt: KonvaEventObject<WheelEvent>) => {
        evt.evt.preventDefault;

        const stage = evt.currentTarget.getStage();
        if (!stage) {
            return;
        }

        const oldScale = stage.scaleX();
        const pointer = stage.getPointerPosition();
        if (!pointer) {
            return;
        }

        const mousePointTo = {
            x: (pointer.x - stage.x()) / oldScale,
            y: (pointer.y - stage.y()) / oldScale,
        };

        let direction = evt.evt.deltaY > 0 ? 1 : -1;
        if (evt.evt.ctrlKey) { // true if zooming on trackpad
            direction = -direction;
        }

        const newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

        stage.scale({ x: newScale, y: newScale });

        const newPos = {
            x: pointer.x - mousePointTo.x * newScale,
            y: pointer.y - mousePointTo.y * newScale,
        };
        stage.position(newPos);        
    } 

    return (
        <div ref={targetRef} className={styles.fullScreener}>
            <Stage width={curWidth} height={curHeight} draggable onWheel={onStageWheel}>
                <Layer>
                    <Tileset />
                </Layer>
            </Stage>
        </div>
    )
};

export default Mosaic2Canvas;