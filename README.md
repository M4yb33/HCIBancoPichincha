# 📱 EMAPA - Banco Pichincha# 📱 EMAPA - Banco Pichincha

## Sistema de Pagos de Servicios Básicos## Sistema de Pagos de Servicios Básicos



Aplicación móvil y web desarrollada con **React Native + Expo** para el pago de servicios de agua potable EMAPA a través del Banco Pichincha.Aplicación móvil y web desarrollada con **React Native + Expo** para el pago de servicios de agua potable EMAPA a través del Banco Pichincha.



------



## 🚀 **CÓMO EJECUTAR EL PROGRAMA**## 🚀 **CÓMO EJECUTAR EL PROGRAMA**



### **📋 Requisitos Previos**### **📋 Requisitos Previos**

- Node.js 18+ instalado- Node.js 18+ instalado

- npm o yarn- npm o yarn

- Expo CLI (se instala automáticamente)- Expo CLI (se instala automáticamente)



### **⚡ Instalación Rápida**### **⚡ Instalación Rápida**

```bash```bash

# 1. Clonar/descargar el proyecto# 1. Clonar/descargar el proyecto

cd DiseñoPaginascd DiseñoPaginas



# 2. Instalar dependencias# 2. Instalar dependencias

npm installnpm install



# 3. Ejecutar la aplicación# 3. Ejecutar la aplicación

npm startnpm start

``````



### **📱 Opciones de Ejecución**### **📱 Opciones de Ejecución**



#### **Para Móvil:**#### **Para Móvil:**

```bash```bash

# Ejecutar con código QR (recomendado)# Ejecutar con código QR (recomendado)

npx expo startnpx expo start



# Solo Android# Solo Android

npx expo start --androidnpx expo start --android



# Solo iOS  # Solo iOS  

npx expo start --iosnpx expo start --ios



# Túnel público (acceso desde cualquier red)# Túnel público (acceso desde cualquier red)

npx expo start --tunnelnpx expo start --tunnel

``````



#### **Para Web (Navegador):**#### **Para Web (Navegador):**

```bash```bash

# Ejecutar en navegador# Ejecutar en navegador

npx expo start --webnpx expo start --web



# Acceso local: http://localhost:8081# Acceso local: http://localhost:8081

# Acceso móvil (misma WiFi): http://192.168.0.7:8081# Acceso móvil (misma WiFi): http://192.168.0.7:8081

``````



------



## 🌐 **ACCESO MULTIPLATAFORMA**## 🌐 **ACCESO MULTIPLATAFORMA**



### **📱 Móvil - Expo Go**### **📱 Móvil - Expo Go**

1. Instala **Expo Go** desde Play Store/App Store1. Instala **Expo Go** desde Play Store/App Store

2. Ejecuta `npx expo start`2. Ejecuta `npx expo start`

3. Escanea el código QR3. Escanea el código QR

4. ¡La app se abre automáticamente!4. ¡La app se abre automáticamente!



### **💻 Web - Navegador**### **💻 Web - Navegador**

1. Ejecuta `npx expo start --web`1. Ejecuta `npx expo start --web`

2. Abre `http://localhost:8081` en tu navegador2. Abre `http://localhost:8081` en tu navegador

3. La app funciona como una aplicación web3. La app funciona como una aplicación web



### **🌍 Acceso Remoto**### **🌍 Acceso Remoto**

```bash```bash

# Desde cualquier red del mundo# Desde cualquier red del mundo

npx expo start --tunnelnpx expo start --tunnel



# Desde misma WiFi en móvil# Desde misma WiFi en móvil

npx expo start --webnpx expo start --web

# Luego ve a: http://192.168.0.7:8081 en móvil# Luego ve a: http://192.168.0.7:8081 en móvil

``````



------



## 🏗️ **ARQUITECTURA DEL PROYECTO**## 🏗️ **ARQUITECTURA DEL PROYECTO**



``````

src/src/

├── presentation/        # Interfaz de Usuario├── presentation/        # Interfaz de Usuario

│   ├── components/     # Componentes reutilizables│   ├── components/     # Componentes reutilizables

