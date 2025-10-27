/**
 * Payment Screen - Pantalla de Pago EMAPA
 * Flujo completo de pago de servicios adaptado para todas las edades
 * Basado en el diseño real de Banco Pichincha
 */

import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    Animated,
} from 'react-native';
import { theme } from '../theme';
import { Card } from '../components';

type PaymentStep = 'categories' | 'companies' | 'inputAccount' | 'billDetails' | 'success';

interface Company {
    name: string;
    icon: string;
    category: string;
    fullName: string;
}

const COMPANIES: Company[] = [
    { name: 'ep-emapa-a', fullName: 'EP-EMAPA-A (Empresa Pública Municipal de Agua Potable y Alcantarillado de Ambato)', icon: '💧', category: 'Agua Potable - Agua' },
    { name: 'agua potable quito - epmaps - up', fullName: 'Agua Potable Quito - EPMAPS - UP', icon: '💧', category: 'Agua Potable - Agua' },
    { name: 'agua potable alcantarillado y aseo de machala trip', fullName: 'Agua Potable Alcantarillado y Aseo de Machala Trip', icon: '💧', category: 'Agua Potable - Agua' },
    { name: 'agua potable de baños cuenca', fullName: 'Agua Potable de Baños Cuenca', icon: '💧', category: 'Agua Potable - Agua' },
    { name: 'agua potable esmeraldas epmaps', fullName: 'Agua Potable Esmeraldas EPMAPS', icon: '💧', category: 'Agua Potable - Agua' },
];

interface BillData {
    amount: string;
    period: string;
    dueDate: string;
    consumption: string;
}

interface PaymentScreenProps {
    onBack?: () => void;
}

