export const roundDec = (num: number, degree: number = 2) => Number.parseFloat(num.toFixed(degree));

export const largeNumberFormat = (num: number) => {
    if (num > 1000000) {
        return `${roundDec(num / 1000000)}M`;
    }
    return num;
}