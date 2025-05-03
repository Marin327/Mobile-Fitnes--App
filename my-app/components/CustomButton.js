// components/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // Ако иконите са нужни

export default function CustomButton({
  label,
  onPress,
  type = 'primary',
  icon = null, // Нов параметър за иконата
  iconPosition = 'left', // Позиция на иконата (ляво/дясно)
  width = 'auto', // Ширина на бутона
  height = 50, // Височина на бутона
}) {
  const renderIcon = icon ? (
    <Ionicons name={icon} size={20} color="#fff" style={iconPosition === 'left' ? styles.iconLeft : styles.iconRight} />
  ) : null;

  return (
    <TouchableOpacity
      style={[
        styles.btn,
        type === 'secondary' ? styles.secondary : styles.primary,
        { width, height }, // Можем да зададем ширината и височината
      ]}
      onPress={onPress}
      activeOpacity={0.8} // Стил за натискане
    >
      {icon && iconPosition === 'left' && renderIcon}
      <Text style={[styles.text, type === 'secondary' ? styles.secondaryText : styles.primaryText]}>
        {label}
      </Text>
      {icon && iconPosition === 'right' && renderIcon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    flexDirection: 'row',  // За да можем да подредим иконата и текста
  },
  primary: {
    backgroundColor: '#007bff', // Синьо за основния бутон
  },
  secondary: {
    backgroundColor: '#6c757d', // Сиво за вторичния бутон
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  primaryText: {
    color: '#fff',
  },
  secondaryText: {
    color: '#f8f9fa', // Светъл текст за вторичния бутон
  },
  iconLeft: {
    marginRight: 8, // Разстояние между иконата и текста
  },
  iconRight: {
    marginLeft: 8, // Разстояние между иконата и текста
  },
});
