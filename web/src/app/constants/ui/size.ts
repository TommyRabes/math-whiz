export enum Size {
    xxs = 'xxs',
    xs = 'xs',
    s = 's',
    m = 'm',
    l = 'l',
    xl = 'xl',
    xxl = 'xxl'
}

export function castSize(size: keyof typeof Size): Size {
    return size as Size;
}
