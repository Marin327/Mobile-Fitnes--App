// components/ExerciseItem.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ExerciseItem({ name, reps, onPress }) {
  const [isChecked, setIsChecked] = useState(false);
  const scaleAnim = useState(new Animated.Value(1))[0]; // Анимация на бутона за отметка

  const handlePress = () => {
    // Плавен преход за анимация при натискане
    Animated.spring(scaleAnim, {
      toValue: 1.2, // Увеличаваме размера на бутона
      friction: 3,  // Плавност на анимацията
      useNativeDriver: true,
    }).start(() => {
      setIsChecked(!isChecked); // Променяме състоянието на отметката
      scaleAnim.setValue(1); // Връщаме го обратно към оригиналния размер
      onPress && onPress(); // Извикваме външната функция при натискане
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.exerciseName}>{name}</Text>
        <Text style={styles.reps}>{reps} reps</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <Ionicons 
            name={isChecked ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"} 
            size={24} 
            color={isChecked ? "green" : "#ccc"} 
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  textContainer: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  reps: {
    fontSize: 14,
    color: '#777',
  },
  button: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#e1f5fe',
  },
});
