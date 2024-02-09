import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewPrincipal: {
    width:'100%',
    height:'100%',
    paddingTop:10,
    backgroundColor:'#2f825f'
  
    
  },
  refreshButton: {
    position: 'absolute',
    bottom: 20,
    
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    padding: 10,
  },
  refreshButtonText: {
    color: '#000',
    fontSize: 16,
  },
  view1: {
  
    width: '100%',
    height: '25%',
  },
  
  view2: {
    
    marginTop: 30,
    width: '100%',
    height: '25%',
    
  },
  view3: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    marginTop: 30,
    
  },
  
  
  textTem: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
  },
  textUmi: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
  },
  textUmiSolo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
    
  },
  fundoStatus: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30, 
    overflow: 'hidden', 
  },
  
});

export default styles;
