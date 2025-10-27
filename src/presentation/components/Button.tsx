/**
 * Presentation Layer - Reusable Components
 * Componente Button siguiendo el diseño del Banco Pichincha
 */

import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ActivityIndicator,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { theme } from '../theme';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'text';
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    disabled = false,
    loading = false,
    fullWidth = false,
    style,
}) => {
    const buttonStyles = [
        styles.button,
        variant === 'primary' && styles.primaryButton,
        variant === 'secondary' && styles.secondaryButton,
        variant === 'text' && styles.textButton,
        disabled && styles.disabledButton,
        fullWidth && styles.fullWidth,
        style,
    ];

    const textStyles = [
        styles.text,
        variant === 'primary' && styles.primaryText,
        variant === 'secondary' && styles.secondaryText,
        variant === 'text' && styles.textButtonText,
        disabled && styles.disabledText,
    ];

    return (
        <TouchableOpacity
            style={buttonStyles}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.8}
        >
            {loading ? (
                <ActivityIndicator
                    color={variant === 'primary' ? theme.colors.white : theme.colors.primary}
                />
            ) : (
                <Text style={textStyles}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        minHeight: theme.touchableSize.minimum,
        paddingVertical: theme.spacing.md,
        paddingHorizontal: theme.spacing.xl,
        borderRadius: theme.borderRadius.md,
        alignItems: 'center',
        justifyContent: 'center',
        ...theme.shadows.sm,
    },
    primaryButton: {
        backgroundColor: theme.colors.primary,
    },
    secondaryButton: {
        backgroundColor: theme.colors.white,
        borderWidth: 2,
        borderColor: theme.colors.primary,
    },
    textButton: {
        backgroundColor: 'transparent',
        shadowOpacity: 0,
        elevation: 0,
    },
    disabledButton: {
        backgroundColor: theme.colors.textDisabled,
        shadowOpacity: 0,
        elevation: 0,
    },
    fullWidth: {
        width: '100%',
    },
    text: {
        fontSize: theme.typography.styles.button.fontSize,
        fontWeight: theme.typography.styles.button.fontWeight,
    },
    primaryText: {
        color: theme.colors.white,
    },
    secondaryText: {
        color: theme.colors.primary,
    },
    textButtonText: {
        color: theme.colors.primary,
    },
    disabledText: {
        color: theme.colors.white,
        opacity: 0.7,
    },
});
