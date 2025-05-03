// components/AvatarUploader.js
import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function AvatarUploader({ setAvatar }) {
  const [image, setImage] = useState(null);  // Съхраняваме избраната снимка

  // Функция за отваряне на Image Picker и избиране на снимка
  const pickImage = async () => {
    // Проверка за разрешение за достъп до галерията на устройството
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('You need to grant permission to access the gallery!');
      return;
    }

    // Отваряме Image Picker
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!pickerResult.cancelled) {
      setImage(pickerResult.uri);  // Ако няма отказ, задаваме избраното изображение
      setAvatar(pickerResult.uri);  // Изпращаме снимката към родителския компонент (например Profile)
    }
  };

  // Функция за премахване на избраната снимка
  const removeImage = () => {
    Alert.alert('Confirm', 'Are you sure you want to remove the avatar?', [
      { text: 'Cancel' },
      {
        text: 'Remove',
        onPress: () => {
          setImage(null); // Премахваме изображението
          setAvatar(null); // Премахваме изображението и от родителския компонент
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Your Avatar</Text>

      {/* Показване на избраното изображение */}
      {image ? (
        <View style={styles.avatarContainer}>
          <Image source={{ uri: image }} style={styles.avatar} />
          <Button title="Remove Avatar" onPress={removeImage} />
        </View>
      ) : (
        <Text style={styles.placeholder}>No avatar selected</Text>
      )}

      {/* Бутон за избор на изображение */}
      <Button title="Pick an Image" onPress={pickImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  placeholder: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
});
