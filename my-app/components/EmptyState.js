// components/EmptyState.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // Ако решим да използваме икони

// Параметри на компонента: изображение, съобщение, икона и размер
export default function EmptyState({
  message = 'No data found', // По подразбиране съобщение
  imageSource = require('../assets/empty.png'), // Изображение по подразбиране
  icon = null,  // Ако искаме да използваме икона вместо изображение
  iconSize = 50,  // Размер на иконата
  imageSize = 100, // Размер на изображението
}) {
  return (
    <View style={styles.container}>
      {/* Ако има икона, показваме иконата */}
      {icon ? (
        <Ionicons name={icon} size={iconSize} color="#6c757d" style={styles.icon} />
      ) : (
        <Image source={imageSource} style={[styles.image, { width: imageSize, height: imageSize }]} />
      )}

      <Text style={styles.message}>{message}</Text>
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
    marginBottom: 20,
  },
  icon: {
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: '#6c757d', // Светло сив текст
    textAlign: 'center',
  },
});
