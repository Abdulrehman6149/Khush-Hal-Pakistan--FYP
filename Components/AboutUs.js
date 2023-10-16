import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import COLORS from './Colors';

export default function DeveloperTeamApp() {
  const developers = [
    {
        name: 'Abdul Rehman',
        role: 'UI/UX Designer',
        bio: 'Abdul is not an experienced UI/UX Designer with a passion for building beautiful and responsive user interfaces.',
        image: require('../assets/Dp3.jpg'),
    },
    {
        name: 'Rafia Aziz',
        role: 'Front/Backend Developer',
        bio: 'Rafia is a talented Front/backend developer who loves solving complex problems and building scalable and secure systems.',
        image: require('../assets/Dp.jpg'),
      },
    
    {
        name: 'Mashal',
        role: 'Developer/Tester',
        bio: 'Mashal is a skilled mobile developer who has a keen eye for design and a talent for building intuitive and user-friendly apps.',
        image: require('../assets/Dp1.jpg'),
    },
  ];

  return (
    <View style={styles.container}>
               <StatusBar backgroundColor={COLORS.LightGreen}/>
      <Text style={styles.title}> About Us</Text>
      {developers.map((developer) => (
 
          <View key={developer.name} style={styles.developerContainer}>
          <TouchableOpacity activeOpacity={0.7}>
            <Avatar
              rounded
              source={developer.image}
              size="large"
              containerStyle={styles.avatar}
            />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{developer.name}</Text>
            <Text style={styles.role}>{developer.role}</Text>
            <Text style={styles.bio}>{developer.bio}</Text>
          </View>
        </View>
   
      ))}
    </View>
  );
}

/**
 * 
 * 
 
 * 
 * 
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    top:35,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.LightGreen,
  },
  developerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderWidth: 2,
    borderColor: COLORS.LightGreen,
    borderRadius: 10,
    marginBottom: 20,
    width: '90%',
    top:15,
  },
  avatar: {
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: COLORS.LightGreen
  },
  role: {
    color: '#888',
    marginBottom: 10,
  },
  bio: {
    lineHeight: 22,
  },
});
