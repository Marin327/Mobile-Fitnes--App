// components/InputField.js
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function InputField({ placeholder, secureTextEntry, value, onChangeText, style, ...props }) {
  return (
    <TextInput
      {...props}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      style={[styles.input, style]} // Може да добавите допълнителни стилове от родителския компонент
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc', // Светло сивата линия около полето
    padding: 12,
    borderRadius: 8, // Закръглени ъгли
    marginVertical: 10, // Малко разстояние между полетата
    fontSize: 16, // Нормален размер на шрифта
    backgroundColor: '#f9f9f9', // Светъл фон, за да изглежда по-приветливо
    color: '#333', // Тъмен текст за по-добра четимост
  },
});
