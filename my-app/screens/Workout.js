import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WorkoutCard from '../components/WorkoutCard';

export default function Workout() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const toggleDarkMode = () => setIsDarkModeEnabled(prevState => !prevState);

  return (
    <SafeAreaView style={[styles.container, isDarkModeEnabled && styles.darkContainer]}>
      <Header title="Your Workouts" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={[styles.text, isDarkModeEnabled && styles.darkText]}>
          Choose a workout from the list below.
        </Text>

        {/* Примерни тренировъчни карти */}
        <WorkoutCard title="Full Body Workout" image="https://via.placeholder.com/150" />
        <WorkoutCard title="Chest and Arms" image="https://via.placeholder.com/150" />
        <WorkoutCard title="Leg Day" image="https://via.placeholder.com/150" />
        <WorkoutCard title="HIIT Training" image="https://via.placeholder.com/150" />

        <View style={styles.ctaContainer}>
          <TouchableOpacity style={[styles.ctaButton, isDarkModeEnabled && styles.darkCtaButton]}>
            <Text style={[styles.ctaButtonText, isDarkModeEnabled && styles.darkCtaButtonText]}>
              Create Your Own Workout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
      <TouchableOpacity style={styles.darkModeToggle} onPress={toggleDarkMode}>
        <Ionicons name={isDarkModeEnabled ? "sunny" : "moon"} size={24} color={isDarkModeEnabled ? '#fff' : '#000'} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  darkText: {
    color: '#fff',
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
  darkCtaButton: {
    backgroundColor: '#1DB954',
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  darkCtaButtonText: {
    color: '#000',
  },
  darkModeToggle: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 10,
    borderRadius: 50,
  },
});
