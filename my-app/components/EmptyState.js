// components/EmptyState.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function EmptyState({ message }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/empty.png')} // Тук можеш да добавиш икона или изображение за празно състояние
        style={styles.image}
      />
      <Text style={styles.message}>{message || 'No data found'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: '#6c757d', // Светло сив текст
    textAlign: 'center',
  },
});
