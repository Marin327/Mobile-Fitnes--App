import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';  // За управление на тъмна и светла тема
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Workout from '../screens/Workout';
import Details from '../screens/Details';  // Добавяме нов екран за детайли

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  const colorScheme = useColorScheme();  // Използваме системните цветови теми
  const activeTintColor = colorScheme === 'dark' ? '#fff' : '#4CAF50'; // Зелен за светла и бял за тъмна тема
  const inactiveTintColor = '#aaa';  // Студен сив за неактивните табове

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? '#333' : '#f8f8f8',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          tabBarActiveTintColor: activeTintColor,
          tabBarInactiveTintColor: inactiveTintColor,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
          tabBarActiveTintColor: activeTintColor,
          tabBarInactiveTintColor: inactiveTintColor,
        }}
      />
      <Tab.Screen
        name="Workout"
        component={Workout}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="fitness" color={color} size={size} />
          ),
          tabBarActiveTintColor: activeTintColor,
          tabBarInactiveTintColor: inactiveTintColor,
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={Details}  // Детайлен екран, когато потребителят избере нещо
          options={{ headerShown: true, title: 'Details' }}  // Персонализирано заглавие
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
