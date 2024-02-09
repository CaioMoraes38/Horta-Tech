import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
   
    viewPrincipal:{
       height:'100%',
       width:'100%',
       justifyContent:'flex-end',
       backgroundColor:'#8AE8DD'
    },
   
    img:{
        overflow:'hidden',
        borderTopLeftRadius:30,
        borderTopRightRadius:30, 
    },
    viewButtonDesligado:{
        height:'95%',
        width:'100%',
        alignItems:'center',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,       
        
    },
    viewButtonLigado:{
        height:'95%',
        width:'100%',
        alignItems:'center',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,       
        
    },
    button:{
        height:100,
        width:100,
        borderRadius:90,
        marginTop:30,
       
    },
    texIrrigação:{
        fontWeight:'bold',
        fontSize:30,
        
    }
    

  });
  export default styles
