import { MOSAIC_DATA } from "../constants"
import { TileKey } from "../defs";

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