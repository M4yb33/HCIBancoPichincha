/**
 * Infrastructure Layer - Auth Repository Implementation
 */

import { AuthRepository, Result, success, failure } from '../../domain/repositories';
import { User } from '../../domain/entities';
import { apiClient, endpoints } from '../api/client';

export const createAuthRepositoryImpl = (): AuthRepository => ({
    login: async (email: string, password: string): Promise<Result<{ user: User; token: string }>> => {
        try {
            const response = await apiClient.post(endpoints.auth.login, {
                email,
                password,
            });

            return success(response.data);
        } catch (error: any) {
            return failure(new Error(error.message || 'Error al iniciar sesión'));
        }
    },

    loginWithBiometric: async (userId: string): Promise<Result<{ user: User; token: string }>> => {
        try {
            const response = await apiClient.post(endpoints.auth.biometric, {
                userId,
            });

            return success(response.data);
        } catch (error: any) {
            return failure(new Error(error.message || 'Error en autenticación biométrica'));
        }
    },

    logout: async (): Promise<Result<void>> => {
        try {
            await apiClient.post(endpoints.auth.logout);
            return success(undefined);
        } catch (error: any) {
            return failure(new Error(error.message || 'Error al cerrar sesión'));
        }
    },

    refreshToken: async (token: string): Promise<Result<string>> => {
        try {
            const response = await apiClient.post(endpoints.auth.refreshToken, {
                token,
            });

            return success(response.data.token);
        } catch (error: any) {
            return failure(new Error(error.message || 'Error al renovar token'));
        }
    },

    verifySession: async (): Promise<Result<boolean>> => {
        try {
            // Implementación simple: verificar si hay token válido
            // TODO: Implementar verificación real
            return success(true);
        } catch (error: any) {
            return failure(new Error(error.message || 'Error al verificar sesión'));
        }
    },
});
