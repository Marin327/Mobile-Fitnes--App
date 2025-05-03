import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Animated } from 'react-native';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import ProfileCard from '../components/ProfileCard';

const { width } = Dimensions.get('window'); // Получаваме ширината на екрана, за да правим адаптивни стилове

export default function Home() {
  const fadeAnim = new Animated.Value(0);  // Стойност за анимация (плавно появяване)

  // Анимиране на екрана при зареждане
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,  // Използваме native driver за по-добра производителност
    }).start();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Заглавие на екрана */}
      <Header title="Welcome to Your Fitness App!" />

      {/* Описание с анимация за плавно появяване */}
      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
        Get started with your fitness journey today!
      </Animated.Text>

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
    fontSize: 22,  // По-голям шрифт за по-добра четимост
    marginBottom: 20,
    textAlign: 'center', // Центриране на текста
    color: '#333', // Цвета на текста
    lineHeight: 28, // Увеличаваме междуредовото разстояние за по-добра четимост
    width: '90%',  // Ограничаваме ширината на текста за по-добро визуализиране на малки екрани
  },
});
