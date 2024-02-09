import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../Welcome';
import Status from '../Status';
import Irrigação from '../Irrigação';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      options={{
        title:'',
        headerTransparent:true,
        headerShown:false
      }        
      }
      name="Welcome" component={Welcome} />
      <Stack.Screen 
      options={{
        title:'',
        headerTransparent:true,
        headerShown:false
      }        
      }
      name="Status" component={Status}
        />  
      <Stack.Screen
      options={{
        title:'',
        headerTransparent:true,
        headerShown:false
      }        
      }
       name="Irrigação" component={Irrigação}/>

    </Stack.Navigator>
  );
  
}
export default Routes;