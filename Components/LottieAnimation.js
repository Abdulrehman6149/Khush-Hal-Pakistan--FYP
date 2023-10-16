import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View, TouchableOpacity, Image, Text, ImageBackground, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';
import { darkGreen } from './Constants';
import COLORS from './Colors';

export default function LottieAnimation(props) {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ width: '100%', height: '80%' }}>
        <View style={{ width: '100%', flexDirection: 'row', height: '35%' }} >
          <View style={{ width: '50%', height: '100%' }}>
            <LottieView
              autoPlay
              ref={animation}
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fff',
                borderColor: COLORS.LightGreen,
                borderWidth: 0.5
              }}
              source={require('../assets/Anim/FarmerStat.json')}
            />
          </View>
          <View style={{ width: '50%', height: '100%' }}>
            <LottieView
              autoPlay
              ref={animation}
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fff',
                borderColor: COLORS.LightGreen,
                borderWidth: 0.5
              }}
              source={require('../assets/Anim/GrowingPlant.json')} />
          </View>
        </View>

        <View style={{ width: '100%', flexDirection: 'row', height: '27%' }} >
          <View style={{ width: '45%', height: '100%' }}>
            <LottieView
              autoPlay
              ref={animation}
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fff',
                borderColor: COLORS.LightGreen,
                borderWidth: 0.5
              }}
              source={require('../assets/Anim/Avocado.json')} />
          </View>
          <View style={{ width: '60%', height: '100%' }}>
            <LottieView
              autoPlay
              ref={animation}
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fff',
                borderColor: COLORS.LightGreen,
                borderWidth: 0.5
              }}
              source={require('../assets/Anim/Truck.json')} />
          </View>
        </View>
        <Text style={{ fontSize: 30, alignSelf: 'center', top: 20, fontWeight: 'bold', color: COLORS.DarkGreen }}>Welcome To</Text>
        <Text style={{ fontSize: 25, alignSelf: 'center', top: 20, fontWeight: 'bold', color: COLORS.DarkGreen }}>Khush Hal Pakistan</Text>
        <Text style={{ fontSize: 18, alignSelf: 'center', top: 40, fontWeight: 'bold', color: COLORS.LightGreen }}>It's your farm; it's your story.Take the opportunity to share it.</Text>
      </View>

      <View style={{ width: '90%', height: 60, borderRadius: 10, top: 70, marginLeft: 17, backgroundColor: COLORS.LightGreen, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Users")}>
          <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 20 }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    padding: 20
  },
  buttonContainer: {
    paddingTop: 20,
  },
});