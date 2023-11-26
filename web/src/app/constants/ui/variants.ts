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

export enum TextFieldVariant {
    clean = 'clean',
    outlined = 'outlined',
    fill = 'fill'
}

export function castTextFieldVariant(variant: keyof typeof TextFieldVariant): TextFieldVariant {
    return variant as TextFieldVariant;
}

export enum TextFieldType {
    oneline = 'oneline',
    multiline = 'multiline'
}

export function castTextFieldType(variant: keyof typeof TextFieldType): TextFieldType {
    return variant as TextFieldType;
}
