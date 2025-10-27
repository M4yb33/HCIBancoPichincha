# 📱 EMAPA - Banco Pichincha

## Sistema de Pagos de Servicios Básicos

Aplicación móvil y web desarrollada con **React Native + Expo** para el pago de servicios de agua potable EMAPA a través del Banco Pichincha, implementando principios de usabilidad e interacción humano-computador.

---

## 🚀 Guía de Instalación y Ejecución

### 📋 Requisitos Previos

- **Node.js** 18 o superior
- **npm** o **yarn**
- **Expo CLI** (se instala automáticamente)

### ⚡ Instalación Rápida

```bash
# 1. Clonar/descargar el proyecto
cd ProyectoBancoPichincha

# 2. Instalar dependencias
npm install

# 3. Ejecutar la aplicación
npm start
```

### 📱 Opciones de Ejecución

#### **Para Móvil:**
```bash
# Ejecutar con código QR (recomendado)
npx expo start

# Solo Android
npx expo start --android

# Solo iOS
npx expo start --ios

# Túnel público (acceso desde cualquier red)
npx expo start --tunnel
```

#### **Para Web (Navegador):**
```bash
# Ejecutar en navegador
npx expo start --web

# Acceso local: http://localhost:8081
# Acceso móvil (misma WiFi): http://192.168.0.7:8081
```

---

## 🌐 Acceso Multiplataforma

### 📱 Móvil - Expo Go
1. Instala **Expo Go** desde Play Store/App Store
2. Ejecuta `npx expo start`
3. Escanea el código QR
4. ¡La app se abre automáticamente!

### 💻 Web - Navegador
1. Ejecuta `npx expo start --web`
2. Abre `http://localhost:8081` en tu navegador
3. La app funciona como una aplicación web progresiva

### 🌍 Acceso Remoto
```bash
# Desde cualquier red del mundo
npx expo start --tunnel

# Desde misma WiFi en móvil
npx expo start --web
# Luego ve a: http://192.168.0.7:8081 en móvil
```

---

## 🏗️ Arquitectura del Proyecto

El proyecto implementa **Clean Architecture** con separación clara de responsabilidades:

```
src/
├── presentation/        # Interfaz de Usuario
│   ├── components/     # Componentes reutilizables
│   ├── screens/        # Pantallas de la app
│   └── theme/          # Colores y estilos
│
├── application/        # Lógica de Aplicación
│   ├── auth/          # Casos de uso de autenticación
│   ├── payment/       # Casos de uso de pagos
│   └── user/          # Casos de uso de usuario
│
├── domain/            # Reglas de Negocio
│   ├── entities/      # Entidades del dominio
│   ├── repositories/  # Interfaces de repositorios
│   └── value-objects/ # Objetos de valor
│
└── infrastructure/    # Capa Externa
    ├── api/          # Cliente API
    └── repositories/ # Implementaciones de repositorios
```

---

## ✨ Características Principales

### 🎯 Funcionalidades
- ✅ **Pago de servicios básicos** (Agua potable - EMAPA)
- ✅ **Categorías de empresas** organizadas
- ✅ **Validación de cuenta** (solo números, mínimo 4 dígitos)
- ✅ **Proceso de verificación** con countdown de 5 segundos
- ✅ **Interfaz intuitiva** estilo Banco Pichincha
- ✅ **Responsive design** para móvil y web

### 🔒 Validaciones de Seguridad
- **Campo de cuenta**: Solo acepta números (0-9)
- **Límite de caracteres**: Máximo 12 dígitos
- **Activación inteligente**: Botón habilitado desde 4 dígitos
- **Filtrado automático**: Rechaza letras y símbolos

