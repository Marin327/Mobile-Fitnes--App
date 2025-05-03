// screens/Home.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header'; // Пример за компонент
import CustomButton from '../components/CustomButton'; // Пример за бутон
import ProfileCard from '../components/ProfileCard'; // Примерен компонент

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Заглавие на екрана */}
      <Header title="Welcome to Your Fitness App!" />
      
      {/* Описание */}
      <Text style={styles.text}>Get started with your fitness journey today!</Text>

      {/* Профилна карта (може да се персонализира) */}
      <ProfileCard />

      {/* Бутон за започване на тренировка */}
      <CustomButton title="Start Workout" onPress={() => { console.log("Workout started!"); }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Позволява на ScrollView да запълни целия екран
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8', // Лек фон за страницата
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center', // Центриране на текста
    color: '#333', // Цвета на текста
  },
});
