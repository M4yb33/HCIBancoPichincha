/**
 * Infrastructure Layer - API Configuration
 * Cliente HTTP para comunicación con backend
 */

import axios, { AxiosInstance, AxiosError } from 'axios';

// Configuración base
const BASE_URL = 'https://api.bancopichincha.com'; // URL del backend
const TIMEOUT = 30000; // 30 segundos

// Tipos de error personalizados
export interface ApiError {
    code: string;
    message: string;
    details?: Record<string, unknown>;
}

// Crear instancia de Axios
const createApiClient = (): AxiosInstance => {
    const client = axios.create({
        baseURL: BASE_URL,
        timeout: TIMEOUT,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    });

    // Interceptor de request para agregar token
    client.interceptors.request.use(
        async (config) => {
            // TODO: Obtener token del storage
            const token = ''; // await getToken();

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    // Interceptor de response para manejo de errores
    client.interceptors.response.use(
        (response) => response,
        async (error: AxiosError<ApiError>) => {
            if (error.response) {
                // Error de respuesta del servidor
                const { status, data } = error.response;

                if (status === 401) {
                    // Token expirado o inválido
                    // TODO: Implementar refresh token o logout
                    console.error('Sesión expirada');
                }

                if (status === 403) {
                    console.error('Acceso denegado');
                }

                if (status >= 500) {
                    console.error('Error del servidor');
                }

                return Promise.reject({
                    code: data?.code || `HTTP_${status}`,
                    message: data?.message || 'Error en la solicitud',
                    details: data?.details,
                } as ApiError);
            }

            if (error.request) {
                // No hubo respuesta del servidor
                return Promise.reject({
                    code: 'NETWORK_ERROR',
                    message: 'No se pudo conectar con el servidor. Verifica tu conexión a internet.',
                } as ApiError);
            }

            // Error en la configuración de la request
            return Promise.reject({
                code: 'REQUEST_ERROR',
                message: error.message || 'Error al procesar la solicitud',
            } as ApiError);
        }
    );

    return client;
};

// Instancia singleton
export const apiClient = createApiClient();

// Endpoints
export const endpoints = {
    // Auth
    auth: {
        login: '/auth/login',
        biometric: '/auth/biometric',
        refreshToken: '/auth/refresh-token',
        logout: '/auth/logout',
    },
    // User
    user: {
        profile: '/user/profile',
        accounts: '/user/accounts',
        balance: (accountId: string) => `/user/balance/${accountId}`,
    },
    // Services
    services: {
        companies: '/services/companies',
        search: '/services/search',
        recent: '/services/recent',
        favorites: '/services/favorites',
        addFavorite: '/services/favorites',
        removeFavorite: (id: string) => `/services/favorites/${id}`,
    },
    // Payments
    payments: {
        consultDebt: '/services/consult-debt',
        pay: '/services/pay',
        status: (id: string) => `/payments/${id}`,
        receipt: (id: string) => `/transactions/${id}/receipt`,
    },
    // Transactions
    transactions: {
        history: '/transactions/history',
        detail: (id: string) => `/transactions/${id}`,
    },
    // Notifications
    notifications: {
        list: '/notifications',
        read: (id: string) => `/notifications/${id}/read`,
        register: '/notifications/register-device',
    },
};
