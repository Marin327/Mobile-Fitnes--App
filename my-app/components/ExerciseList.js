// components/ExerciseList.js
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

export default function ExerciseList({ children }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    marginTop: 20,
  },
});
