import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Градиентен фон
import { Calendar } from 'react-native-calendars'; // Календар
import AvatarUploader from '../components/AvatarUploader'; 

const Profile = () => {
  const [avatar, setAvatar] = useState(null);
  const [completedWorkouts, setCompletedWorkouts] = useState(3); // Пример: 3 завършени тренировки
  const [isAvatarLoading, setIsAvatarLoading] = useState(false); // Състояние за показване на аватар

  const goal = 5; // Цел: 5 тренировки на седмица
  const progress = (completedWorkouts / goal) * 100;

  // Анимация на аватара
  const avatarOpacity = new Animated.Value(0);
  const fadeInAvatar = () => {
    Animated.timing(avatarOpacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <LinearGradient
      colors={['#FF8C00', '#FF6347']}
      style={styles.container} 
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.header}>User Profile</Text>

        {/* Прогрес и цели */}
        <View style={styles.goalContainer}>
          <Text style={styles.goalText}>Goal: {goal} Workouts This Week</Text>
          <Text style={styles.goalText}>Progress: {completedWorkouts}/{goal}</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: `${progress}%` }]} />
          </View>
        </View>

        {/* Поставяне на аватар */}
        <View style={styles.avatarContainer}>
          {avatar ? (
            <Animated.Image 
              source={{ uri: avatar }} 
              style={[styles.avatar, { opacity: avatarOpacity }]}
              onLoad={fadeInAvatar}
            />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarText}>No Image</Text>
            </View>
          )}
        </View>

        {/* Компонент за качване на аватар */}
        <AvatarUploader setAvatar={setAvatar} />

        {/* Календар за тренировки */}
        <View style={styles.calendarContainer}>
          <Calendar
            markedDates={{
              '2025-05-01': { selected: true, marked: true, selectedColor: 'blue' },
              '2025-05-02': { selected: true, marked: true, selectedColor: 'blue' },
            }}
          />
        </View>

        {/* Таймер за тренировка */}
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>Workout Timer: 00:30:00</Text>
        </View>

        {/* Мотивационен текст */}
        <View style={styles.motivationContainer}>
          <Text style={styles.motivationText}>Keep pushing, you're doing great!</Text>
        </View>

        {/* Бутон за задаване на нова тренировка */}
        <Button 
          title="Complete Workout"
          onPress={() => setCompletedWorkouts(completedWorkouts + 1)}
          color="#FF6347"
        />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 20,
  },
  goalContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  goalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  progressBar: {
    width: '100%',
    height: 8,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    marginTop: 10,
  },
  progress: {
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#4CAF50',
  },
  avatarContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  calendarContainer: {
    marginBottom: 20,
    width: '100%',
  },
  timerContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  timerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  motivationContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  motivationText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#4CAF50',
  },
});

export default Profile;