export const PaymentScreen: React.FC<PaymentScreenProps> = ({ onBack }) => {
    const scrollViewRef = useRef<ScrollView>(null);
    const [step, setStep] = useState<PaymentStep>('categories');
    const [searchText, setSearchText] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
    const [billData, setBillData] = useState<BillData>({
        amount: '23.45',
        period: 'Octubre 2025',
        dueDate: '28 Oct 2025',
        consumption: '45 m³'
    });

    // Estados para el conteo regresivo y verificación
    const [isVerifying, setIsVerifying] = useState(false);
    const [countdown, setCountdown] = useState(5);
    const [canPay, setCanPay] = useState(false);
    const spinValue = useRef(new Animated.Value(0)).current;

    // Scroll al inicio cuando cambia el step
    useEffect(() => {
        scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    }, [step]);

    // Efecto para la verificación de datos
    useEffect(() => {
        if (step === 'billDetails') {
            // Resetear todos los estados
            setIsVerifying(true);
            setCanPay(false);
            setCountdown(5);

            // Iniciar animación
            spinValue.setValue(0);
            Animated.loop(
                Animated.timing(spinValue, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                })
            ).start();

            // Conteo regresivo con setTimeout
            setTimeout(() => setCountdown(4), 1000);
            setTimeout(() => setCountdown(3), 2000);
            setTimeout(() => setCountdown(2), 3000);
            setTimeout(() => setCountdown(1), 4000);
            setTimeout(() => {
                setIsVerifying(false);
                setCanPay(true);
                setCountdown(0);
            }, 5000);
        }
    }, [step]); const handleBackToHome = () => {
        if (step === 'companies') {
            setStep('categories');
            setSearchText('');
        } else if (step === 'inputAccount') {
            setStep('companies');
        } else if (step === 'billDetails') {
            setStep('inputAccount');
        } else if (step === 'success') {
            // Volver al home
            if (onBack) {
                onBack();
            } else {
                // Reset completo si no hay callback
                setStep('categories');
                setAccountNumber('');
                setSearchText('');
                setSelectedCompany(null);
            }
        } else {
            // Volver al home desde categorías
            if (onBack) {
                onBack();
            }
        }
    };

    const handleSelectCategory = (category: string) => {
        setStep('companies');
    };

    const handleSelectCompany = (company: Company) => {
        setSelectedCompany(company);
        setStep('inputAccount');
    };

    const handleConsultBill = () => {
        if (accountNumber.length >= 4) {
            // Simular consulta de planilla
            setStep('billDetails');
        }
    };

    const handleConfirmPayment = () => {
        if (canPay) {
            // Procesar pago directamente
            setStep('success');
        }
    };

    // Función para validar solo números en el campo de cuenta
    const handleAccountNumberChange = (text: string) => {
        // Filtrar solo números
        const numericText = text.replace(/[^0-9]/g, '');
        setAccountNumber(numericText);
    };

    const filteredCompanies = COMPANIES.filter(company =>
        company.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBackToHome} style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>
                    {step === 'categories' ? 'Pago de servicios' :
                        step === 'companies' ? 'Agua' :
                            step === 'inputAccount' ? 'Datos de pago' :
                                step === 'billDetails' ? 'Confirmar pago' :
                                    'Pago exitoso'}
                </Text>
            </View>

            <ScrollView ref={scrollViewRef} style={styles.scrollView}>
                {/* PASO 1: Categorías destacadas */}
                {step === 'categories' && (
                    <View style={styles.content}>
                        {/* Buscador */}
                        <View style={styles.searchContainer}>
                            <Text style={styles.searchIcon}>🔍</Text>
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Escribe el nombre de la empresa"
                                placeholderTextColor="#999"
                                value={searchText}
                                onChangeText={setSearchText}
                            />
                        </View>

                        {/* Categorías destacadas */}
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Categorías destacadas</Text>
                            <TouchableOpacity>
                                <Text style={styles.seeAllLink}>Ver todas →</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.categoriesGrid}>
                            <TouchableOpacity
                                style={styles.categoryCard}
                                onPress={() => handleSelectCategory('Agua Potable')}
                            >
                                <View style={styles.categoryIcon}>
                                    <Text style={styles.categoryEmoji}>💧</Text>
                                </View>
                                <Text style={styles.categoryText}>Agua{'\n'}Potable</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.categoryCard}>
                                <View style={styles.categoryIcon}>
                                    <Text style={styles.categoryEmoji}>💡</Text>
                                </View>
                                <Text style={styles.categoryText}>Electricidad</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.categoryCard}>
                                <View style={styles.categoryIcon}>
                                    <Text style={styles.categoryEmoji}>🧾</Text>
                                </View>
                                <Text style={styles.categoryText}>Sri</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Pagos favoritos */}
                        <View style={styles.favoritesSection}>
                            <View style={styles.favoritesHeader}>
                                <Text style={styles.favoritesTitle}>Pagos favoritos ⭐</Text>
                            </View>
                            <View style={styles.emptyFavorites}>
                                <TouchableOpacity style={styles.addButton}>
                                    <Text style={styles.addIcon}>+</Text>
                                </TouchableOpacity>
                                <Text style={styles.emptyText}>Aún no tienes favoritos</Text>
                                <Text style={styles.emptySubtext}>
                                    Agrega tus pagos frecuentes y págalos más fácilmente.
                                </Text>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.addFavoriteButton}>
                            <Text style={styles.addFavoriteIcon}>+</Text>
                            <Text style={styles.addFavoriteText}>Agregar favorito</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {/* PASO 2: Lista de empresas de Agua */}
                {step === 'companies' && (
                    <View style={styles.content}>
                        {/* Buscador */}
                        <View style={styles.searchContainer}>
                            <Text style={styles.searchIcon}>🔍</Text>
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Escribe el nombre de la empresa"
                                placeholderTextColor="#999"
                                value={searchText}
                                onChangeText={setSearchText}
                            />
                        </View>

                        {/* Lista de empresas */}
                        <View style={styles.companiesList}>
                            {filteredCompanies.map((company, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.companyItem}
                                    onPress={() => handleSelectCompany(company)}
                                >
                                    <View style={styles.companyLeft}>
                                        <Text style={styles.companyTitle}>{company.name}</Text>
                                        <Text style={styles.companySubtitle}>{company.category}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                )}

                {/* PASO 3: Ingresar número de suministro */}
                {step === 'inputAccount' && (
                    <View style={styles.content}>
                        {/* Empresa seleccionada */}
                        <View style={styles.selectedCompany}>
                            <View style={styles.companyIconLarge}>
                                <Text style={styles.companyEmojiLarge}>{selectedCompany?.icon}</Text>
                            </View>
                            <Text style={styles.selectedCompanyName}>{selectedCompany?.name}</Text>
                            <Text style={styles.selectedCompanyCategory}>{selectedCompany?.category}</Text>
                        </View>

                        {/* Servicio (solo lectura) */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Servicio</Text>
                            <View style={styles.readOnlyInput}>
                                <Text style={styles.readOnlyText}>{selectedCompany?.name}</Text>
                            </View>
                        </View>

                        {/* Número de suministro */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Número de suministro:</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Ingresa tu número de cuenta (solo números)"
                                placeholderTextColor="#999"
                                value={accountNumber}
                                onChangeText={handleAccountNumberChange}
                                keyboardType="numeric"
                                maxLength={12}
                            />
                        </View>

                        {/* Agregar a favoritos */}
                        <TouchableOpacity style={styles.favoriteCheckbox}>
                            <View style={styles.checkbox} />
                            <Text style={styles.checkboxLabel}>⭐ Agregar a favoritos</Text>
                        </TouchableOpacity>

                        {/* Botón siguiente */}
                        <TouchableOpacity
                            style={[
                                styles.nextButton,
                                accountNumber.length < 4 && styles.nextButtonDisabled
                            ]}
                            onPress={handleConsultBill}
                            disabled={accountNumber.length < 4}
                        >
                            <Text style={styles.nextButtonText}>Siguiente</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {/* PASO 4: Detalle de la planilla */}
                {step === 'billDetails' && (
                    <View style={styles.content}>
                        {/* Empresa seleccionada */}
                        <View style={styles.billHeader}>
                            <View style={styles.companyIconLarge}>
                                <Text style={styles.companyEmojiLarge}>{selectedCompany?.icon}</Text>
                            </View>
                            <Text style={styles.billCompanyName}>{selectedCompany?.fullName}</Text>
                            <Text style={styles.billAccountNumber}>Cuenta: {accountNumber}</Text>
                        </View>

                        {/* Detalles de la planilla */}
                        <Card style={styles.billCard}>
                            <Text style={styles.billCardTitle}>Detalle del Servicio</Text>

                            <View style={styles.billDetailRow}>
                                <Text style={styles.billDetailLabel}>Período:</Text>
                                <Text style={styles.billDetailValue}>{billData.period}</Text>
                            </View>

                            <View style={styles.billDetailRow}>
                                <Text style={styles.billDetailLabel}>Consumo:</Text>
                                <Text style={styles.billDetailValue}>{billData.consumption}</Text>
                            </View>

                            <View style={styles.billDetailRow}>
                                <Text style={styles.billDetailLabel}>Fecha límite:</Text>
                                <Text style={styles.billDetailValueAlert}>{billData.dueDate}</Text>
                            </View>

                            <View style={styles.billDivider} />

                            <View style={styles.billTotalRow}>
                                <Text style={styles.billTotalLabel}>Total a pagar:</Text>
                                <Text style={styles.billTotalAmount}>${billData.amount}</Text>
                            </View>
                        </Card>

                        {/* Estado de verificación */}
                        {isVerifying && (
                            <Card style={styles.verificationCard}>
                                <View style={styles.verificationHeader}>
                                    <View style={styles.loadingSpinner}>
                                        <Animated.Text
                                            style={[
                                                styles.loadingSpinnerText,
                                                {
                                                    transform: [{
                                                        rotate: spinValue.interpolate({
                                                            inputRange: [0, 1],
                                                            outputRange: ['0deg', '360deg']
                                                        })
                                                    }]
                                                }
                                            ]}
                                        >
                                            ⟳
                                        </Animated.Text>
                                    </View>
                                    <Text style={styles.verificationTitle}>
                                        Verificando los datos del servicio...
                                    </Text>
                                </View>
                            </Card>
                        )}

                        {/* Botón Confirmar y Pagar */}
                        <TouchableOpacity
                            style={[
                                styles.confirmPayButton,
                                !canPay && styles.payButtonDisabled
                            ]}
                            onPress={handleConfirmPayment}
                            disabled={!canPay}
                        >
                            <Text style={[
                                styles.confirmPayButtonText,
                                !canPay && styles.payButtonTextDisabled
                            ]}>
                                {isVerifying ? `Espere... ${countdown}s` : 'Confirmar y Pagar'}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={() => {
                                setIsVerifying(false);
                                setCanPay(false);
                                setStep('inputAccount');
                            }}
                        >
                            <Text style={styles.cancelButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {/* PASO 5: Éxito */}
                {step === 'success' && (
                    <View style={styles.successContent}>
                        <View style={styles.successIcon}>
                            <Text style={styles.successEmoji}>✅</Text>
                        </View>
                        <Text style={styles.successTitle}>¡Pago registrado exitosamente!</Text>
                        <Text style={styles.successMessage}>
                            Tu pago de agua potable ha sido procesado correctamente
                        </Text>

                        <Card style={styles.receiptCard}>
                            <Text style={styles.receiptTitle}>Comprobante de Pago</Text>
                            <View style={styles.receiptRow}>
                                <Text style={styles.receiptLabel}>Empresa:</Text>
                                <Text style={styles.receiptValue}>{selectedCompany?.name}</Text>
                            </View>
                            <View style={styles.receiptRow}>
                                <Text style={styles.receiptLabel}>Cuenta:</Text>
                                <Text style={styles.receiptValue}>****{accountNumber.slice(-4)}</Text>
                            </View>
                            <View style={styles.receiptRow}>
                                <Text style={styles.receiptLabel}>Monto:</Text>
                                <Text style={styles.receiptValue}>$23.45</Text>
                            </View>
                            <View style={styles.receiptRow}>
                                <Text style={styles.receiptLabel}>Fecha:</Text>
                                <Text style={styles.receiptValue}>23 Oct 2025, 09:54</Text>
                            </View>
                            <View style={styles.receiptRow}>
                                <Text style={styles.receiptLabel}>N° Transacción:</Text>
                                <Text style={styles.receiptValue}>#TRX-2025-001234</Text>
                            </View>
                        </Card>

                        <TouchableOpacity
                            style={styles.downloadButton}
                            onPress={handleBackToHome}
                        >
                            <Text style={styles.downloadButtonText}>Volver al inicio</Text>
                        </TouchableOpacity>
                    </View>
                )}

                <View style={{ height: 100 }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    scrollView: {
        flex: 1,
    },
    header: {
        backgroundColor: theme.colors.white,
        paddingTop: 16,
        paddingBottom: 16,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        padding: 8,
        marginRight: 12,
    },
    backIcon: {
        fontSize: 28,
        color: theme.colors.textPrimary,
        fontWeight: '600',
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: theme.colors.textPrimary,
        flex: 1,
    },
    content: {
        padding: 20,
    },

    // PASO 1: Categorías
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        marginBottom: 24,
        ...theme.shadows.sm,
    },
    searchIcon: {
        fontSize: 22,
        marginRight: 12,
    },
    searchInput: {
        flex: 1,
        fontSize: 17,
        color: theme.colors.textPrimary,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: theme.colors.textPrimary,
    },
    seeAllLink: {
        fontSize: 16,
        color: theme.colors.primary,
        fontWeight: '600',
    },
    categoriesGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32,
    },
    categoryCard: {
        flex: 1,
        backgroundColor: theme.colors.white,
        borderRadius: 16,
        padding: 20,
        marginHorizontal: 6,
        alignItems: 'center',
        ...theme.shadows.sm,
        minHeight: 140,
        justifyContent: 'center',
    },
    categoryIcon: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    categoryEmoji: {
        fontSize: 36,
    },
    categoryText: {
        fontSize: 15,
        fontWeight: '600',
        color: theme.colors.textPrimary,
        textAlign: 'center',
        lineHeight: 20,
    },
    favoritesSection: {
        marginTop: 8,
        marginBottom: 24,
    },
    favoritesHeader: {
        marginBottom: 16,
    },
    favoritesTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: theme.colors.textPrimary,
    },
    emptyFavorites: {
        backgroundColor: theme.colors.white,
        borderRadius: 16,
        padding: 32,
        alignItems: 'center',
        ...theme.shadows.sm,
    },
    addButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    addIcon: {
        fontSize: 32,
        color: '#999',
    },
    emptyText: {
        fontSize: 18,
        fontWeight: '600',
        color: theme.colors.textPrimary,
        marginBottom: 8,
    },
    emptySubtext: {
        fontSize: 15,
        color: theme.colors.textSecondary,
        textAlign: 'center',
        lineHeight: 22,
    },
    addFavoriteButton: {
        backgroundColor: theme.colors.primary,
        borderRadius: 50,
        paddingVertical: 18,
        paddingHorizontal: 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...theme.shadows.md,
        marginTop: 8,
    },
    addFavoriteIcon: {
        fontSize: 24,
        color: theme.colors.white,
        marginRight: 12,
        fontWeight: '600',
    },
    addFavoriteText: {
        fontSize: 18,
        fontWeight: '700',
        color: theme.colors.white,
    },

    // PASO 2: Lista de empresas
    companiesList: {
        marginTop: 8,
    },
    companyItem: {
        backgroundColor: theme.colors.white,
        borderRadius: 12,
        padding: 20,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        ...theme.shadows.sm,
    },
    companyLeft: {
        flex: 1,
    },
    companyTitle: {
        fontSize: 17,
        fontWeight: '600',
        color: theme.colors.textPrimary,
        marginBottom: 6,
    },
    companySubtitle: {
        fontSize: 15,
        color: theme.colors.textSecondary,
    },

    // PASO 3: Datos de pago
    selectedCompany: {
        alignItems: 'center',
        paddingVertical: 24,
        paddingHorizontal: 16,
        marginBottom: 24,
    },
    companyIconLarge: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    companyEmojiLarge: {
        fontSize: 48,
    },
    selectedCompanyName: {
        fontSize: 18,
        fontWeight: '700',
        color: theme.colors.textPrimary,
        textAlign: 'center',
        marginBottom: 6,
    },
    selectedCompanyCategory: {
        fontSize: 16,
        color: theme.colors.textSecondary,
    },
    inputGroup: {
        marginBottom: 24,
    },
    inputLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: theme.colors.textPrimary,
        marginBottom: 12,
    },
    readOnlyInput: {
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        padding: 18,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    readOnlyText: {
        fontSize: 16,
        color: theme.colors.textSecondary,
    },
    textInput: {
        backgroundColor: theme.colors.white,
        borderRadius: 12,
        padding: 18,
        fontSize: 17,
        color: theme.colors.textPrimary,
        borderWidth: 2,
        borderColor: '#E0E0E0',
    },
    favoriteCheckbox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 20,
        backgroundColor: theme.colors.white,
        borderRadius: 12,
        marginBottom: 24,
        ...theme.shadows.sm,
    },
    checkbox: {
        width: 26,
        height: 26,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#CCC',
        marginRight: 14,
    },
    checkboxLabel: {
        fontSize: 17,
        color: theme.colors.textPrimary,
        fontWeight: '500',
    },
    nextButton: {
        backgroundColor: theme.colors.accent, // Amarillo oficial
        borderRadius: 50,
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center',
        ...theme.shadows.md,
        marginTop: 8,
    },
    nextButtonDisabled: {
        backgroundColor: theme.colors.inputDisabled,
        opacity: 0.6,
    },
    nextButtonText: {
        fontSize: 19,
        fontWeight: '700',
        color: theme.colors.primary, // Azul corporativo
    },

    // PASO 4: Éxito
    successContent: {
        padding: 20,
        alignItems: 'center',
    },
    successIcon: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#E8F5E9',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    successEmoji: {
        fontSize: 56,
    },
    successTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: theme.colors.textPrimary,
        textAlign: 'center',
        marginBottom: 12,
    },
    successMessage: {
        fontSize: 17,
        color: theme.colors.textSecondary,
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 32,
        paddingHorizontal: 20,
    },
    receiptCard: {
        width: '100%',
        padding: 24,
        marginBottom: 24,
    },
    receiptTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: theme.colors.textPrimary,
        marginBottom: 20,
        textAlign: 'center',
    },
    receiptRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    receiptLabel: {
        fontSize: 16,
        color: theme.colors.textSecondary,
        fontWeight: '500',
    },
    receiptValue: {
        fontSize: 16,
        color: theme.colors.textPrimary,
        fontWeight: '600',
        textAlign: 'right',
        flex: 1,
        marginLeft: 16,
    },
    downloadButton: {
        backgroundColor: '#FFD100', // Amarillo oficial
        borderRadius: 50,
        paddingVertical: 18,
        paddingHorizontal: 48,
        alignItems: 'center',
        justifyContent: 'center',
        ...theme.shadows.md,
        width: '100%',
    },
    downloadButtonText: {
        fontSize: 19,
        fontWeight: '700',
        color: theme.colors.primary,
    },

    // PASO 4: Detalle de planilla
    billHeader: {
        alignItems: 'center',
        paddingVertical: 24,
        marginBottom: 24,
    },
    billCompanyName: {
        fontSize: 17,
        fontWeight: '700',
        color: theme.colors.textPrimary,
        textAlign: 'center',
        marginBottom: 8,
        marginTop: 12,
    },
    billAccountNumber: {
        fontSize: 15,
        color: theme.colors.textSecondary,
    },
    billCard: {
        padding: 24,
        marginBottom: 24,
    },
    billCardTitle: {
        fontSize: 19,
        fontWeight: '700',
        color: theme.colors.textPrimary,
        marginBottom: 20,
    },
    billDetailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.borderLight,
    },
    billDetailLabel: {
        fontSize: 16,
        color: theme.colors.textSecondary,
        fontWeight: '500',
    },
    billDetailValue: {
        fontSize: 16,
        color: theme.colors.textPrimary,
        fontWeight: '600',
    },
    billDetailValueAlert: {
        fontSize: 16,
        color: theme.colors.warning,
        fontWeight: '700',
    },
    billDivider: {
        height: 2,
        backgroundColor: theme.colors.borderLight,
        marginVertical: 16,
    },
    billTotalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 8,
    },
    billTotalLabel: {
        fontSize: 19,
        fontWeight: '700',
        color: theme.colors.textPrimary,
    },
    billTotalAmount: {
        fontSize: 28,
        fontWeight: '700',
        color: theme.colors.primary,
    },
    payButton: {
        backgroundColor: theme.colors.accent,
        borderRadius: 50,
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center',
        ...theme.shadows.md,
        marginBottom: 12,
    },
    payButtonText: {
        fontSize: 19,
        fontWeight: '700',
        color: theme.colors.primary,
    },
    cancelButton: {
        backgroundColor: theme.colors.backgroundGray,
        borderRadius: 50,
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: theme.colors.border,
    },
    cancelButtonText: {
        fontSize: 17,
        fontWeight: '600',
        color: theme.colors.textSecondary,
    },

    // PASO 5: Confirmación
    confirmHeader: {
        alignItems: 'center',
        paddingVertical: 24,
        marginBottom: 24,
    },
    confirmIcon: {
        fontSize: 56,
        marginBottom: 16,
    },
    confirmTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: theme.colors.textPrimary,
        marginBottom: 12,
    },
    confirmMessage: {
        fontSize: 16,
        color: theme.colors.textSecondary,
        textAlign: 'center',
        lineHeight: 24,
        paddingHorizontal: 20,
    },
    confirmCard: {
        padding: 24,
        marginBottom: 16,
    },
    confirmRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    confirmLabel: {
        fontSize: 15,
        color: theme.colors.textSecondary,
        fontWeight: '500',
    },
    confirmValue: {
        fontSize: 15,
        color: theme.colors.textPrimary,
        fontWeight: '600',
        textAlign: 'right',
        flex: 1,
        marginLeft: 16,
    },
    confirmValueSuccess: {
        fontSize: 15,
        color: '#4CAF50',
        fontWeight: '700',
        textAlign: 'right',
        flex: 1,
        marginLeft: 16,
    },
    confirmValueBold: {
        fontSize: 17,
        color: '#003DA5',
        fontWeight: '700',
        textAlign: 'right',
        flex: 1,
        marginLeft: 16,
    },
    securityMessage: {
        fontSize: 15,
        color: theme.colors.textSecondary,
        textAlign: 'center',
        marginBottom: 24,
        paddingHorizontal: 20,
        lineHeight: 22,
    },
    confirmPayButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 50,
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center',
        ...theme.shadows.md,
        marginBottom: 12,
    },
    confirmPayButtonText: {
        fontSize: 19,
        fontWeight: '700',
        color: theme.colors.white,
    },
    cancelConfirmButton: {
        backgroundColor: '#F44336',
        borderRadius: 50,
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center',
        ...theme.shadows.md,
    },
    cancelConfirmButtonText: {
        fontSize: 19,
        fontWeight: '700',
        color: theme.colors.white,
    },
    // Nuevos estilos para la verificación
    verificationCard: {
        backgroundColor: theme.colors.white,
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
        alignItems: 'center',
        ...theme.shadows.sm,
    },
    verificationHeader: {
        alignItems: 'center',
    },
    loadingSpinner: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#E3F2FD',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    loadingSpinnerText: {
        fontSize: 30,
        color: theme.colors.primary,
        fontWeight: 'bold',
    },
    verificationTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: theme.colors.textPrimary,
        textAlign: 'center',
        marginBottom: 8,
    },
    countdownText: {
        fontSize: 16,
        fontWeight: '500',
        color: theme.colors.primary,
        textAlign: 'center',
    },
    payButtonDisabled: {
        backgroundColor: '#CCCCCC',
    },
    payButtonTextDisabled: {
        color: '#888888',
    },
});
