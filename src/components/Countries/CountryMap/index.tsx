import React from 'react';
import { LatLngBoundsExpression } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet'
import { GN_COUNTRIES_BY_CCA3 } from '../data/gnCountries';
import 'leaflet/dist/leaflet.css';

interface Props {
    code: string;
    width?: number;
    height?: number;
}

export const CountryMap: React.FC<Props> = ({ code, width = 733, height = 400 }) => {
    const { north, south, east, west } = GN_COUNTRIES_BY_CCA3[code];
    if (!window) {
        return null;
    }
    const bounds: LatLngBoundsExpression = [[north, west], [south, east]];
    console.log('CountryMap > ', { code, bounds, width, height })
    return (
        <div style={{ aspectRatio: width / height, height, width }}>
            <MapContainer
                bounds={bounds}
                style={{ height, width }}
                zoomControl={false}
                doubleClickZoom={false}
                dragging={false}
                zoomDelta={0}
                keyboard={false}
                scrollWheelZoom={false}
                touchZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
}

export default CountryMap;