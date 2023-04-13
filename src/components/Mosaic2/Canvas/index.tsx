import React, { useState, useEffect, useRef } from 'react';
import Konva from 'konva';
import { KonvaEventObject } from 'konva/lib/Node';
import { Stage, Layer } from 'react-konva';
import Tileset from './Tileset';
import { useMosaic2State } from '../context';
import { wheelHandler, getDistance, getCenter, updateImageSetByScale } from './helpers';
import { Vector2d } from 'konva/lib/types';

const Mosaic2Canvas: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const [curWidth, setCurWidth] = useState(0);
    const [curHeight, setCurHeight] = useState(0);
    const { dispatch } = useMosaic2State();

    let lastCenter: Vector2d | null = null;
    let lastDist: number | null = null;

    useEffect(() => {
        Konva.hitOnDragEnabled = true;
    }, []);

    // https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
    useEffect(() => {
        if (targetRef.current) {
            setCurWidth(targetRef.current.offsetWidth);
            setCurHeight(targetRef.current.offsetHeight);
        }
        function handleResize() {
            if (targetRef.current) {
                setCurWidth(targetRef.current.offsetWidth);
                setCurHeight(targetRef.current.offsetHeight);
            }
        }

        if (window) {
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (window) {
                window.removeEventListener('resize', handleResize);
            }
        }
    }, [targetRef])

    const onStageWheel = (evt: KonvaEventObject<WheelEvent>) => wheelHandler({ evt, dispatch });

    // https://konvajs.org/docs/sandbox/Multi-touch_Scale_Stage.html
    const onTouchMove = (evt: KonvaEventObject<TouchEvent>) => {
        evt.evt.preventDefault();
        let touch1 = evt.evt.touches[0];
        let touch2 = evt.evt.touches[1];
        const target = evt.target;
        const stage = target.getStage();
        if (!stage) {
            return;
        }

        if (touch1 && touch2) {
            if (stage.isDragging()) {
                stage.stopDrag();
            }

            const p1: Vector2d = {
                x: touch1.clientX,
                y: touch1.clientY,
            };

            const p2: Vector2d = {
                x: touch2.clientX,
                y: touch2.clientY,
            };

            if (!lastCenter) {
                lastCenter = getCenter(p1, p2);
                // return;
            }

            const newCenter = getCenter(p1, p2);

            const dist = getDistance(p1, p2);

            if (!lastDist) {
                lastDist = dist;
            }
            
            // local coordinates of center point
            const pointTo: Vector2d = {
                x: (newCenter.x - stage.x()) / stage.scaleX(),
                y: (newCenter.y - stage.y()) / stage.scaleX(),
            }

            const scale = stage.scaleX() * (dist / lastDist);
            
            stage.scale({ x: scale, y: scale });

            // calculate new position of the stage
            const dx = newCenter.x - lastCenter.x;
            const dy = newCenter.y - lastCenter.y;

            const newPos: Vector2d = {
                x: newCenter.x - pointTo.x * scale + dx,
                y: newCenter.y - pointTo.y * scale + dy,
            };

            stage.position(newPos);
            lastDist = dist;
            lastCenter = newCenter;
            updateImageSetByScale({ scaleX: stage.scaleX(), dispatch });
        }
    }

    const onTouchEnd = () => {
        lastDist = 0;
        lastCenter = null;
    }

    return (
        <div ref={targetRef} className="fullScreener">
            <Stage width={curWidth} height={curHeight} draggable onWheel={onStageWheel} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                <Layer>
                    <Tileset />
                </Layer>
            </Stage>
        </div>
    )
};

export default Mosaic2Canvas;