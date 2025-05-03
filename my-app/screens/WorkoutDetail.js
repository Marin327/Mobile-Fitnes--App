// screens/WorkoutDetail.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Header from '../components/Header'; // Компонент за заглавие
import Footer from '../components/Footer'; // Компонент за футър

export default function WorkoutDetail({ route, navigation }) {
  // Извличаме информацията за тренировката от пропсите
  const { title, image, description, exercises } = route.params;

  return (
    <View style={styles.container}>
      <Header title={title} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.description}>{description}</Text>

        <Text style={styles.sectionTitle}>Exercises</Text>
        {exercises.map((exercise, index) => (
          <View key={index} style={styles.exerciseContainer}>
            <Text style={styles.exerciseName}>{exercise.name}</Text>
            <Text style={styles.exerciseReps}>Reps: {exercise.reps}</Text>
            <Text style={styles.exerciseSets}>Sets: {exercise.sets}</Text>
          </View>
        ))}

        <View style={styles.ctaContainer}>
          <TouchableOpacity
            style={styles.ctaButton}
            onPress={() => navigation.navigate('Workout')}
          >
            <Text style={styles.ctaButtonText}>Back to Workouts</Text>
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
    backgroundColor: '#fff',
    padding: 20,
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 20, // Осигуряваме място за футъра
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  exerciseContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  exerciseName: {
    fontSize: 16,
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
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
