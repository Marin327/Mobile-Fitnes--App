import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);  // Съхраняваме броя на секундите
  const [isRunning, setIsRunning] = useState(false);  // Управляваме състоянието на таймера
  const [buttonScale] = useState(new Animated.Value(1)); // Анимация на бутона

  useEffect(() => {
    let interval;
    
    if (isRunning) {
      // Стартиране на таймер
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);  // Обновява всеки 1 секунда
    } else if (!isRunning && seconds !== 0) {
      // Спиране на таймера
      clearInterval(interval);
    }

    // Почиства интервала, когато компонентът се премахне
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);  // Превключва състоянието на таймера
    
    // Анимираме бутона при натискане
    Animated.sequence([
      Animated.spring(buttonScale, {
        toValue: 0.8,
        friction: 3,
        useNativeDriver: true,
      }),
      Animated.spring(buttonScale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }),
    ]).start();
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
        <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
          <TouchableOpacity
            style={[styles.button, isRunning ? styles.stopButton : styles.startButton]}
            onPress={handleStartStop}
          >
            <Text style={styles.buttonText}>{isRunning ? 'Stop' : 'Start'}</Text>
          </TouchableOpacity>
        </Animated.View>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  timer: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  startButton: {
    backgroundColor: '#4CAF50',
  },
  stopButton: {
    backgroundColor: '#FF5722',
  },
  resetButton: {
    backgroundColor: '#607D8B',
    marginLeft: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});
