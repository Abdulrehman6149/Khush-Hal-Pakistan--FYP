import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet, TouchableOpacity, SafeAreaView,FlatList } from 'react-native';
import { Rating } from 'react-native-ratings';
import COLORS from './Colors';
import LottieView from 'lottie-react-native';
import { StatusBar } from "expo-status-bar";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Feedback({ navigation }) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [allRatings, setAllRatings] = useState([]);

  useEffect(() => {
    fetchAllRatings();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchAllRatings();
    });
    return unsubscribe;
  }, [navigation]);

  const fetchAllRatings = async () => {
    const token = await AsyncStorage.getItem('token');
    fetch('http://192.168.43.25:5000/allratings', {
      headers: {
        'Authorization': 'bearer ' + token
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setAllRatings(data.posts);
      })
      .catch((error) => {
        console.error('Error fetching ratings:', error);
      });
  };

  const submitFeedback = async () => {
    if (comment.trim() === '' || rating === 0) {
      Alert.alert('Error', 'Please fill out all fields.');
    } else {
      const token = await AsyncStorage.getItem('token');
      fetch('http://192.168.43.25:5000/ratings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + token
        },
        body: JSON.stringify({ rating, comment }),
      })
        .then((response) => {
          if (response.ok) {
            Alert.alert('Success', 'Thank you for your feedback!');
            setComment('');
            setRating(0);
          } else {
            throw new Error('Error submitting feedback');
          }
        })
        .catch((error) => {
          console.error('Error submitting feedback:', error);
          Alert.alert('Error', 'An error occurred while submitting feedback.');
        });
    }
  };

  const renderRatingItem = ({ item }) => (
    <View style={{width: '95%'}}>
      <Text>Rating: {item.rating}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.LightGreen} />
      <Text style={styles.title}>Feedback</Text>
      <View style={{ width: '95%', height: 50, top: -18 }}>
        <LottieView
          autoPlay
          style={{
            width: '100%',
            marginLeft: 10,
            height: 200,
            backgroundColor: '#fff',
          }}
          source={require('../assets/Anim/F3.json')}
        />
      </View>
      <TextInput
        placeholder='Comment'
        style={styles.input}
        value={comment}
        onChangeText={setComment}
      />

      <Rating
        type="star"
        ratingCount={5}
        imageSize={30}
        onFinishRating={setRating}
        startingValue={rating}
        style={{ paddingVertical: 10, marginTop: 117, marginLeft: 170 }}
      />
      <TouchableOpacity onPress={submitFeedback}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
      
  <FlatList
  data={allRatings}
  renderItem={({ item }) => (
    <View key={item._id} style={{width: 200, height: 80, borderWidth: 2, borderColor: COLORS.LightGreen,margin: 3, borderRadius: 10, padding: 5}}>
     <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>{item.postedBy.name}</Text></View>
      <Text>{item.comment}</Text>
      <Text>Rating: {item.rating}</Text>

    </View>
  )}
  keyExtractor={(item) => item._id}
  ListHeaderComponent={<Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'flex-start'}}>All Ratings:</Text>}
/>
</SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    top: 30
  },
  ratingsContentContainer: {
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.LightGreen,
  },
  input: {
    padding: 10,
    borderWidth: 2,
    borderColor: COLORS.LightGreen,
    marginBottom: 20,
    borderRadius: 10,
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    color: COLORS.LightGreen,
    top: 140
  },
  button: {
    backgroundColor: COLORS.LightGreen,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: 250,
    height: 50,
    paddingLeft: 90,
    alignItems: 'center',
    color: '#fff',
    fontSize: 20,
    top: -20,
    fontWeight: 'bold',
  },
  // ratingsTitle: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   marginBottom: 10,
  // },
  // ratingItem: {
  //   borderWidth: 1,
  //   borderColor: COLORS.LightGreen,
  //   padding: 10,
  //   borderRadius: 10,
  //   marginBottom: 10,
  //   width: '90%',
  // },
  // ratingsContainer: {
  //   marginTop: 20,
  //   alignItems: 'flex-start',
  // },
});
