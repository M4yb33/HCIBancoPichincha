/**
 * App Root Component
 * Punto de entrada de la aplicación EMAPA - Banco Pichincha
 */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './src/presentation/screens/HomeScreen';
import { theme } from './src/presentation/theme';

const App: React.FC = () => {
    return (
        <>
            <StatusBar
                style="dark"
                backgroundColor={theme.colors.accent}
            />
            <HomeScreen />
        </>
    );
};

export default App;
