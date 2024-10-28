import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function GardenScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back, Bash.</Text>
      <Text>It is week 5. Your group has grown 10 plants so far!</Text>
      <Image
        source={require('../assets/images/garden_placeholder.png')}
        style={styles.gardenImage}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#e0f7fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00695c',
    marginBottom: 20,
  },
  gardenImage: {
    width: 300,
    height: 300,
  },
});
