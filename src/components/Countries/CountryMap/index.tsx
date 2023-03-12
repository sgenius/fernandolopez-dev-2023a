"use client"
import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { GN_COUNTRIES_BY_CCA3 } from '../data/gnCountries';
import 'leaflet/dist/leaflet.css';

interface Props {
    code: string;
    width?: number;
    height?: number;
}

export const CountryMap: React.FC<Props> = ({ code, width = 728, height = 400 }) => {
    const { north, south, east, west } = GN_COUNTRIES_BY_CCA3[code];
    if (!window) {
        return null;
    }
    return (
        <div style={{ aspectRatio: width / height, height, width }}>
            <MapContainer bounds={[[north, west], [south, east]]} style={{ height, width }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
}

export default CountryMap;