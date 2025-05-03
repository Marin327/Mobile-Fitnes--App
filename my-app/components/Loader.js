import React from 'react';
import { ActivityIndicator, View, StyleSheet, Animated } from 'react-native';

export default function Loader() {
  // Анимация за прозрачността на фона
  const fadeAnim = new Animated.Value(0);  // Начална стойност на прозрачността

  React.useEffect(() => {
    // Плавен преход на прозрачността
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0.8, // Задаваме стойност за фона (полупрозрачно)
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0, // Връщаме на началната стойност
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();  // Стартираме анимацията
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.overlay, { opacity: fadeAnim }]} />
      <ActivityIndicator size="large" color="#4CAF50" style={styles.loader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999, // За да е на най-горния слой
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Тъмна полупрозрачност
    borderRadius: 10,
  },
  loader: {
    zIndex: 10
