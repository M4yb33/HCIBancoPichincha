/**
 * Domain Layer - Entities
 * Entidades del dominio que representan conceptos del negocio
 */

export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    identificationNumber: string;
    createdAt: Date;
}

export interface BankAccount {
    id: string;
    accountNumber: string;
    accountType: 'savings' | 'checking';
    balance: number;
    currency: 'USD';
    isActive: boolean;
}

export interface ServiceCompany {
    id: string;
    name: string;
    code: string;
    icon: string;
    category: 'water' | 'electricity' | 'phone' | 'internet' | 'tv' | 'tax';
    description: string;
}

export interface PaymentAccount {
    id: string;
    accountNumber: string;
    companyId: string;
    holderName: string;
    address: string;
    isFavorite: boolean;
    nickname?: string;
}

export interface Bill {
    id: string;
    accountNumber: string;
    companyId: string;
    period: string;
    amount: number;
    bankFee: number;
    totalAmount: number;
    dueDate: Date;
    consumption?: number;
    consumptionUnit?: string;
    status: 'pending' | 'paid' | 'overdue';
}

export interface Payment {
    id: string;
    transactionId: string;
    billId: string;
    userId: string;
    sourceAccountId: string;
    amount: number;
    bankFee: number;
    totalAmount: number;
    status: 'processing' | 'success' | 'failed';
    createdAt: Date;
    completedAt?: Date;
    errorCode?: string;
    errorMessage?: string;
}

export interface PaymentReceipt {
    id: string;
    paymentId: string;
    transactionId: string;
    company: string;
    accountNumber: string;
    holderName: string;
    amount: number;
    date: Date;
    pdfUrl?: string;
}

export interface Transaction {
    id: string;
    transactionId: string;
    type: 'payment' | 'transfer' | 'deposit' | 'withdrawal';
    amount: number;
    date: Date;
    description: string;
    company?: string;
    status: 'completed' | 'pending' | 'failed';
}
