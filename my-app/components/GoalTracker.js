import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, Button, Animated } from 'react-native';

// Определяме какъв тип бар да се показва в зависимост от платформата
const ProgressBar = Platform.OS === 'android' ? ProgressBarAndroid : ProgressViewIOS;

export default function GoalTracker() {
  const [goal, setGoal] = useState(100); // Задаваме цели - 100 единици
  const [currentProgress, setCurrentProgress] = useState(50); // Показваме напредък към целта
  const progressAnim = new Animated.Value(currentProgress / goal); // Анимация на прогреса

  // Функция за обновяване на напредъка с анимация
  const updateProgress = (newProgress) => {
    Animated.timing(progressAnim, {
      toValue: newProgress / goal,
      duration: 500,
      useNativeDriver: false,
    }).start();

    setCurrentProgress(newProgress);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Goal</Text>
      <Text style={styles.progressText}>Progress: {currentProgress} / {goal}</Text>
      
      <Animated.View style={[styles.progressBarContainer]}>
        <ProgressBar
          styleAttr="Horizontal"
          indeterminate={false}
          progress={progressAnim}
          color="#4CAF50" // Зелен цвят за прогреса
        />
      </Animated.View>

      <Button title="Increase Progress" onPress={() => updateProgress(currentProgress + 10)} />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Keep up the good work!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  progressText: {
    fontSize: 16,
    marginBottom: 15,
    color: '#333',
  },
  progressBarContainer: {
    width: '100%',
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 20,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#777',
  },
});
