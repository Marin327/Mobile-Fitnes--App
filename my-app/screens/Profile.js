import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AvatarUploader from '../components/AvatarUploader'; 

const Profile = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.header}>User Profile</Text>

        {/* Placeholder за аватар без снимка */}
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>No Image</Text>
        </View>

        {/* Компонент за качване на аватар */}
        <AvatarUploader />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Profile;
