import * as React from 'react';
import { TextInput, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/google.png')} />

      <TextInput style={styles.paragraph}>
       Search or type URL
      </TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    backgroundColor: 'whitesmoke',
    padding: 12,
    margin: 50,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',  
    borderRadius: 4,
    width: 250,
    },
  logo: {
    margin:30,
    height: 40,
    width: 112,
  }
});
