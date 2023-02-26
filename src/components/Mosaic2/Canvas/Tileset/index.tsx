import React from 'react';
import Tile from './Tile';
import { getPieceKeyArray } from '../helpers';
import { useMosaic2State } from '../../context';

const Mosaic2Tileset: React.FC = () => {
    const { state: { currentImageSet } } = useMosaic2State();

    const pieceKeyArray = getPieceKeyArray(currentImageSet);

    const tiles = pieceKeyArray.map(({ xGrid, yGrid, imageSet }) => (
        <Tile xGrid={xGrid} yGrid={yGrid} imageSet={imageSet} key={`tile-${xGrid}-${yGrid}-${imageSet}`} />
    ));
    
    return (
        <>
            {tiles}
        </>
    );
};

export default Mosaic2Tileset;

