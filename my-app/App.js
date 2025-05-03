import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'; // Градиентен фон
import { View, StyleSheet } from 'react-native';

// Екрани
import Home from './screens/Home';
import Profile from './screens/Profile';
import Workout from './screens/Workout';

// FitnessBackground компонент за динамичен фон
const FitnessBackground = ({ children }) => {
  return (
    <LinearGradient
      colors={['#FF6347', '#FF8C00']} // Градиент между червено и оранжево
      style={styles.gradientContainer}
    >
      {/* Полупрозрачен слой за допълнителен ефект */}
      <View style={styles.overlay} />
      {/* Основно съдържание */}
      <View style={styles.content}>{children}</View>
    </LinearGradient>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <FitnessBackground>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home-outline';
              } else if (route.name === 'Workouts') {
                iconName = 'barbell-outline';
              } else if (route.name === 'Profile') {
                iconName = 'person-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#1e90ff', // Син цвят за активни табове
            tabBarInactiveTintColor: 'gray', // Сив цвят за неактивни табове
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Workouts" component={Workout} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </FitnessBackground>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Полупрозрачен слой, който покрива целия екран
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Полупрозрачен черен слой
  },
  content: {
    flex: 1,
  },
});
