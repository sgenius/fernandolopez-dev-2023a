export interface SvgPath {
    class?: string;
    id?: string;
    name?: string;
    d: string;
}

export interface Styling {
    originalClass: string;
    addedClasses: string[];
    addedStyles?: {
        color?: string;
    }
}