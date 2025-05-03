import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Използваме икони

export default function InputField({ placeholder, secureTextEntry, value, onChangeText, style, icon, ...props }) {
  return (
    <View style={styles.container}>
      {/* Ако има икона, я показваме вляво в полето за текст */}
      {icon && (
        <Ionicons
          name={icon}
          size={20}
          color="#888"
          style={styles.icon}
        />
      )}

      <TextInput
        {...props}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        style={[styles.input, style]} // Събираме основния стил и добавения стил
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // За да сложим иконата вляво
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: '#f9f9f9', // Светъл фон
  },
  input: {
    flex: 1, // За да заеме цялото пространство
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    color: '#333',
    fontFamily: 'Roboto', // Примерен шрифт за по-добър вид
    transition: 'all 0.3s ease', // Плавни преходи при промяна на стилове
  },
  inputFocused: {
    borderColor: '#4CAF50', // Когато полето е фокусирано, рамката става зелена
    shadowColor: '#4CAF50', // Сянка около полето
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5, // За Android устройства
  },
  icon: {
    marginLeft: 10, // Разстояние между иконата и полето
  },
});
