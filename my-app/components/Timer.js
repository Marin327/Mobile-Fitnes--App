// components/Timer.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);  // Съхраняваме броя на секундите
  const [isRunning, setIsRunning] = useState(false);  // Управляваме състоянието на таймера

  useEffect(() => {
    let interval;
    
    if (isRunning) {
      // Стартиране на таймер
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);  // Обновява всеки 1 секунда
    } else if (!isRunning && seconds !== 0) {
      // Спиране на таймер
      clearInterval(interval);
    }

    // Почиства интервала, когато компонентът се премахне
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);  // Превключва състоянието на таймера
  };

  const handleReset = () => {
    setIsRunning(false);  // Спира таймера
    setSeconds(0);  // Рестартира броя на секундите
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formatTime(seconds)}</Text>
      <View style={styles.buttons}>
        <Button title={isRunning ? 'Stop' : 'Start'} onPress={handleStartStop} />
        <Button title="Reset" onPress={handleReset} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});
