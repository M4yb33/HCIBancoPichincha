/**
 * Application Layer - User Use Cases
 * Casos de uso relacionados con gestión de usuario
 */

import { UserRepository, Result } from '../../domain/repositories';
import { User, BankAccount } from '../../domain/entities';
import { Email, PhoneNumber } from '../../domain/value-objects';

export const createGetProfileUseCase = (userRepository: UserRepository) => {
    return async (): Promise<Result<User>> => {
        try {
            return await userRepository.getProfile();
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error : new Error('Error al obtener perfil')
            };
        }
    };
};

export interface UpdateProfileUseCaseInput {
    name?: string;
    email?: string;
    phone?: string;
}

export const createUpdateProfileUseCase = (userRepository: UserRepository) => {
    return async (input: UpdateProfileUseCaseInput): Promise<Result<User>> => {
        try {
            const updates: Partial<User> = {};

            if (input.name) {
                updates.name = input.name.trim();
            }

            if (input.email) {
                const emailVO = Email.create(input.email);
                updates.email = emailVO.getValue();
            }

            if (input.phone) {
                const phoneVO = PhoneNumber.create(input.phone);
                updates.phone = phoneVO.getValue();
            }

            return await userRepository.updateProfile(updates);
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error : new Error('Error al actualizar perfil')
            };
        }
    };
};

export const createGetBankAccountsUseCase = (userRepository: UserRepository) => {
    return async (): Promise<Result<BankAccount[]>> => {
        try {
            return await userRepository.getBankAccounts();
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error : new Error('Error al obtener cuentas bancarias')
            };
        }
    };
};

export interface GetAccountBalanceUseCaseInput {
    accountId: string;
}

export const createGetAccountBalanceUseCase = (userRepository: UserRepository) => {
    return async (input: GetAccountBalanceUseCaseInput): Promise<Result<number>> => {
        try {
            if (!input.accountId) {
                return {
                    success: false,
                    error: new Error('ID de cuenta requerido')
                };
            }

            return await userRepository.getAccountBalance(input.accountId);
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error : new Error('Error al obtener saldo')
            };
        }
    };
};
