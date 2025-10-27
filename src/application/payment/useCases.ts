/**
 * Application Layer - Payment Use Cases
 * Casos de uso relacionados con pagos
 * Programación funcional pura
 */

import { PaymentRepository, ServiceRepository, Result } from '../../domain/repositories';
import { Bill, Payment, PaymentReceipt } from '../../domain/entities';
import { AccountNumber, Money } from '../../domain/value-objects';

export interface ConsultBillUseCaseInput {
    companyId: string;
    accountNumber: string;
}

export const createConsultBillUseCase = (
    paymentRepository: PaymentRepository,
    serviceRepository: ServiceRepository
) => {
    return async (input: ConsultBillUseCaseInput): Promise<Result<Bill>> => {
        try {
            // Validar número de cuenta
            const accountNumberVO = AccountNumber.create(input.accountNumber);

            // Validar que la empresa exista
            const companiesResult = await serviceRepository.getCompanies();

            if (!companiesResult.success) {
                return { success: false, error: (companiesResult as any).error };
            }

            const companyExists = companiesResult.data.some(c => c.id === input.companyId);

            if (!companyExists) {
                return {
                    success: false,
                    error: new Error('Empresa no encontrada')
                };
            }

            // Consultar deuda
            return await paymentRepository.consultBill(
                input.companyId,
                accountNumberVO.getValue()
            );
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error : new Error('Error al consultar la deuda')
            };
        }
    };
};

export interface ExecutePaymentUseCaseInput {
    billId: string;
    sourceAccountId: string;
    amount: number;
}

export const createExecutePaymentUseCase = (paymentRepository: PaymentRepository) => {
    return async (input: ExecutePaymentUseCaseInput): Promise<Result<Payment>> => {
        try {
            // Validar monto
            const amountVO = Money.create(input.amount);

            if (amountVO.getAmount() <= 0) {
                return {
                    success: false,
                    error: new Error('El monto debe ser mayor a 0')
                };
            }

            // Ejecutar pago
            const result = await paymentRepository.executePayment(
                input.billId,
                input.sourceAccountId,
                amountVO.getAmount()
            );

            return result;
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error : new Error('Error al procesar el pago')
            };
        }
    };
};

export interface GetPaymentStatusUseCaseInput {
    paymentId: string;
}

export const createGetPaymentStatusUseCase = (paymentRepository: PaymentRepository) => {
    return async (input: GetPaymentStatusUseCaseInput): Promise<Result<Payment>> => {
        try {
            return await paymentRepository.getPaymentStatus(input.paymentId);
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error : new Error('Error al obtener estado del pago')
            };
        }
    };
};

export interface GenerateReceiptUseCaseInput {
    paymentId: string;
}

export const createGenerateReceiptUseCase = (paymentRepository: PaymentRepository) => {
    return async (input: GenerateReceiptUseCaseInput): Promise<Result<PaymentReceipt>> => {
        try {
            return await paymentRepository.generateReceipt(input.paymentId);
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error : new Error('Error al generar comprobante')
            };
        }
    };
};

export interface DownloadReceiptUseCaseInput {
    receiptId: string;
}

export const createDownloadReceiptUseCase = (paymentRepository: PaymentRepository) => {
    return async (input: DownloadReceiptUseCaseInput): Promise<Result<string>> => {
        try {
            return await paymentRepository.downloadReceipt(input.receiptId);
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error : new Error('Error al descargar comprobante')
            };
        }
    };
};

export interface ShareReceiptUseCaseInput {
    receiptId: string;
    method: 'email' | 'sms';
}

export const createShareReceiptUseCase = (paymentRepository: PaymentRepository) => {
    return async (input: ShareReceiptUseCaseInput): Promise<Result<void>> => {
        try {
            return await paymentRepository.shareReceipt(input.receiptId, input.method);
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error : new Error('Error al compartir comprobante')
            };
        }
    };
};
