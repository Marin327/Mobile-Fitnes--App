// components/ProgressChart.js
import React from 'react';
import { View, Text, StyleSheet, ProgressBarAndroid, Platform } from 'react-native';

export default function ProgressChart({ progress = 0.5 }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress Chart</Text>
      {/* В зависимост от платформата показваме различен прогрес бар */}
      {Platform.OS === 'android' ? (
        <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={progress} />
      ) : (
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
        </View>
      )}
      <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  progressBarContainer: {
    width: '80%',
    height: 20,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
  },
  progressBar: {
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#3b82f6', // Син цвят за прогреса
  },
  progressText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
