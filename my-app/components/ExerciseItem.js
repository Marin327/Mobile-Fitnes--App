// components/ExerciseItem.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ExerciseItem({ name, reps, onPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.exerciseName}>{name}</Text>
        <Text style={styles.reps}>{reps} reps</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Ionicons name="ios-checkmark-circle" size={24} color="green" />
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
