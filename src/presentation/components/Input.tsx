/**
 * Presentation Layer - Input Component
 * Campo de entrada personalizado con validación
 */

import React, { useState } from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    TextInputProps,
    ViewStyle,
} from 'react-native';
import { theme } from '../theme';

interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
    helperText?: string;
    containerStyle?: ViewStyle;
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    helperText,
    containerStyle,
    ...textInputProps
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={[styles.container, containerStyle]}>
            {label && <Text style={styles.label}>{label}</Text>}

            <TextInput
                style={[
                    styles.input,
                    isFocused && styles.inputFocused,
                    error && styles.inputError,
                ]}
                placeholderTextColor={theme.colors.textDisabled}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                {...textInputProps}
            />

            {error && <Text style={styles.errorText}>{error}</Text>}
            {helperText && !error && <Text style={styles.helperText}>{helperText}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: theme.spacing.md,
    },
    label: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textSecondary,
        marginBottom: theme.spacing.xs,
        fontWeight: theme.typography.weights.medium,
    },
    input: {
        height: 48,
        borderWidth: 1,
        borderColor: theme.colors.inputBorder,
        borderRadius: theme.borderRadius.sm,
        paddingHorizontal: theme.spacing.md,
        fontSize: theme.typography.sizes.base,
        color: theme.colors.textPrimary,
        backgroundColor: theme.colors.inputBackground,
    },
    inputFocused: {
        borderWidth: 2,
        borderColor: theme.colors.inputFocus,
    },
    inputError: {
        borderWidth: 2,
        borderColor: theme.colors.inputError,
    },
    errorText: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.error,
        marginTop: theme.spacing.xs,
    },
    helperText: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textSecondary,
        marginTop: theme.spacing.xs,
    },
});
