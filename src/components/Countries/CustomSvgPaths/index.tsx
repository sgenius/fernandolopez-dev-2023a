import React from 'react';
import { SvgPath, Styling } from './defs';
import { getRandomColorStylings } from './helpers';

interface Props {
    svgPaths: SvgPath[];
}

const CustomSvgPaths: React.FC<Props> = ({ svgPaths }) => {
    const classesArr = svgPaths.map((path) => path.class);
    const originalClassesSet: Set<string | undefined> = new Set(classesArr);

    const stylings = getRandomColorStylings(originalClassesSet);

    const result = svgPaths.map((path) => {
        const styling: Styling | null | undefined = path.class ? stylings.get(path.class) : null;
        return (
            <path
                d={path.d}
                id={path.id}
                className={`${path.class} ${styling?.addedClasses}`}
                key={path.d}
                color={styling && styling.addedStyles && styling.addedStyles.color ? styling.addedStyles.color : undefined}
            />
        );
    });

    return (
        <>
            {result}
        </>
    );
}

export default CustomSvgPaths;