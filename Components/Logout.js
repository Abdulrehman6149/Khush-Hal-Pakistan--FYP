import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

export default function Logout({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    try {
      const token = await AsyncStorage.getItem("token"); 
      console.log(token)

      if (token) {
        setIsLoading(true);
        const response = await fetch('http://192.168.0.105:8000/api/auth/logout', {
          method: 'POST',
          headers: {
            'auth-token': token
          }
        });
        const responseData = await response.json();
        if (responseData.success) {
          // clear token from storage
          await AsyncStorage.removeItem('token');
          setIsLoading(false);
          // navigate to login screen
          navigation.navigate('Login');
        } else {
          Alert.alert('Error', 'Failed to logout. Please try again.');
          setIsLoading(false);
        }
      } else {
        Alert.alert('Error', 'Token not found. Please login again.');
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to logout. Please try again.');
      setIsLoading(false);
    }
  };
  
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogout}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#008080',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
