import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
    viewPrincipal: {
        flex:1,
        alignItems:'center' , 
        backgroundColor:'#317D42',
        width:'100%',    
        height:'100%',
        paddingTop:20
     },
    imgBatao:{
        height:120,
        width:120,
        borderRadius:90,
        marginLeft:10
    },
    
    title:{
        fontSize:40,
        fontWeight:'bold',
        color:'#FFFFFF',        
    },
    viewLogo:{
        width:'100%',
        height:'41%'
    },

    imgLogo:{  
        height:'100%',
        width:'100%',
        borderRadius:10,
        marginTop:20
    },   
    view1:{
        backgroundColor:'#8AE8DD',
        alignItems:'center',
        paddingTop:5,
        width:'100%',
        height:'100%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30        
    },
    img:{
        height:'100%',
        width:'100%',  
        borderTopLeftRadius:30,
        borderTopRightRadius:30 ,
        overflow:'hidden',
        alignItems:'center'       
    },
    viewbemvindo:{
        backgroundColor:'#317D42',
        alignItems:'center',
        height:'9%',
        width:'90%',
        borderRadius:30,  
        marginTop:15       
    },
    textbemvindo:{
        fontSize:50,
        fontWeight:'bold',
        color:'#FFFFFF', 
  
    },
    Btn:{
        alignItems:'center',
        padding:30
    },
    textBtn:{
        fontWeight:'bold',
        fontSize:17,
        color:'white'
    },
    textBtnIrrigação:{
        
        fontWeight:'bold',
        fontSize:17,
        marginTop:20,
        color:'white'
    },
    viewbutton:{
     flexDirection:'row',  
     backgroundColor:'#009278',
     width:'100%',
     height:'33%',
     justifyContent:'center',   
    },   
   
  });
  export default styles

 /**
  * <Button //view do botão
               onPress={()=>Alert.alert('Botão esta funcionando','Precione denovo')}
               title='Teste'
              color="red"/> 
  */