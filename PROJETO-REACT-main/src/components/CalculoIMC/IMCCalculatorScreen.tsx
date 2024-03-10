import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState<string>('');
  const [altura, setAltura] = useState<string>('');
  const [resultadoIMC, setResultadoIMC] = useState<string>('');
  const [categoriaIMC, setCategoriaIMC] = useState<string>('');

  const calcularIMC = () => {
    const alturaMetros = parseFloat(altura.replace(',', '.'));
    const pesoKg = parseFloat(peso.replace(',', '.'));

    if (!isNaN(alturaMetros) && !isNaN(pesoKg)) {
      const imc = (pesoKg / (alturaMetros * alturaMetros)).toFixed(2);
      setResultadoIMC(imc);
      setCategoriaIMC(getCategoriaIMC(parseFloat(imc)));
    } else {
      alert('Por favor, insira valores vÃ¡lidos para peso e altura.');
      setResultadoIMC('');
      setCategoriaIMC('');
    }
  };

  const getCategoriaIMC = (imc: number): string => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc <= 24.9) return 'Peso normal';
    if (imc >= 25 && imc <= 29.9) return 'Sobrepeso';
    if (imc >= 30 && imc <= 34.9) return 'Obesidade grau I';
    if (imc >= 35 && imc <= 39.9) return 'Obesidade grau II';
    return 'Obesidade grau III ou mÃ³rbida';
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Digite seu peso em kg'
        onChangeText={setPeso}
        value={peso}
        keyboardType='numeric'
      />
      <TextInput
        style={styles.input}
        placeholder='Digite sua altura em metros'
        onChangeText={setAltura}
        value={altura}
        keyboardType='numeric'
      />
      <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>
      {resultadoIMC ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Seu IMC é: {resultadoIMC}</Text>
          <Text style={styles.resultText}>{categoriaIMC}</Text>
        </View>
      ) : null}
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
    padding: 20,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    padding: 10,
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'navy',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'navy',
    marginBottom: 5,
  },
});
