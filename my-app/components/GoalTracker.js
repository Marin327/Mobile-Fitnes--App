// components/GoalTracker.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ProgressBarAndroid, ProgressViewIOS } from 'react-native';

// Определяме какъв тип бар да се показва в зависимост от платформата
const ProgressBar = Platform.OS === 'android' ? ProgressBarAndroid : ProgressViewIOS;

export default function GoalTracker() {
  const [goal, setGoal] = useState(100); // Задаваме цели - 100 единици
  const [currentProgress, setCurrentProgress] = useState(50); // Показваме напредък към целта

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Goal</Text>
      <Text style={styles.progressText}>Progress: {currentProgress} / {goal}</Text>
      <ProgressBar
        styleAttr="Horizontal"
        indeterminate={false}
        progress={currentProgress / goal}
        color="#4CAF50" // Зелен цвят за прогреса
      />
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  progressText: {
    fontSize: 16,
    marginBottom: 15,
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
