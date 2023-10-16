import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import COLORS from './Colors';

const SellerProfile = ({ route, navigation }) => {
  const { product, sellerId } = route.params;
  console.log({ sellerId })
  const [sellerPosts, setSellerPosts] = useState([]);

  const fetchSellerPosts = () => {
    fetch(`http://192.168.43.25:5000/personalproducts${sellerId}`)
      .then(response => response.json())
      .then(data => {
        setSellerPosts(data.myPosts);
      })
      .catch(error => {
        // console.log(error);
      });
  };

  useEffect(() => {
    fetchSellerPosts();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground source={require('../assets/back.jpg')}
        style={{
          height: '63%',
          width: '100%',
          marginTop: -39,
        }}
      >
      </ImageBackground>
      <View style={style.container}>
        <Image
          source={require('../assets/Dp.jpg')}
          style={style.border}
        />
      </View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', top: -105, color: COLORS.LightGreen, marginLeft: 5, }}>{product.postedBy.name}
      </Text>
      <View style={{ borderRadius: 10, borderWidth: 2, borderColor: COLORS.LightGreen, width: '90%', height: 100, top: -90, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', width: '70%', height: 30, backgroundColor: '#FFF', alignSelf: 'center' }}>
          <Image
            source={require('../assets/Email.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
          <Text style={{ color: COLORS.DarkGreen, fontSize: 17, marginLeft: 10 }}>{product.postedBy.email}</Text>
        </View>
        <View style={{ flexDirection: 'row', width: '70%', height: 30, backgroundColor: '#FFF', alignSelf: 'center' }}>
          <Image
            source={require('../assets/Call.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
          <Text style={{ color: COLORS.DarkGreen, fontSize: 17, marginLeft: 10 }}>0{product.contact}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    borderRadius: 200,
    backgroundColor: '#FFF',
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 190,
    alignItems: 'center',
    justifyContent: 'center'
  },
  border: {
    height: '95%',
    width: '95%',
    backgroundColor: '#fff',
    borderRadius: 200,
    borderWidth: 2,
    borderColor: '#fff',
  }
});


export default SellerProfile;
