// screens/Workout.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header'; // Пример за компонент
import Footer from '../components/Footer'; // Пример за компонент
import WorkoutCard from '../components/WorkoutCard'; // Примерен компонент

export default function Workout() {
  return (
    <View style={styles.container}>
      <Header title="Your Workouts" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.text}>Choose a workout from the list below.</Text>

        {/* Примерни тренировъчни карти */}
        <WorkoutCard title="Full Body Workout" image="https://via.placeholder.com/150" />
        <WorkoutCard title="Chest and Arms" image="https://via.placeholder.com/150" />
        <WorkoutCard title="Leg Day" image="https://via.placeholder.com/150" />
        <WorkoutCard title="HIIT Training" image="https://via.placeholder.com/150" />

        <View style={styles.ctaContainer}>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Create Your Own Workout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 20, // За да осигурим място за Footer
  },
  ctaContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  ctaButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 10,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
