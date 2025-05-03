import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // За градиентен фон

const ProfileCard = ({ name, bio, image }) => {
  return (
    <LinearGradient
      colors={['#4CAF50', '#388E3C']} // Градиент с два нюанса на зелено
      style={styles.card}
    >
      <Image source={{ uri: image }} style={styles.profileImage} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.bio}>{bio}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    margin: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6, // Повече сянка за Android
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 4,
    borderColor: '#fff', // Бяла рамка около изображението
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff', // По-светъл текст за контраст
    textAlign: 'center',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: '#f0f0f0', // Светъл цвят за текста
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default ProfileCard;
