import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Video from 'react-native-video';
import Progress from 'react-native-progress';
import StarRating from 'react-native-star-rating';
import PushNotification from 'react-native-push-notification';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WorkoutDetail({ route, navigation }) {
  // Извличаме информацията за тренировката от пропсите
  const { title, image, description, exercises } = route.params;

  // Таймер
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Прогрес бар
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => prev + 0.01);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Оценка на упражнението
  const [rating, setRating] = useState(0);

  // Мотивиращи цитати
  const quotes = [
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "The only bad workout is the one that didn’t happen."
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Обратна връзка
  const [feedback, setFeedback] = useState('');

  return (
    <View style={styles.container}>
      <Header title={title} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Видео демонстрация */}
        <Video
          source={{ uri: 'https://www.youtube.com/watch?v=IT94xC35u6k' }} 
          style={styles.video} 
          controls={true} 
        />

        {/* Изображение на тренировката */}
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.description}>{description}</Text>

        {/* Мотивиращ цитат */}
        <Text style={styles.motivationText}>{randomQuote}</Text>

        {/* Прогрес бар */}
        <Progress.Bar progress={progress} width={300} style={styles.progressBar} />

        {/* Оценка на тренировка */}
        <StarRating
          disabled={false}
          maxStars={5}
          rating={rating}
          selectedStar={(rating) => setRating(rating)}
          fullStarColor={'#FFD700'}
        />

        {/* Списък с упражнения */}
        <Text style={styles.sectionTitle}>Exercises</Text>
        {exercises.map((exercise, index) => (
          <View key={index} style={styles.exerciseContainer}>
            <Text style={styles.exerciseName}>{exercise.name}</Text>
            <Text style={styles.exerciseReps}>Reps: {exercise.reps}</Text>
            <Text style={styles.exerciseSets}>Sets: {exercise.sets}</Text>
          </View>
        ))}

        {/* Списък с необходими материали */}
        <View style={styles.materialsContainer}>
          <Text style={styles.materialsTitle}>Required Materials:</Text>
          <Text style={styles.material}>- Dumbbells</Text>
          <Text style={styles.material}>- Mat</Text>
          <Text style={styles.material}>- Resistance Bands</Text>
        </View>

        {/* Обратна връзка от потребителя */}
        <View style={styles.feedbackContainer}>
          <TextInput
            style={styles.feedbackInput}
            placeholder="Leave your feedback..."
            multiline
            numberOfLines={4}
            onChangeText={setFeedback}
          />
          <TouchableOpacity onPress={() => alert('Feedback Submitted!')}>
            <Text style={styles.submitButtonText}>Submit Feedback</Text>
          </TouchableOpacity>
        </View>

        {/* Таймер */}
        <Text style={styles.timerText}>{timer}s</Text>

        {/* Напомняния */}
        <TouchableOpacity onPress={() => {
          PushNotification.localNotification({
            title: "Workout Reminder",
            message: "Time to get moving! Don’t forget your workout!",
          });
        }}>
          <Text style={styles.reminderButton}>Set Reminder</Text>
        </TouchableOpacity>

        {/* Връщане назад */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 20,
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
  motivationText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#4CAF50',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  progressBar: {
    marginVertical: 20,
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
  materialsContainer: {
    marginVertical: 20,
  },
  materialsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  material: {
    fontSize: 16,
    color: '#555',
  },
  feedbackContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
  },
  feedbackInput: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  submitButtonText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  timerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  reminderButton: {
    fontSize: 16,
    color: '#1E90FF',
    textAlign: 'center',
    marginVertical: 10,
  },
  backButton: {
    fontSize: 16,
    color: '#4CAF50',
    textAlign: 'center',
    marginVertical: 20,
  },
  video: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
});
