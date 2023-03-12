export const getTextWithCommasList = (textArr: string[]) =>
    textArr.map((item, index) =>
        index < textArr.length - 1 ? `${item}, ` : item
    );