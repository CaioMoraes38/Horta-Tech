import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity,Image } from 'react-native';
import axios from 'axios';
import styles from './style';
import Status from '../Status';

export default function Irrigação () {

  const [ligar, setLigar] = useState('off');

  async function Rele () {
    try {
      await axios.get(`http://192.168.1.20/${ligar}`);
    } catch (error) {
      console.error('Erro ao controlar o relé:', error);
    }
    if(ligar =='on'){
      setLigar('off');
    }
    else{
      setLigar('on');
    }
    
   
  };
  return (
    <View style={styles.viewPrincipal}>
       {ligar==='off' &&(
        
        <ImageBackground
        style={styles.img}
        source={require('../../assets/Fundo_ligado.png')}>
      <View style={styles.viewButtonLigado}>
        <Text style={styles.texIrrigação}>
          Irrigação Ligada
        </Text>
          <TouchableOpacity 
            onPress={() => Rele('off')}>
            <Image
          source={require('../../assets/off.png')}
          style={styles.button}          
        />      
        <Text>
          Deligar Irrigação
        </Text>
      </TouchableOpacity>      
      </View>
    </ImageBackground>
      )}
      {ligar ==='on'&&(  
      <ImageBackground
      style={styles.img}
        source={require('../../assets/Fundo_ligado.png')}>
    
  
      <View style={styles.viewButtonDesligado}>
        <Text style={styles.texIrrigação}>
          Irrigação Deligada
        </Text>        
          <TouchableOpacity onPress={() => Rele('on')} >
            <Image
          source={require('../../assets/on.png')}
          style={styles.button}          
        />      
        <Text>
          Ligar Irrigação
        </Text>
         </TouchableOpacity>
      </View> 
     </ImageBackground>
      )}
    </View>
  );
};


