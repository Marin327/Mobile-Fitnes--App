// components/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#4CAF50', // Зелен фон за по-активен и приятен изглед
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: '#000', // Сенки за по-дълбок ефект
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', // Белият цвят за текст, за да контрастира с фона
    textAlign: 'center', // Центриране на текста
  },
});
