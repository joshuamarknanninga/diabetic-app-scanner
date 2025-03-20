import React from 'react';
import { AppProvider } from './contexts/AppContext';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <AppProvider>
      <HomeScreen />
    </AppProvider>
  );
}