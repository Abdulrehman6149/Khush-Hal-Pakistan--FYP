import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
import axios from 'axios';
import * as Location from 'expo-location';
import COLORS from './Colors';
import Sky from '../assets/Sky.jpg';
import W1 from '../assets/W1.jpeg';


export default function Weather() {
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);
  const [searchText, setSearchText] = useState('');

  const API_KEY = 'c13ca2a5417a8db139d34c3460ea9f16';

  const getWeatherData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { latitude, longitude } = location.coords;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (err) {
      setError('Could not load weather data');
    }
    setIsLoading(false);
  };

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}`;
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (err) {
      setError('Could not load weather data');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setError('Permission to access location was denied');
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        getWeatherData();
      } catch (err) {
        setError('Could not get location');
      }
    };

    getLocation();
  }, []);

  const renderWeather = () => {
    if (isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      );
    } else if (error) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{error}</Text>
        </View>
      );
    } else if (!weatherData) {
      return (
        <View style={styles.noDataContainer}>
          <Text style={styles.noData}>No weather data available</Text>
        </View>
      );
    } else {
      const { name } = weatherData;
      const { temp, feels_like, temp_min, temp_max, humidity } = weatherData.main;
      const { description } = weatherData.weather[0];
      return (
        <View style={styles.weatherContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.cityName}>{name}</Text>
            <Image
              source={require('../assets/WeatherLoc.png')}
              style={{ width: 25, height: 25, top: 7, marginLeft: 19 }}
            /></View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.description}>{description}</Text>
            <Image
              source={require('../assets/Weather.png')}
              style={{ width: 30, height: 30, top: -5, marginLeft: 5 }}
            />
          </View>
          <View style={styles.temperatureContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.temperature}>{Math.round(temp - 273.15)}</Text>
              <Text style={{ color: 'black', fontSize: 50, top: 50 }}>°C</Text>
            </View>
            <Text style={styles.feelsLike}>Feels like {Math.round(feels_like - 273.15)}°C</Text>
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Min</Text>
              <Text style={styles.statValue}>{Math.round(temp_min - 273.15)}°C</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Max</Text>
              <Text style={styles.statValue}>{Math.round(temp_max - 273.15)}°C</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Humidity</Text>
              <Text style={styles.statValue}>{humidity}%</Text>
            </View>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={W1} style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter city name"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          onSubmitEditing={handleSearch}
        />
        {renderWeather()}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 10,
    top: 50,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 25,
    borderColor: '#fff',
    borderWidth: 3
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 50
  },
  loadingText: {
    color: 'black',
    fontSize: 18,
    marginTop: 10,
  },
  errorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 50
  },
  error: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  noDataContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  noData: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  weatherContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 70
  },
  cityName: {
    color: 'black',
    fontSize: 30,
    marginBottom: 10,
    marginLeft: -15,
  },
  description: {
    color: 'black',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  temperatureContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  temperature: {
    color: 'black',
    fontSize: 100,
    marginRight: 10,
    marginLeft: 8
  },
  feelsLike: {
    color: 'black',
    fontSize: 18,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 100
  },
  stat: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  statLabel: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5,

  },
  statValue: {
    color: 'black',
    fontSize: 24,
    marginLeft: 8,
    fontWeight: 'bold',
  },
});


