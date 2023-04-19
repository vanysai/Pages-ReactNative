import * as React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, } from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';


// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <AssetExample></AssetExample>
      <TouchableOpacity style={styles.botao1}>
        <Text style={{ color: 'white', textAlign: 'center' }}>GET STARTED</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao2}>
        <Text style={{ color: 'green', textAlign: 'center' }}>I ALREDY HAVE AN ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },
  botao1:{
    backgroundColor: 'green', 
    padding: 5, 
    marginRight:20, 
    marginLeft: 20, 
    fontSize: 100, 
    borderRadius: 10,
  },
  botao2:{
    backgroundColor: 'whitesmoke', 
    padding: 5, 
    fontColor: 'green',
    marginRight:20, 
    marginLeft: 20, 
    fontSize: 100,
    margin: 24,
    borderRadius: 10,
    textAlign:'center',

  },
  paragraph: {
    margin: 50,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
