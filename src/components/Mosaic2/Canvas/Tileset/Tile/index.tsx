import React from 'react';

import { Image } from 'react-konva';
import useImage from 'use-image';
import { TileKey } from '../../../defs';
import { MOSAIC_DATA } from '../../../constants';

const Mosaic2Tile: React.FC<TileKey> = ({ xGrid, yGrid, imageSet }) => {
    const path = MOSAIC_DATA.imageSets[imageSet]?.path ?? '';
    const fullPath = `${path}${xGrid},${yGrid}.jpg`;
    const [image, status] = useImage(fullPath);

    return status === 'loaded' ? (
        <Image image={image} alt={`tile at ${xGrid}, ${yGrid}`} />
    ) : null;
}

export default Mosaic2Tile;