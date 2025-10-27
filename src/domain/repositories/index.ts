/**
 * Domain Layer - Repository Interfaces
 * Contratos que debe cumplir la capa de infraestructura
 * Implementación de programación funcional con tipos Either para manejo de errores
 */

import {
    User,
    BankAccount,
    ServiceCompany,
    PaymentAccount,
    Bill,
    Payment,
    PaymentReceipt,
    Transaction,
} from '../entities';

// Result type para programación funcional
export type Result<T, E = Error> =
    | { success: true; data: T }
    | { success: false; error: E };

export const success = <T>(data: T): Result<T> => ({ success: true, data });
export const failure = <E = Error>(error: E): Result<never, E> => ({ success: false, error });

// Auth Repository
export interface AuthRepository {
    login(email: string, password: string): Promise<Result<{ user: User; token: string }>>;
    loginWithBiometric(userId: string): Promise<Result<{ user: User; token: string }>>;
    logout(): Promise<Result<void>>;
    refreshToken(token: string): Promise<Result<string>>;
    verifySession(): Promise<Result<boolean>>;
}

// User Repository
export interface UserRepository {
    getProfile(): Promise<Result<User>>;
    updateProfile(user: Partial<User>): Promise<Result<User>>;
    getBankAccounts(): Promise<Result<BankAccount[]>>;
    getAccountBalance(accountId: string): Promise<Result<number>>;
}

// Service Repository
export interface ServiceRepository {
    getCompanies(): Promise<Result<ServiceCompany[]>>;
    searchCompany(query: string): Promise<Result<ServiceCompany[]>>;
    getRecentCompanies(): Promise<Result<ServiceCompany[]>>;
    getFavorites(): Promise<Result<PaymentAccount[]>>;
    addFavorite(account: PaymentAccount): Promise<Result<PaymentAccount>>;
    removeFavorite(accountId: string): Promise<Result<void>>;
}

// Payment Repository
export interface PaymentRepository {
    consultBill(companyId: string, accountNumber: string): Promise<Result<Bill>>;
    executePayment(
        billId: string,
        sourceAccountId: string,
        amount: number
    ): Promise<Result<Payment>>;
    getPaymentStatus(paymentId: string): Promise<Result<Payment>>;
    generateReceipt(paymentId: string): Promise<Result<PaymentReceipt>>;
    downloadReceipt(receiptId: string): Promise<Result<string>>; // returns PDF URL
    shareReceipt(receiptId: string, method: 'email' | 'sms'): Promise<Result<void>>;
}

// Transaction Repository
export interface TransactionRepository {
    getHistory(filters?: {
        from?: Date;
        to?: Date;
        companyId?: string;
        type?: string;
    }): Promise<Result<Transaction[]>>;
    getTransactionDetail(transactionId: string): Promise<Result<Transaction>>;
}

// Notification Entity (inline)
export interface AppNotification {
    id: string;
    title: string;
    message: string;
    type: 'info' | 'warning' | 'success' | 'payment_due';
    read: boolean;
    createdAt: Date;
}

// Notification Repository
export interface NotificationRepository {
    getNotifications(): Promise<Result<AppNotification[]>>;
    markAsRead(notificationId: string): Promise<Result<void>>;
    registerDevice(token: string): Promise<Result<void>>;
}

// Storage Repository (local)
export interface StorageRepository {
    save<T>(key: string, value: T): Promise<Result<void>>;
    get<T>(key: string): Promise<Result<T | null>>;
    remove(key: string): Promise<Result<void>>;
    clear(): Promise<Result<void>>;
}

// Biometric Repository
export interface BiometricRepository {
    isAvailable(): Promise<Result<boolean>>;
    authenticate(): Promise<Result<boolean>>;
    enrollBiometric(userId: string): Promise<Result<void>>;
    removeBiometric(): Promise<Result<void>>;
}
