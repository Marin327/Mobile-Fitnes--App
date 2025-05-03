import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // За градиентен фон

export default function Header({ title }) {
  return (
    <LinearGradient
      colors={['#4CAF50', '#388E3C']} // Съчетаваме два зелени цвята за плавен преход
      style={styles.header}
    >
      <Text style={styles.title}>{title}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#4CAF50', // Зелен фон, ако не е достъпен LinearGradient
    borderBottomLeftRadius: 20, // Плавни заоблени ъгли
    borderBottomRightRadius: 20, // Плавни заоблени ъгли
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10, // За Android устройства
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)', // Лека сянка за текст
    textShadowOffset: { width: 0, height: 2 }, // Подобрено подчертаване
    textShadowRadius: 5,
  },
});
