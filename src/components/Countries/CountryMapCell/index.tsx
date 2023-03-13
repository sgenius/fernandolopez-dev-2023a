import React from 'react';
import CountryMap from '../CountryMap';
import FullSizer from '@/components/FullSizer';

interface Props {
    className: string;
    code: string;
}

const CountryMapCell: React.FC<Props> = ({ className, code }) => (
    <FullSizer className={className}>
        {({ width, height }) => (
            <CountryMap code={code} width={width} height={height} />
        )}
    </FullSizer>
);

export default CountryMapCell;