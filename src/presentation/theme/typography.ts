/**
 * Sistema de tipografía basado en las mejores prácticas de accesibilidad
 * y las especificaciones del Banco Pichincha
 */
export const typography = {
    // Tamaños base
    sizes: {
        xs: 12,
        sm: 14,
        base: 16,
        lg: 18,
        xl: 20,
        '2xl': 24,
        '3xl': 28,
        '4xl': 32,
        '5xl': 40,
    },

    // Pesos
    weights: {
        regular: '400' as const,
        medium: '500' as const,
        semibold: '600' as const,
        bold: '700' as const,
    },

    // Alturas de línea
    lineHeights: {
        tight: 1.2,
        normal: 1.5,
        relaxed: 1.75,
    },

    // Familias tipográficas (nativas del sistema)
    families: {
        ios: 'San Francisco',
        android: 'Roboto',
        default: 'System',
    },

    // Estilos predefinidos
    styles: {
        h1: {
            fontSize: 28,
            fontWeight: '700' as const,
            lineHeight: 1.2,
        },
        h2: {
            fontSize: 20,
            fontWeight: '600' as const,
            lineHeight: 1.3,
        },
        h3: {
            fontSize: 18,
            fontWeight: '600' as const,
            lineHeight: 1.4,
        },
        body: {
            fontSize: 16,
            fontWeight: '400' as const,
            lineHeight: 1.5,
        },
        bodyMedium: {
            fontSize: 16,
            fontWeight: '500' as const,
            lineHeight: 1.5,
        },
        button: {
            fontSize: 18,
            fontWeight: '600' as const,
            lineHeight: 1.2,
        },
        caption: {
            fontSize: 14,
            fontWeight: '400' as const,
            lineHeight: 1.4,
        },
        amount: {
            fontSize: 32,
            fontWeight: '700' as const,
            lineHeight: 1.2,
        },
    },

    // Modo adulto mayor (tamaños ampliados)
    elderMode: {
        h1: 32,
        body: 20,
        button: 22,
        amount: 40,
    },
};

export type TypographySize = keyof typeof typography.sizes;
export type TypographyWeight = keyof typeof typography.weights;
