import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import IMCCalculator from './src/components/CalculoIMC/IMCCalculatorScreen';
import Ola from './src/components/Ola/Ola';

export default function App() {
  return (
    <View style={styles.container}>
      <Ola nomeProps='Náthan '></Ola>
      <IMCCalculator />
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
