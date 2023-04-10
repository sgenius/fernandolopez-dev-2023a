import React from 'react';

import { Image } from 'react-konva';
import useImage from 'use-image';
import { TileKey } from '../../../defs';
import { MOSAIC_DATA } from '../../../constants';

const Mosaic2Tile: React.FC<TileKey> = ({ xGrid, yGrid, imageSet }) => {
    const path = MOSAIC_DATA.imageSets[imageSet]?.path ?? '';
    const fullPath = `${path}${xGrid},${yGrid}.jpg`;
    const [image, status] = useImage(fullPath);

    const { pieceDimensions, bounds: {xMin, yMin, yMax} } = MOSAIC_DATA;
    const width = pieceDimensions.width * pieceDimensions.multiplier;
    const height = pieceDimensions.height * pieceDimensions.multiplier;

    const xRef = xGrid - xMin;
    const yRange = yMax - yMin;
    const yRef = yRange - yGrid + yMin;

    const x = width * xRef;
    const y = height * yRef;

    return status === 'loaded' ? (
        <Image
            image={image}
            alt={`tile at ${xGrid}, ${yGrid}`}
            width={width}
            height={height}
            x={x}
            y={y}
        />
    ) : null;
}

export default Mosaic2Tile;