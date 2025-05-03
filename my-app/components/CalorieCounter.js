// components/CalorieCounter.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function CalorieCounter() {
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState('');
  const [foodList, setFoodList] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);

  // Функция за добавяне на храна и калории
  const addFood = () => {
    if (!food || !calories || isNaN(calories)) {
      alert('Please enter valid food and calorie values');
      return;
    }

    const newFood = { id: Date.now().toString(), food: food, calories: parseInt(calories) };
    setFoodList((prevList) => [...prevList, newFood]);
    setTotalCalories((prevTotal) => prevTotal + newFood.calories);
    setFood('');
    setCalories('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calorie Counter</Text>

      {/* Въвеждане на храна и калории */}
      <TextInput
        style={styles.input}
        placeholder="Enter food item"
        value={food}
        onChangeText={setFood}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter calories"
        value={calories}
        keyboardType="numeric"
        onChangeText={setCalories}
      />

      <Button title="Add Food" onPress={addFood} />

      {/* Показване на общия брой калории */}
      <Text style={styles.totalCalories}>Total Calories: {totalCalories}</Text>

      {/* Списък с добавените храни и калории */}
      <FlatList
        data={foodList}
        renderItem={({ item }) => (
          <View style={styles.foodItem}>
            <Text style={styles.foodText}>{item.food} - {item.calories} kcal</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  totalCalories: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  foodItem: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  foodText: {
    fontSize: 16,
    fontWeight: 'normal',
  },
});