### 🎨 Sistema de Diseño
- **Colores Banco Pichincha**: Azul (#003366) y Amarillo (#FFD700)
- **Íconos intuitivos**: 💡 Pagar servicios, 💰 Recibir dinero
- **Animaciones fluidas**: Spinner de verificación, transiciones
- **Interfaz moderna**: Cards, botones y navegación optimizada

---

## 📦 Tecnologías Utilizadas

### Frontend
- **React Native** 0.81.5
- **Expo SDK** 54.0.0
- **TypeScript** para tipado estático
- **React** 19.1.0 con hooks

### Desarrollo
- **Metro Bundler** para empaquetado
- **Babel** para transpilación
- **Jest** para testing
- **ESLint** para calidad de código

### Multiplataforma
- **iOS**: Nativo vía Expo Go
- **Android**: Nativo vía Expo Go
- **Web**: React Native Web

---

## 🎮 Flujo de la Aplicación

### 1. **Pantalla Principal**
- Dashboard estilo Banco Pichincha
- Opciones de servicios organizadas
- Acceso rápido a "Pagar servicios"

### 2. **Selección de Servicio**
- Categorías de empresas (Agua Potable)
- Lista de empresas EMAPA disponibles
- Búsqueda y filtrado

### 3. **Datos de Pago**
- Ingreso de número de suministro
- Validación automática de dígitos
- Activación desde 4 caracteres

### 4. **Verificación**
- Proceso de verificación automático (5s)
- Spinner animado con countdown
- Confirmación de datos del servicio

### 5. **Confirmación**
- Botón de pago habilitado automáticamente
- Proceso de pago simulado
- Pantalla de éxito

---

## 🛠️ Comandos Útiles

### Desarrollo
```bash
# Ejecutar en desarrollo
npm start

# Limpiar caché
npx expo start --clear

# Reiniciar servidor
npx expo r

# Ver logs detallados
npx expo start --dev-client
```

### Build y Deploy
```bash
# Export para web
npx expo export

# Build para stores
expo build

# Actualizar dependencias
npx expo install --fix
```

### Debugging
```bash
# Abrir debugger
# Presiona 'j' en la terminal cuando la app esté corriendo

# Ver errores
# Presiona 'r' para reload
# Presiona Ctrl+C para parar
```

---

## 📱 Compatibilidad

### Dispositivos Móviles
- ✅ **Android**: 7.0+ (API 24+)
- ✅ **iOS**: 12.0+
- ✅ **Tablets**: iPad, Android tablets

### Navegadores Web
- ✅ **Chrome**: 90+
- ✅ **Safari**: 14+
- ✅ **Firefox**: 88+
- ✅ **Edge**: 90+

### Redes
- ✅ **WiFi local**: Acceso inmediato
- ✅ **Datos móviles**: Vía Expo Go
- ✅ **Redes públicas**: Compatible
- ✅ **Acceso remoto**: Vía túnel

---

## 🎯 Guía de Inicio Rápido

### Para desarrolladores:
```bash
git clone [repositorio]
cd ProyectoBancoPichincha
npm install
npx expo start
```

### Para usuarios móviles:
1. Instalar Expo Go
2. Escanear QR del desarrollador
3. ¡Usar la app!

### Para usuarios web:
1. Ir a la URL proporcionada
2. Usar desde cualquier navegador
3. ¡Funciona como app nativa!

---

## 👥 Principios de Usabilidad Implementados

Este proyecto aplica los **10 principios heurísticos de Nielsen** y el **Modelo TAM (Technology Acceptance Model)**:

### 🔍 Heurísticas de Nielsen
1. **Visibilidad del estado del sistema**: Feedback inmediato en todas las acciones
2. **Correspondencia mundo real**: Lenguaje familiar y metáforas bancarias
3. **Control y libertad**: Navegación clara con opciones de cancelar
4. **Consistencia y estándares**: Diseño uniforme basado en Banco Pichincha
5. **Prevención de errores**: Validación en tiempo real
6. **Reconocimiento vs recuerdo**: Interfaz intuitiva
7. **Flexibilidad y eficiencia**: Flujo optimizado para diferentes usuarios
8. **Diseño estético y minimalista**: Solo información esencial
9. **Recuperación de errores**: Mensajes claros y acciones correctivas
10. **Ayuda y documentación**: Tooltips contextuales

### 📊 Modelo TAM
- **Utilidad percibida**: Soluciona necesidad real de pagos
- **Facilidad de uso percibida**: Interfaz simple e intuitiva
- **Actitud hacia el uso**: Diseño atractivo y confiable
- **Intención de uso**: Proceso completo y satisfactorio

---

## 📞 Información del Proyecto

- **Tecnología**: React Native + Expo 54
- **Plataformas**: iOS, Android, Web
- **Arquitectura**: Clean Architecture + TypeScript
- **Materia**: Interacción Humano Computador
- **Estado**: ✅ Funcional y completo

---

**¡Tu aplicación está lista para usar en cualquier dispositivo y desde cualquier ubicación!** 🚀📱💻