│   ├── screens/        # Pantallas de la app│   ├── screens/        # Pantallas de la app

│   └── theme/          # Colores y estilos│   └── theme/          # Colores y estilos

││

├── application/        # Lógica de Aplicación├── application/        # Lógica de Aplicación

│   ├── auth/          # Autenticación│   ├── auth/          # Autenticación

│   ├── payment/       # Pagos│   ├── payment/       # Pagos

│   └── user/          # Usuario│   └── user/          # Usuario

││

├── domain/            # Reglas de Negocio├── domain/            # Reglas de Negocio

│   ├── entities/      # Entidades del dominio│   ├── entities/      # Entidades del dominio

│   ├── repositories/ # Interfaces│   ├── repositories/ # Interfaces

│   └── value-objects/ # Objetos de valor│   └── value-objects/ # Objetos de valor

││

└── infrastructure/    # Capa Externa└── infrastructure/    # Capa Externa

    ├── api/          # Cliente API    ├── api/          # Cliente API

    └── repositories/ # Implementaciones    └── repositories/ # Implementaciones

``````



------



## ✨ **CARACTERÍSTICAS PRINCIPALES**## ✨ **CARACTERÍSTICAS PRINCIPALES**



### **🎯 Funcionalidades**### **🎯 Funcionalidades**

- ✅ **Pago de servicios básicos** (Agua potable - EMAPA)- ✅ **Pago de servicios básicos** (Agua potable - EMAPA)

- ✅ **Categorías de empresas** organizadas- ✅ **Categorías de empresas** organizadas

- ✅ **Validación de cuenta** (solo números, mínimo 4 dígitos)- ✅ **Validación de cuenta** (solo números, mínimo 4 dígitos)

- ✅ **Proceso de verificación** con countdown de 5 segundos- ✅ **Proceso de verificación** con countdown de 5 segundos

- ✅ **Interfaz intuitiva** estilo Banco Pichincha- ✅ **Interfaz intuitiva** estilo Banco Pichincha

- ✅ **Responsive design** para móvil y web- ✅ **Responsive design** para móvil y web



### **🔒 Validaciones de Seguridad**### **🔒 Validaciones de Seguridad**

- **Campo de cuenta**: Solo acepta números (0-9)- **Campo de cuenta**: Solo acepta números (0-9)

- **Límite de caracteres**: Máximo 12 dígitos- **Límite de caracteres**: Máximo 12 dígitos

- **Activación inteligente**: Botón habilitado desde 4 dígitos- **Activación inteligente**: Botón habilitado desde 4 dígitos

- **Filtrado automático**: Rechaza letras y símbolos- **Filtrado automático**: Rechaza letras y símbolos



### **🎨 Diseño**### **🎨 Diseño**

