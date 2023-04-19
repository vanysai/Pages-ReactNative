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
      <AssetExample/>
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
    borderRadius: 10,
  },
  
  paragraph: {
    margin: 50,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
