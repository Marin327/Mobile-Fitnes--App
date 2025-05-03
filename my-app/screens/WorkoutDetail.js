import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header'; // Компонент за заглавие
import Footer from '../components/Footer'; // Компонент за футър

export default function WorkoutDetail({ route, navigation }) {
  const { title, image, description, exercises } = route.params;
  const [isDarkModeEnabled, setIsDarkModeEnabled] = React.useState(false);

  const toggleDarkMode = () => setIsDarkModeEnabled(prevState => !prevState);

  return (
    <SafeAreaView style={[styles.container, isDarkModeEnabled && styles.darkContainer]}>
      <Header title={title} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={[styles.description, isDarkModeEnabled && styles.darkText]}>{description}</Text>

        <Text style={[styles.sectionTitle, isDarkModeEnabled && styles.darkText]}>Exercises</Text>
        {exercises.map((exercise, index) => (
          <View key={index} style={styles.exerciseContainer}>
            <Text style={[styles.exerciseName, isDarkModeEnabled && styles.darkText]}>{exercise.name}</Text>
            <Text style={styles.exerciseReps}>Reps: {exercise.reps}</Text>
            <Text style={styles.exerciseSets}>Sets: {exercise.sets}</Text>
          </View>
        ))}

        <View style={styles.ctaContainer}>
          <TouchableOpacity
            style={[styles.ctaButton, isDarkModeEnabled && styles.darkCtaButton]}
            onPress={() => navigation.navigate('Workout')}
          >
            <Text style={[styles.ctaButtonText, isDarkModeEnabled && styles.darkCtaButtonText]}>Back to Workouts</Text>
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
    backgroundColor: '#fff',
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 20, // За да осигурим място за футъра
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  darkText: {
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  exerciseContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  exerciseReps: {
    fontSize: 14,
    color: '#777',
  },
  exerciseSets: {
    fontSize: 14,
    color: '#777',
  },
  ctaContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  ctaButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 10,
    elevation: 5, // Добавяне на сянка
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
    padding: 12,
    borderRadius: 50,
  },
});
