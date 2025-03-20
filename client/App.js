import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ data }) => {
    setScanned(true);
    try {
      const response = await axios.get(`http://YOUR_SERVER_IP:5000/api/products/${data}`);
      setProductData(response.data);
    } catch (error) {
      console.error(error);
      setProductData({ error: 'Product not found' });
    }
  };

  if (hasPermission === null) return <Text>Requesting camera permission</Text>;
  if (hasPermission === false) return <Text>No camera access</Text>;

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      
      {scanned && (
        <View style={styles.resultContainer}>
          {productData?.error ? (
            <Text style={styles.errorText}>{productData.error}</Text>
          ) : (
            <>
              <Text style={styles.productName}>{productData?.name}</Text>
              <Text>Carbs: {productData?.carbsPerServing}g</Text>
              <Text>Serving Size: {productData?.servingSize}</Text>
            </>
          )}
          <Button title="Scan Again" onPress={() => setScanned(false)} />
        </View>
      )}
    </View>
  );
}