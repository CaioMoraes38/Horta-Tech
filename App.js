import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes/Routes';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
  
  <NavigationContainer>
      <Routes />
  </NavigationContainer>   
   
  );
}
