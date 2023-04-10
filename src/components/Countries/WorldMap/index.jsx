import React from 'react';
import CustomSvgPaths from '../CustomSvgPaths';
import { worldMapPaths } from '../CustomSvgPaths/paths/worldMap';

const WorldMap = () => {
    return (
        <svg baseProfile="tiny" fill="#ececec" height="857" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".2" version="1.2" viewBox="0 0 2000 857" width="2000" xmlns="http://www.w3.org/2000/svg">
            <CustomSvgPaths svgPaths={worldMapPaths} />
            <circle cx="997.9" cy="189.1" id="0">
            </circle>
            <circle cx="673.5" cy="724.1" id="1">
            </circle>
            <circle cx="1798.2" cy="719.3" id="2">
            </circle>
        </svg>
    );
};


export default WorldMap;