import React from 'react';
import { View, StyleSheet } from 'react-native';
import BarcodeScanner from '../components/BarcodeScanner';
import ProductDisplay from '../components/ProductDisplay';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <BarcodeScanner />
      <ProductDisplay />
    </View>
  );
}