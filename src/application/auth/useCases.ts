/**
 * Application Layer - Use Cases
 * Casos de uso de autenticación
 * Implementación funcional pura
 */

import { AuthRepository, Result } from '../../domain/repositories';
import { User } from '../../domain/entities';
import { Email } from '../../domain/value-objects';

export interface LoginUseCaseInput {
    email: string;
    password: string;
}

export interface LoginUseCaseOutput {
    user: User;
    token: string;
}

export const createLoginUseCase = (authRepository: AuthRepository) => {
    return async (input: LoginUseCaseInput): Promise<Result<LoginUseCaseOutput>> => {
        try {
            // Validar email
            const emailResult = Email.create(input.email);

            // Validar password
            if (!input.password || input.password.length < 6) {
                return {
                    success: false,
                    error: new Error('La contraseña debe tener al menos 6 caracteres')
                };
            }

            // Ejecutar login
            const result = await authRepository.login(emailResult.getValue(), input.password);

            return result;
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error : new Error('Error al iniciar sesión')
            };
        }
    };
};

export interface BiometricLoginUseCaseInput {
    userId: string;
}

export const createBiometricLoginUseCase = (authRepository: AuthRepository) => {
    return async (input: BiometricLoginUseCaseInput): Promise<Result<LoginUseCaseOutput>> => {
        try {
            if (!input.userId) {
                return {
                    success: false,
                    error: new Error('ID de usuario requerido')
                };
            }

            const result = await authRepository.loginWithBiometric(input.userId);

            return result;
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error : new Error('Error en autenticación biométrica')
            };
        }
    };
};

export const createLogoutUseCase = (authRepository: AuthRepository) => {
    return async (): Promise<Result<void>> => {
        try {
            return await authRepository.logout();
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error : new Error('Error al cerrar sesión')
            };
        }
    };
};

export const createVerifySessionUseCase = (authRepository: AuthRepository) => {
    return async (): Promise<Result<boolean>> => {
        try {
            return await authRepository.verifySession();
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error : new Error('Error al verificar sesión')
            };
        }
    };
};
