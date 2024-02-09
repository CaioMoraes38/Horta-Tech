import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import styles from './style';


export default function Status() {
  const [temperatura, setTemperature] = useState('');
  const [umidade, setHumidity] = useState('');
  const [umidade_solo, setUmidade_solo] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.1.20/');
      const data = response.data;
      setTemperature(data.temperatura);
      setHumidity(data.umidade);
      setUmidade_solo(data.umidade_solo);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Atualizar = () => {
    fetchData();
  };

  return (
    <SafeAreaView style={styles.viewPrincipal}>
      <ImageBackground
        style={styles.fundoStatus}
        source={require('../../assets/Horta.png')}>
        <View style={styles.view1}>
          <ImageBackground
            style={styles.fundoStatus}
            source={require('../../assets/Fundo_Temperatura.png')}>
            <Text style={styles.textTem}>Temperatura {'\n'}{'   '}Ambiente</Text>
            <Text style={styles.textTem}> {temperatura}ºC</Text>
          </ImageBackground>
        </View>
        <View style={styles.view2}>
          <ImageBackground
            style={styles.fundoStatus}
            source={require('../../assets/Fundo_Umidade.png')}>
            <Text style={styles.textUmi}>Umidade do Ar</Text>
            <Text style={styles.textUmi}>{umidade} %</Text>
          </ImageBackground>
        </View>
        <View style={styles.view3}>
          <ImageBackground
            style={styles.fundoStatus}
            source={require('../../assets/Fundo_Umidade_Solo.png')}>
            <Text style={styles.textUmiSolo}>Umidade  do Solo</Text>
            <Text style={styles.textUmiSolo}>{umidade_solo}%</Text>
          </ImageBackground>
        </View>
        <TouchableOpacity style={styles.refreshButton} onPress={Atualizar}>
          <Text style={styles.refreshButtonText}>Atualizar</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};


