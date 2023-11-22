export enum Size {
    XXS = 'XXS',
    XS = 'XS',
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL',
    XXL = 'XXL'
}

export function parseSize(size: 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'): Size {
    return Size[size];
}
