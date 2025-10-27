import { colors } from './colors';
import { typography } from './typography';

/**
 * Sistema de espaciado consistente basado en múltiplos de 8px
 */
export const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 40,
    '3xl': 48,
    '4xl': 64,
};

/**
 * Border radius para componentes
 */
export const borderRadius = {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
};

/**
 * Elevaciones y sombras
 */
export const shadows = {
    sm: {
        shadowColor: colors.shadowLight,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    md: {
        shadowColor: colors.shadowMedium,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
    },
    lg: {
        shadowColor: colors.shadowDark,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
};

/**
 * Tamaños mínimos de áreas táctiles (accesibilidad)
 */
export const touchableSize = {
    minimum: 44,  // Mínimo recomendado (Apple HIG, Material Design)
    elder: 60,    // Para adultos mayores
};

/**
 * Theme completo del Banco Pichincha
 */
export const theme = {
    colors,
    typography,
    spacing,
    borderRadius,
    shadows,
    touchableSize,
};

export type Theme = typeof theme;
export type Spacing = keyof typeof spacing;
export type BorderRadius = keyof typeof borderRadius;
