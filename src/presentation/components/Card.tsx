/**
 * Presentation Layer - Card Component
 * Tarjeta reutilizable para mostrar información
 */

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';
import { theme } from '../theme';

interface CardProps {
    children: React.ReactNode;
    title?: string;
    onPress?: () => void;
    style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({
    children,
    title,
    onPress,
    style,
}) => {
    const ContainerComponent: any = onPress ? TouchableOpacity : View;

    return (
        <ContainerComponent
            style={[styles.card, style]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            {title && <Text style={styles.title}>{title}</Text>}
            {children}
        </ContainerComponent>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: theme.colors.cardBackground,
        borderRadius: theme.borderRadius.lg,
        padding: theme.spacing.md,
        ...theme.shadows.sm,
        marginBottom: theme.spacing.md,
    },
    title: {
        fontSize: theme.typography.styles.h3.fontSize,
        fontWeight: theme.typography.styles.h3.fontWeight,
        color: theme.colors.textPrimary,
        marginBottom: theme.spacing.sm,
    },
});
