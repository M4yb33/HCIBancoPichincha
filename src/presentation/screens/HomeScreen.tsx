/**
 * Presentation Layer - Home Screen
 * Pantalla principal estilo Banco Pichincha
 */

import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { theme } from '../theme';
import { Card } from '../components';
import { PaymentScreen } from './PaymentScreen';

export const HomeScreen: React.FC = () => {
    const scrollViewRef = useRef<ScrollView>(null);
    const [showPayment, setShowPayment] = useState(false);

    // Scroll al inicio cuando vuelve del pago
    useEffect(() => {
        if (!showPayment) {
            scrollViewRef.current?.scrollTo({ y: 0, animated: true });
        }
    }, [showPayment]);

    const handleBackFromPayment = () => {
        setShowPayment(false);
    };

    if (showPayment) {
        return <PaymentScreen onBack={handleBackFromPayment} />;
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Header del Banco Pichincha */}
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <View style={styles.logo}>
                        <View style={styles.logoBox}>
                            <Text style={styles.logoText}>P</Text>
                        </View>
                        <Text style={styles.bankName}>BANCO{'\n'}PICHINCHA</Text>
                    </View>
                    <TouchableOpacity style={styles.helpButton}>
                        <Text style={styles.helpIcon}>?</Text>
                        <Text style={styles.helpText}>Ayuda</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView ref={scrollViewRef} style={styles.scrollView}>
                {/* Banner promocional */}
                <Card style={styles.promoBanner}>
                    <View style={styles.promoContent}>
                        <View style={styles.promoImage}>
                            <Text style={styles.promoEmoji}>👩</Text>
                        </View>
                        <View style={styles.promoText}>
                            <Text style={styles.promoTitle}>Fácil, rápido y seguro</Text>
                            <Text style={styles.promoSubtitle}>
                                Con Banca Móvil gestiona tu banco donde quieras
                            </Text>
                            <TouchableOpacity>
                                <Text style={styles.promoLink}>Conocer más</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Card>

                {/* Mis productos */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Mis productos</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>Ver todos &gt;</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Tabs */}
                    <View style={styles.tabs}>
                        <TouchableOpacity style={styles.tabActive}>
                            <Text style={styles.tabTextActive}>Todos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tab}>
                            <Text style={styles.tabText}>Cuentas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tab}>
                            <Text style={styles.tabText}>Tarjetas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tab}>
                            <Text style={styles.tabText}>Préstamos</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Cuenta principal */}
                    <Card style={styles.accountCard}>
                        <View style={styles.accountHeader}>
                            <Text style={styles.accountNumber}>CUE173</Text>
                            <View style={styles.favoriteTag}>
                                <Text style={styles.starIcon}>⭐</Text>
                                <Text style={styles.favoriteText}>Cta. favorita</Text>
                            </View>
                        </View>
                        <Text style={styles.accountMasked}>*****0173</Text>
                        <View style={styles.accountBalance}>
                            <View>
                                <Text style={styles.balanceLabel}>Saldo disponible</Text>
                                <View style={styles.balanceRow}>
                                    <Text style={styles.balanceAmount}>$241.85</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.eyeIcon}>👁</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={styles.accountType}>Cuenta{'\n'}Transaccional</Text>
                        </View>
                    </Card>

                    <Text style={styles.pageIndicator}>1 de 1</Text>
                </View>

                {/* ¿Qué quieres hacer? */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>¿Qué quieres hacer?</Text>

                    <View style={styles.actionsGrid}>
                        {/* Fila 1 */}
                        <View style={styles.actionsRow}>
                            <TouchableOpacity style={styles.actionCard}>
                                <View style={styles.actionBadge}>
                                    <Text style={styles.badgeText}>NUEVO</Text>
                                </View>
                                <Text style={styles.actionIcon}>💸</Text>
                                <Text style={styles.actionText}>Transferir{'\n'}dinero</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.actionCard}
                                onPress={() => setShowPayment(true)}
                            >
                                <Text style={styles.actionIcon}>💡</Text>
                                <Text style={styles.actionText}>Pagar{'\n'}servicios</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.actionCard}>
                                <Text style={styles.actionIcon}>📱</Text>
                                <Text style={styles.actionText}>Escanear o{'\n'}mostrar QR</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Fila 2 */}
                        <View style={styles.actionsRow}>
                            <TouchableOpacity style={styles.actionCard}>
                                <View style={styles.actionBadge}>
                                    <Text style={styles.badgeText}>NUEVO</Text>
                                </View>
                                <Text style={styles.actionIcon}>💰</Text>
                                <Text style={styles.actionText}>Recibir{'\n'}dinero</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.actionCard}>
                                <Text style={styles.actionIcon}>💳</Text>
                                <Text style={styles.actionText}>Pagar{'\n'}tarjetas</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.actionCard}>
                                <Text style={styles.actionIcon}>🏧</Text>
                                <Text style={styles.actionText}>Retirar{'\n'}sin tarjeta</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Espaciado inferior */}
                <View style={{ height: 80 }} />
            </ScrollView>

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItemActive}>
                    <Text style={styles.navIconActive}>🏠</Text>
                    <Text style={styles.navTextActive}>Inicio</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navIcon}>📊</Text>
                    <Text style={styles.navText}>Mis productos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navIcon}>🏛</Text>
                    <Text style={styles.navText}>Solicitudes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navIcon}>👤</Text>
                    <Text style={styles.navText}>Perfil</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        backgroundColor: theme.colors.accent, // Amarillo en lugar de azul
        paddingTop: theme.spacing.md,
        paddingBottom: theme.spacing.md,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: theme.spacing.md,
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoBox: {
        width: 40,
        height: 40,
        backgroundColor: theme.colors.primary, // Azul para el logo P
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.colors.accent, // Amarillo para la P
    },
    bankName: {
        fontSize: 12,
        fontWeight: 'bold',
        color: theme.colors.primary, // Azul oscuro para el texto del banco
        lineHeight: 14,
    },
    helpButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    helpIcon: {
        fontSize: 16,
        color: theme.colors.primary,
        marginRight: 6,
        fontWeight: 'bold',
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: theme.colors.primary,
        textAlign: 'center',
        textAlignVertical: 'center',
        lineHeight: 20,
    },
    helpText: {
        fontSize: 14,
        color: theme.colors.primary,
        fontWeight: '500',
        marginTop: 1, // Pequeño ajuste vertical para mejor alineación
    },
    scrollView: {
        flex: 1,
    },
    promoBanner: {
        margin: theme.spacing.md,
        padding: theme.spacing.md,
    },
    promoContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    promoImage: {
        width: 80,
        height: 80,
        marginRight: theme.spacing.md,
    },
    promoEmoji: {
        fontSize: 60,
    },
    promoText: {
        flex: 1,
    },
    promoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.textPrimary,
        marginBottom: 4,
    },
    promoSubtitle: {
        fontSize: 14,
        color: theme.colors.textSecondary,
        marginBottom: 8,
    },
    promoLink: {
        fontSize: 14,
        color: theme.colors.primary,
        fontWeight: '600',
    },
    section: {
        paddingHorizontal: theme.spacing.md,
        marginBottom: theme.spacing.lg,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing.md,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.textPrimary,
    },
    seeAll: {
        fontSize: 14,
        color: theme.colors.primary,
        fontWeight: '600',
    },
    tabs: {
        flexDirection: 'row',
        marginBottom: theme.spacing.md,
    },
    tabActive: {
        paddingVertical: theme.spacing.sm,
        paddingHorizontal: theme.spacing.md,
        backgroundColor: theme.colors.tabActive,
        borderRadius: 20,
        marginRight: theme.spacing.sm,
    },
    tab: {
        paddingVertical: theme.spacing.sm,
        paddingHorizontal: theme.spacing.md,
        backgroundColor: theme.colors.tabInactive,
        borderRadius: 20,
        marginRight: theme.spacing.sm,
    },
    tabTextActive: {
        fontSize: 14,
        fontWeight: '600',
        color: theme.colors.tabTextActive,
    },
    tabText: {
        fontSize: 14,
        fontWeight: '600',
        color: theme.colors.tabTextInactive,
    },
    accountCard: {
        padding: theme.spacing.md,
        marginBottom: theme.spacing.sm,
    },
    accountHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing.sm,
    },
    accountNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.textPrimary,
    },
    favoriteTag: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF9E6',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    starIcon: {
        fontSize: 12,
        marginRight: 4,
    },
    favoriteText: {
        fontSize: 12,
        color: '#F59E0B',
        fontWeight: '600',
    },
    accountMasked: {
        fontSize: 14,
        color: theme.colors.textSecondary,
        marginBottom: theme.spacing.sm,
    },
    accountBalance: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    balanceLabel: {
        fontSize: 12,
        color: theme.colors.textSecondary,
        marginBottom: 4,
    },
    balanceRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    balanceAmount: {
        fontSize: 28,
        fontWeight: 'bold',
        color: theme.colors.textPrimary,
        marginRight: 8,
    },
    eyeIcon: {
        fontSize: 20,
    },
    accountType: {
        fontSize: 12,
        color: theme.colors.textSecondary,
        textAlign: 'right',
    },
    pageIndicator: {
        textAlign: 'center',
        fontSize: 12,
        color: theme.colors.textSecondary,
        marginTop: theme.spacing.sm,
    },
    actionsGrid: {
        marginTop: theme.spacing.sm,
    },
    actionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: theme.spacing.md,
    },
    actionCard: {
        flex: 1,
        backgroundColor: theme.colors.white,
        borderRadius: 12,
        padding: theme.spacing.md,
        marginHorizontal: 4,
        alignItems: 'center',
        ...theme.shadows.sm,
        minHeight: 100,
        justifyContent: 'center',
    },
    actionBadge: {
        position: 'absolute',
        top: 4,
        right: 4,
        backgroundColor: theme.colors.teal,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    badgeText: {
        fontSize: 8,
        fontWeight: 'bold',
        color: theme.colors.white,
        letterSpacing: 0.5,
    },
    actionIcon: {
        fontSize: 32,
        marginBottom: 8,
    },
    actionText: {
        fontSize: 12,
        color: theme.colors.textPrimary,
        textAlign: 'center',
        fontWeight: '500',
    },
    bottomNav: {
        flexDirection: 'row',
        backgroundColor: theme.colors.white,
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        paddingVertical: 8,
        ...theme.shadows.md,
    },
    navItemActive: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 4,
        borderBottomWidth: 2,
        borderBottomColor: theme.colors.primary,
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 4,
    },
    navIconActive: {
        fontSize: 24,
        marginBottom: 4,
    },
    navIcon: {
        fontSize: 24,
        marginBottom: 4,
        opacity: 0.6,
    },
    navTextActive: {
        fontSize: 12,
        color: theme.colors.primary,
        fontWeight: '600',
    },
    navText: {
        fontSize: 12,
        color: theme.colors.textSecondary,
    },
});
