import { KonvaEventObject } from 'konva/lib/Node';
import { MOSAIC_DATA } from "../constants"
import { Mosaic2Action } from "../context";
import { TileKey } from "../defs";
import { Vector2d } from 'konva/lib/types';

export const getPieceKeyArray = (currentImageSet: number): TileKey[]  => {
    const { bounds: { xMin, xMax, yMin, yMax } } = MOSAIC_DATA;
    const result: TileKey[] = [];

    for (let xGrid = xMin; xGrid <= xMax; xGrid += 1) {
        for (let yGrid = yMax; yGrid >= yMin; yGrid -= 1) {
            result.push({ xGrid, yGrid, imageSet: currentImageSet });
        }
    }
    return result;
}

interface UpdateImageSetByScaleParams {
    scaleX: number;
    dispatch: React.Dispatch<Mosaic2Action>;
}

// Check the current scale; set the appropiate image set for it.
export const updateImageSetByScale = ({ scaleX, dispatch }: UpdateImageSetByScaleParams) => {
    const { currentImageSet, imageSets } = MOSAIC_DATA;
    let newImageSet = currentImageSet;

    if (currentImageSet < imageSets.length - 1 && imageSets[currentImageSet + 1].minZoom < scaleX) {
        newImageSet += 1;
    }

    if (currentImageSet > 0 && imageSets[currentImageSet].minZoom > scaleX) {
        newImageSet -= 1;
    }

    if (newImageSet !== currentImageSet) {
        dispatch({ type: 'setCurrentImageSet', imageSet: newImageSet });
    }
}


interface OnStageWheelParams {
    evt: KonvaEventObject<WheelEvent>;
    dispatch: React.Dispatch<Mosaic2Action>;
}

// Zoom event handler.
// https://konvajs.org/docs/sandbox/Zooming_Relative_To_Pointer.html#
export const wheelHandler = ({ evt, dispatch }: OnStageWheelParams) => {
    const { scaleBy } = MOSAIC_DATA;
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
    updateImageSetByScale({ scaleX: stage.scaleX(), dispatch });
}

export const getDistance = (p1: Vector2d, p2: Vector2d): number => Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));

export const getCenter = (p1: Vector2d, p2: Vector2d): Vector2d => ({ x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 })