- **Colores Banco Pichincha**: Azul (#003366) y Amarillo (#FFD700)- **Colores Banco Pichincha**: Azul (#003366) y Amarillo (#FFD700)

- **Íconos intuitivos**: 💡 Pagar servicios, 💰 Recibir dinero- **Íconos intuitivos**: 💡 Pagar servicios, 💰 Recibir dinero

- **Animaciones fluidas**: Spinner de verificación, transiciones- **Animaciones fluidas**: Spinner de verificación, transiciones

- **Interfaz moderna**: Cards, botones y navegación optimizada- **Interfaz moderna**: Cards, botones y navegación optimizada



------



## 📦 **TECNOLOGÍAS UTILIZADAS**## 📦 **TECNOLOGÍAS UTILIZADAS**



### **Frontend**### **Frontend**

- **React Native** 0.81.5- **React Native** 0.81.5

- **Expo SDK** 54.0.0- **Expo SDK** 54.0.0

- **TypeScript** para tipado estático- **TypeScript** para tipado estático

- **React** 19.1.0 con hooks- **React** 19.1.0 con hooks



### **Desarrollo**### **Desarrollo**

- **Metro Bundler** para empaquetado- **Metro Bundler** para empaquetado

- **Babel** para transpilación- **Babel** para transpilación

- **Jest** para testing- **Jest** para testing

- **ESLint** para calidad de código- **ESLint** para calidad de código



### **Multiplataforma**### **Multiplataforma**

- **iOS**: Nativo via Expo Go- **iOS**: Nativo via Expo Go

- **Android**: Nativo via Expo Go  - **Android**: Nativo via Expo Go  

- **Web**: React Native Web- **Web**: React Native Web



------



## 🎮 **FLUJO DE LA APLICACIÓN**## 🎮 **FLUJO DE LA APLICACIÓN**



### **1. Pantalla Principal**### **1. Pantalla Principal**

- Dashboard estilo Banco Pichincha- Dashboard estilo Banco Pichincha

- Opciones de servicios organizadas- Opciones de servicios organizadas

- Acceso rápido a "Pagar servicios"- Acceso rápido a "Pagar servicios"



### **2. Selección de Servicio**### **2. Selección de Servicio**

- Categorías de empresas (Agua Potable)- Categorías de empresas (Agua Potable)

- Lista de empresas EMAPA disponibles- Lista de empresas EMAPA disponibles

- Búsqueda y filtrado- Búsqueda y filtrado



### **3. Datos de Pago**### **3. Datos de Pago**

- Ingreso de número de suministro- Ingreso de número de suministro

- Validación automática de dígitos- Validación automática de dígitos

- Activación desde 4 caracteres- Activación desde 4 caracteres



### **4. Verificación**### **4. Verificación**

- Proceso de verificación automático (5s)- Proceso de verificación automático (5s)

- Spinner animado con countdown- Spinner animado con countdown

- Confirmación de datos del servicio- Confirmación de datos del servicio



### **5. Confirmación**### **5. Confirmación**

- Botón de pago habilitado automáticamente- Botón de pago habilitado automáticamente

- Proceso de pago simulado- Proceso de pago simulado

- Pantalla de éxito- Pantalla de éxito



------



## 🛠️ **COMANDOS ÚTILES**## 🛠️ **COMANDOS ÚTILES**



### **Desarrollo**### **Desarrollo**

```bash```bash

# Ejecutar en desarrollo# Ejecutar en desarrollo

npm startnpm start



# Limpiar caché# Limpiar caché

npx expo start --clearnpx expo start --clear



# Reiniciar servidor# Reiniciar servidor

npx expo rnpx expo r



# Ver logs detallados# Ver logs detallados

npx expo start --dev-clientnpx expo start --dev-client

``````



### **Build y Deploy**### **Build y Deploy**

```bash```bash

# Export para web# Export para web

npx expo exportnpx expo export



# Build para stores# Build para stores

expo buildexpo build



# Actualizar dependencias# Actualizar dependencias

npx expo install --fixnpx expo install --fix

``````



### **Debugging**### **Debugging**

```bash```bash

# Abrir debugger# Abrir debugger

# Presiona 'j' en la terminal cuando la app esté corriendo# Presiona 'j' en la terminal cuando la app esté corriendo



# Ver errores# Ver errores

# Presiona 'r' para reload# Presiona 'r' para reload

# Presiona Ctrl+C para parar# Presiona Ctrl+C para parar

``````



------



## 📱 **COMPATIBILIDAD**## 📱 **COMPATIBILIDAD**



### **Dispositivos Móviles**### **Dispositivos Móviles**

- ✅ **Android**: 7.0+ (API 24+)- ✅ **Android**: 7.0+ (API 24+)

- ✅ **iOS**: 12.0+- ✅ **iOS**: 12.0+

- ✅ **Tablets**: iPad, Android tablets- ✅ **Tablets**: iPad, Android tablets



### **Navegadores Web**### **Navegadores Web**

- ✅ **Chrome**: 90+- ✅ **Chrome**: 90+

- ✅ **Safari**: 14+- ✅ **Safari**: 14+

- ✅ **Firefox**: 88+- ✅ **Firefox**: 88+

- ✅ **Edge**: 90+- ✅ **Edge**: 90+



### **Redes**### **Redes**

- ✅ **WiFi local**: Acceso inmediato- ✅ **WiFi local**: Acceso inmediato

- ✅ **Datos móviles**: Via Expo Go- ✅ **Datos móviles**: Via Expo Go

- ✅ **Redes públicas**: Compatible- ✅ **Redes públicas**: Compatible

- ✅ **Acceso remoto**: Via túnel- ✅ **Acceso remoto**: Via túnel



------



## 🎯 **QUICK START COMPLETO**## 🎯 **QUICK START COMPLETO**



### **Para desarrolladores:**### **Para desarrolladores:**

```bash```bash

git clone [repositorio]git clone [repositorio]

cd DiseñoPaginascd DiseñoPaginas

npm installnpm install

npx expo startnpx expo start

``````



### **Para usuarios móviles:**### **Para usuarios móviles:**

1. Instalar Expo Go1. Instalar Expo Go

2. Escanear QR del desarrollador2. Escanear QR del desarrollador

3. ¡Usar la app!3. ¡Usar la app!



### **Para usuarios web:**### **Para usuarios web:**

1. Ir a la URL proporcionada1. Ir a la URL proporcionada

2. Usar desde cualquier navegador2. Usar desde cualquier navegador

3. ¡Funciona como app nativa!3. ¡Funciona como app nativa!



------



## 📞 **SOPORTE**## 📞 **SOPORTE**



- **Tecnología**: React Native + Expo 54- **Tecnología**: React Native + Expo 54

- **Plataformas**: iOS, Android, Web- **Plataformas**: iOS, Android, Web

- **Arquitectura**: Clean Architecture + TypeScript- **Arquitectura**: Clean Architecture + TypeScript

- **Estado**: ✅ Funcional y completo- **Estado**: ✅ Funcional y completo



------



**¡Tu aplicación está lista para usar en cualquier dispositivo y desde cualquier ubicación!** 🚀📱💻**¡Tu aplicación está lista para usar en cualquier dispositivo y desde cualquier ubicación!** 🚀📱💻
├── infrastructure/      # Capa de Infraestructura (Implementaciones)
│   ├── api/            # Cliente HTTP y configuración
│   ├── repositories/   # Implementaciones de repositorios
│   └── storage/        # Almacenamiento local
│
└── presentation/       # Capa de Presentación (UI)
    ├── components/     # Componentes reutilizables
    ├── screens/        # Pantallas de la aplicación
    ├── navigation/     # Configuración de navegación
    └── theme/          # Sistema de diseño (colores, tipografía)
```

## 🎨 Sistema de Diseño

### Colores del Banco Pichincha

- **Primary**: `#003DA5` (Azul corporativo)
- **Accent**: `#FFD100` (Amarillo corporativo)
- **Success**: `#4CAF50` (Verde)
- **Warning**: `#FF9800` (Naranja)
- **Error**: `#F44336` (Rojo)

### Principios de Usabilidad Aplicados

1. **Visibilidad del Estado del Sistema**: Indicadores de progreso y feedback inmediato
2. **Correspondencia con el Mundo Real**: Lenguaje natural y metáforas familiares
3. **Control y Libertad del Usuario**: Botones de cancelar/volver siempre visibles
4. **Consistencia y Estándares**: Diseño uniforme en toda la aplicación
5. **Prevención de Errores**: Validación en tiempo real
6. **Reconocimiento vs Recuerdo**: Favoritos y autocompletado
7. **Flexibilidad y Eficiencia**: Atajos para usuarios expertos
8. **Diseño Minimalista**: Solo información esencial
9. **Recuperación de Errores**: Mensajes claros y soluciones propuestas
10. **Ayuda y Documentación**: Tooltips contextuales

## 🚀 Instalación

### Prerrequisitos

- Node.js 16+
- npm o yarn
- React Native CLI
- Android Studio (para Android)
- Xcode (para iOS, solo en Mac)

### Pasos

1. **Instalar dependencias**

```bash
npm install
```

2. **Para Android**

```bash
npm run android
```

3. **Para iOS** (solo en Mac)

```bash
cd ios && pod install && cd ..
npm run ios
```

## 📋 Funcionalidades Implementadas (MVP)

### ✅ Arquitectura Base
- [x] Clean Architecture con separación de capas
- [x] Programación funcional con Result types
- [x] Sistema de tema personalizado del Banco Pichincha
- [x] Componentes reutilizables (Button, Input, Card)

### 🎯 Próximas Funcionalidades

#### Fase 1 - Autenticación
- [ ] Login con email/password
- [ ] Login biométrico (Face ID / Huella)
- [ ] Gestión de sesión
- [ ] Refresh token automático

#### Fase 2 - Pagos
- [ ] Consulta de deuda EMAPA
- [ ] Proceso de pago (5 pasos)
- [ ] Confirmación con OTP
- [ ] Generación de comprobante
- [ ] Descarga y compartir comprobante

#### Fase 3 - Gestión de Usuario
- [ ] Ver perfil
- [ ] Editar datos personales
- [ ] Gestionar cuentas bancarias
- [ ] Consultar saldo

#### Fase 4 - Servicios
- [ ] Lista de empresas disponibles
- [ ] Búsqueda de servicios
- [ ] Servicios favoritos
- [ ] Historial de pagos

#### Fase 5 - Accesibilidad
- [ ] Modo adulto mayor (texto grande)
- [ ] Soporte para lectores de pantalla
- [ ] Alto contraste
- [ ] Navegación por teclado

## 🧪 Testing

### Ejecutar Tests

```bash
npm test
```

### Pruebas de Usabilidad

Ver documento `docs/USABILITY_TESTING.md` para:
- Protocolo de pruebas TAM
- Cuestionarios
- Métricas de éxito
- Criterios de aceptación

## 📱 Segmentos de Usuario

### 1. Carlos - El Profesional Digital (25-35 años)
- Alta experiencia tecnológica
- Busca rapidez y eficiencia
- Usa funciones avanzadas

### 2. María - La Madre Ocupada (40-55 años)
- Experiencia intermedia
- Prioriza seguridad y claridad
- Necesita confirmaciones

### 3. Don Roberto - El Adulto Mayor (68+ años)
- Poca o nula experiencia digital
- Requiere interfaz simplificada
- Necesita asistencia y paciencia

## 🔒 Seguridad

- OAuth 2.0 con tokens JWT
- Certificate Pinning
- Encriptación AES-256
- Almacenamiento seguro (Keychain/Keystore)
- Detección de jailbreak/root
- MFA obligatorio para pagos

## 📊 Métricas de Éxito (TAM)

| Métrica | Objetivo |
|---------|----------|
| SUS Score | >80 |
| Percepción de Utilidad | >6.0/7 |
| Percepción de Facilidad | >6.0/7 |
| Tasa de éxito | >95% |
| Tiempo de pago | <3 min |
| NPS | >+40 |

## 🛠️ Tecnologías

- **React Native 0.72**
- **TypeScript 5.1**
- **Axios** - HTTP client
- **Zustand** - State management
- **React Navigation** - Navegación
- **Jest** - Testing

## 📝 Convenciones de Código

### Nomenclatura

- **Componentes**: PascalCase (`Button.tsx`)
- **Funciones/Variables**: camelCase (`handleSubmit`)
- **Constantes**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Tipos/Interfaces**: PascalCase (`UserProfile`)

### Estructura de Archivos

- Cada componente en su propio archivo
- Exportar desde archivos `index.ts`
- Colocar estilos al final del archivo
- Separar lógica de negocio en hooks personalizados

## 🤝 Contribución

1. Crear una rama desde `develop`
2. Seguir convenciones de código
3. Escribir tests para nuevas funcionalidades
4. Actualizar documentación
5. Crear Pull Request

## 📄 Licencia

Propiedad del Banco Pichincha - Todos los derechos reservados

## 👥 Equipo

- **Diseño UX/UI**: Aplicación de principios TAM y Nielsen
- **Desarrollo**: Clean Architecture + React Native
- **QA**: Pruebas de usabilidad y accesibilidad

## 📞 Soporte

Para reportar bugs o sugerir mejoras, contactar al equipo de desarrollo.

---

**Versión**: 1.0.0 (MVP)  
**Última actualización**: Octubre 2025
