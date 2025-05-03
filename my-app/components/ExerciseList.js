// components/ExerciseList.js
import React from 'react';
import { View, StyleSheet, ScrollView, Animated } from 'react-native';

export default function ExerciseList({ children }) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false} // Скриваме вертикалната скролбар линия
    >
      {React.Children.map(children, (child, index) => (
        <Animated.View
          style={[styles.item, { opacity: new Animated.Value(0).interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            })}]}
        >
          {child}
        </Animated.View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f4f4f4',
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 20,
  },
  item: {
    marginBottom: 15,
  },
});
