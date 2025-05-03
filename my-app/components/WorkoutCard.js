import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function WorkoutCard({ title, image }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 15,  // По-гладки ъгли
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,  // за Android устройства
    overflow: 'hidden',  // За да не излизат изображението и други елементи извън границите
  },
  image: {
    width: '100%',
    height: 180,  // Малко по-голямо изображение
    borderRadius: 15,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginTop: 8, // Малко пространство над заглавието
    textTransform: 'uppercase', // За по-модерен вид
  },
});
