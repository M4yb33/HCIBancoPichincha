/**
 * Paleta de colores oficial del Banco Pichincha
 * Basada en el sistema de diseño de la banca móvil actual
 * Optimizada para accesibilidad y contraste WCAG AA
 */
export const colors = {
    // Colores Primarios (Banco Pichincha)
    primary: '#003DA5',        // Azul corporativo (confianza, profesionalismo)
    primaryDark: '#002970',    // Azul más oscuro para estados pressed y tabs activos
    primaryLight: '#0052D9',   // Azul más claro para estados hover
    accent: '#FFD100',         // Amarillo corporativo (energía, optimismo)
    accentDark: '#E6BC00',     // Amarillo oscuro para hover

    // Colores Funcionales
    success: '#4CAF50',        // Verde - confirmaciones, pagos exitosos
    successLight: '#81C784',   // Verde claro
    warning: '#FF9800',        // Naranja - alertas importantes
    warningLight: '#FFB74D',   // Naranja claro
    error: '#F44336',          // Rojo - errores críticos
    errorLight: '#E57373',     // Rojo claro
    info: '#2196F3',           // Azul claro - mensajes informativos
    teal: '#009688',           // Verde azulado - badges NUEVO

    // Colores Neutros (mejorados para mejor contraste)
    textPrimary: '#1A1A1A',    // Negro más suave
    textSecondary: '#666666',  // Gris medio oscuro (mejor contraste)
    textDisabled: '#BDBDBD',   // Gris claro para texto deshabilitado
    textLight: '#999999',      // Gris claro

    // Fondos (gradientes suaves)
    background: '#FFFFFF',     // Blanco puro
    backgroundGray: '#F5F5F5', // Gris muy claro
    backgroundLight: '#FAFAFA',// Casi blanco
    backgroundDark: '#121212', // Modo oscuro (si se implementa)

    // Bordes y Divisores (más suaves)
    border: '#E0E0E0',         // Gris claro
    borderLight: '#F0F0F0',    // Gris muy claro
    divider: '#EEEEEE',        // Divisor suave

    // Overlays y Sombras
    overlay: 'rgba(0, 0, 0, 0.5)',
    overlayLight: 'rgba(0, 0, 0, 0.3)',
    shadowLight: 'rgba(0, 0, 0, 0.08)',
    shadowMedium: 'rgba(0, 0, 0, 0.15)',
    shadowDark: 'rgba(0, 0, 0, 0.25)',

    // Estados de inputs (mejorados)
    inputBackground: '#FFFFFF',
    inputBorder: '#E0E0E0',
    inputFocus: '#003DA5',
    inputError: '#F44336',
    inputSuccess: '#4CAF50',
    inputDisabled: '#F5F5F5',

    // Tarjetas y superficies
    cardBackground: '#FFFFFF',
    cardShadow: 'rgba(0, 61, 165, 0.08)',
    cardHover: '#FAFAFA',

    // Tabs (específicos para Banco Pichincha)
    tabActive: '#002970',      // Azul oscuro
    tabInactive: '#E8E8E8',    // Gris claro
    tabTextActive: '#FFFFFF',  // Blanco
    tabTextInactive: '#666666',// Gris oscuro

    // Gradientes (para efectos especiales)
    gradientStart: '#003DA5',
    gradientEnd: '#0052D9',

    // Transparencias (para estados)
    transparent: 'transparent',
    white: '#FFFFFF',
    black: '#000000',
};

export type ColorKeys = keyof typeof colors;
