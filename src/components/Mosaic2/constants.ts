export const MOSAIC_DATA = {
    bounds: {
        xMin: -3,
        xMax: 12,
        yMin: -17,
        yMax: 10,
    },
    pieceDimensions: {
        width: 5,
        height: 3,
        multiplier: 10,
    },
    pieces: {},
    imageSets: [
        {
            minZoom: 0,
            path: '/images/mosaic/thumb_',
        },
        {
            minZoom: 2.5,
            path: '/images/mosaic/',
        },  
    ],
    currentImageSet: 0,
    canvas: {
        zoomConfig: {
            step: 200,
            min: 0.5,
            max: 15,
        },
    },
    activeFilters: [],
    currentRef: null,
    scaleBy: 1.05,
};