import { Styling } from './defs';

const getRandomHexPair = () => {
    const num = Math.floor(Math.random() * 256);
    const str = `${num}`;
    return Number.parseInt(str, 16);
}

export const getRandomColorStylings = (classes: Set<string | undefined>): Map<string, Styling> => {
    const classesArr: (string | undefined)[] = Array.from(classes);
    const result = new Map<string, Styling>();
    classesArr.forEach((className) => {
        if (className !== undefined) {
            const color = `#{${getRandomHexPair()}${getRandomHexPair()}${getRandomHexPair()}}`;
            result.set(className, {
                originalClass: className,
                addedClasses: [],
                addedStyles: {
                    color,
                },
            });
        }
    });
    return result;
}