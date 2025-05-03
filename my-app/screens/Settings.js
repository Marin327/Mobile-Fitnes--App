import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // За икони

export default function Settings() {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const toggleNotifications = () => setIsNotificationsEnabled(previousState => !previousState);
  const toggleDarkMode = () => setIsDarkModeEnabled(previousState => !previousState);

  const handleChangePassword = () => {
    Alert.alert('Change Password', 'Password change functionality will be implemented here.');
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Logout', onPress: () => console.log('Logged out') },
    ]);
  };

  return (
    <View style={[styles.container, isDarkModeEnabled && styles.darkContainer]}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={[styles.header, isDarkModeEnabled && styles.darkHeader]}>Settings</Text>

        {/* Общи настройки */}
        <View style={[styles.settingItem, isDarkModeEnabled && styles.darkSettingItem]}>
          <Ionicons name="notifications-outline" size={24} color={isDarkModeEnabled ? '#fff' : '#333'} />
          <Text style={[styles.settingText, isDarkModeEnabled && styles.darkSettingText]}>Enable Notifications</Text>
          <Switch
            value={isNotificationsEnabled}
            onValueChange={toggleNotifications}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isNotificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>

        {/* Промяна на парола */}
        <View style={[styles.settingItem, isDarkModeEnabled && styles.darkSettingItem]}>
          <Ionicons name="lock-closed-outline" size={24} color={isDarkModeEnabled ? '#fff' : '#333'} />
          <Text style={[styles.settingText, isDarkModeEnabled && styles.darkSettingText]}>Change Password</Text>
          <TouchableOpacity onPress={handleChangePassword}>
            <Text style={[styles.link, isDarkModeEnabled && styles.darkLink]}>Change</Text>
          </TouchableOpacity>
        </View>

        {/* Тъмен режим */}
        <View style={[styles.settingItem, isDarkModeEnabled && styles.darkSettingItem]}>
          <Ionicons name="moon-outline" size={24} color={isDarkModeEnabled ? '#fff' : '#333'} />
          <Text style={[styles.settingText, isDarkModeEnabled && styles.darkSettingText]}>Dark Mode</Text>
          <Switch
            value={isDarkModeEnabled}
            onValueChange={toggleDarkMode}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkModeEnabled ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>

        {/* Изход */}
        <View style={[styles.settingItem, isDarkModeEnabled && styles.darkSettingItem]}>
          <Ionicons name="log-out-outline" size={24} color={isDarkModeEnabled ? '#fff' : '#333'} />
          <Text style={[styles.settingText, isDarkModeEnabled && styles.darkSettingText]}>Logout</Text>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={[styles.link, isDarkModeEnabled && styles.darkLink]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
    textAlign: 'center',
  },
  darkHeader: {
    color: '#fff',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingVertical: 15,
  },
  darkSettingItem: {
    borderBottomColor: '#444',
  },
  settingText: {
    fontSize: 18,
    color: '#333',
  },
  darkSettingText: {
    color: '#fff',
  },
  link: {
    color: '#1e90ff',
    fontSize: 18,
  },
  darkLink: {
    color: '#4fa3fc',
  },
});
