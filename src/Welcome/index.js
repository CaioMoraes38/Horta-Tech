import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity,Button,Image,ImageBackground, SafeAreaView,Alert} from 'react-native';
import styles from './style';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function Welcome({navigation}) {
  return (
  <View style ={styles.viewPrincipal}>       
      <Text style={styles.title}>
    Horta   
        </Text>
        <Text style={styles.title}>
          Tech
        </Text>
      <View style={styles.view1}>       
      
          <View style={styles.viewbemvindo}>
            <Text style={styles.textbemvindo}>
              Bem Vindo
            </Text>
            </View> 
            <View style={styles.viewLogo}>
              <Image
              style={styles.imgLogo}
              source={require('../../assets/a.png')}/>
            </View>       
        <View style={styles.viewbutton}>                 
            <TouchableOpacity 
            style={styles.Btn}
            onPress={()=> navigation.navigate('Status')}>  
          <Image
          source={require('../../assets/Btn-Umidade.png')}
          style={styles.imgBatao}          
        />          
        <Text style={styles.textBtn}>Temperatura </Text>
        <Text style={styles.textBtn}>
        e 
        </Text>
        <Text style={styles.textBtn}>
        Umidade
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Btn}
        onPress={()=>navigation.navigate('Irrigação')}> 
        <Image
          source={require('../../assets/Btn-Irrigação.png')}
          style={styles.imgBatao}          
        />        
       <Text style={styles.textBtnIrrigação}>Irrigação</Text>
      </TouchableOpacity>                         
      </View>         
   
      </View>    
    </View>
  );
}