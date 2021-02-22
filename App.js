import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'white',} }>
        <Text style={styles.text,styles.high }> avec une taille de texte 30</Text>
        <Text style={styles.text,styles.center }> avec du texte centré</Text>
        <Text style={ styles.text,styles.bold}>avec du texte en gras</Text>
      </View>
      <Image
        source={{ uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png' }}
        style={{ height: 80, width: 270 }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3CAEA3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 80,
    marginBottom: 80,
  },
  high: {
    fontSize: 30,
  },
  center: {
    textAlign: 'center',
  },
  bold: {
    fontWeight: 900,
  },
});
