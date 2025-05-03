import React from 'react';
import { View, Text, StyleSheet, Animated, Platform } from 'react-native';

export default function ProgressChart({ progress = 0.5 }) {
  const animatedWidth = new Animated.Value(0);

  // Анимация на прогрес бара
  React.useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: progress * 100,
      duration: 1000, // 1 секунда за анимацията
      useNativeDriver: false, // Използваме фалшивия драйвер за анимацията на ширината
    }).start();
  }, [progress]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress Chart</Text>

      {/* В зависимост от платформата показваме различен прогрес бар */}
      {Platform.OS === 'android' ? (
        <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={progress} />
      ) : (
        <View style={styles.progressBarContainer}>
          <Animated.View
            style={[styles.progressBar, { width: animatedWidth }]}
          />
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
    color: '#333',
  },
  progressBarContainer: {
    width: '80%',
    height: 20,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5, // Добавяне на сянка за Android
  },
  progressBar: {
    height: '100%',
    borderRadius: 10,
    backgroundColor: 'linear-gradient(90deg, #4CAF50, #388E3C)', // Градиентен цвят за прогреса
  },
  progressText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});
