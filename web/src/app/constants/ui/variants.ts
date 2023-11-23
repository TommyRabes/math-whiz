export enum ButtonVariant {
    fill = 'fill',
    outlined = 'outlined',
    text = 'text',
}

export function castButtonVariant(variant: keyof typeof ButtonVariant): ButtonVariant {
    return variant as ButtonVariant;
}

export enum EdgeVariant {
    sharp = 'sharp',
    rounded = 'rounded'
}

export function castEdgeVariant(variant: keyof typeof EdgeVariant): EdgeVariant {
    return variant as EdgeVariant;
}