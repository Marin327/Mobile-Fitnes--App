// components/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButton({ label, onPress, type = 'primary' }) {
  return (
    <TouchableOpacity
      style={[styles.btn, type === 'secondary' ? styles.secondary : styles.primary]}
      onPress={onPress}
    >
      <Text style={[styles.text, type === 'secondary' ? styles.secondaryText : styles.primaryText]}>
        {label}
      </Text>
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
});
