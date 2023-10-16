import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "./Colors";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage"
import ProductDescrip from '../Components/ProductDescrip'
import Sell from './Sell'

const MarketPlace = ({ navigation }) => {
  const [data, setData] = useState([]);


  const fetchPosts = async () => {
    const token = await AsyncStorage.getItem('token');
    fetch('http://192.168.43.25:5000/allproducts', {
      headers: {
        'Authorization': 'bearer ' + token
      }
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setData(result.posts);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchPosts();

  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchPosts();
    });
    return unsubscribe;
  }, [navigation]);


  const navigateToProductDetails = (item) => {
    navigation.navigate("ProductDescrip", { product: item, sellerId: item.postedBy.id });
  };

  // const renderItem = ({ item }) => {
  //   return (
  //     <View>
  //       <Text style={{ fontSize: 14, top: 10, marginLeft: 16, fontWeight: 'bold' }}>{item.title}</Text>
  //       {item.photo.map(photo => (
  //         <Image
  //           key={photo}
  //           source={{ uri: photo }}
  //           style={{ width: '100%', height: 350, top: 14 }}
  //         />
  //       ))}
  //     </View>
  //   );
  // };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar backgroundColor={COLORS.LightGreen} />
      <View style={{ width: '100%', height: '7%', backgroundColor: COLORS.LightGreen, justifyContent: 'space-between', flexDirection: 'row' }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff', marginLeft: 5 }}>MarketPlace </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Image
            source={require('../assets/WSearch.png')}
            style={{ width: 35, height: 35, marginRight: 5, top: 5 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: '#fff', width: '100%', height: '8%', top: 7, flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.navigate("Sell")}>
          <View style={{ backgroundColor: '#EDF1D6', height: 55, width: 347, flexDirection: 'row', borderRadius: 20, marginLeft: 6 }}>
            <Image
              source={require('../assets/Sell.png')}
              style={{ height: 40, width: 40, top: 6, marginLeft: 30 }}
            />
            <Text style={{ color: COLORS.LightGreen, fontSize: 20, fontWeight: 'bold', marginLeft: 13, top: 13 }}>Sell Your Products Now</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ width: '100%', height: 3, backgroundColor: '#EDF1D6', marginTop: 13 }}></View>
      <Text style={{ fontSize: 25, fontWeight: 'bold', color: COLORS.LightGreen, marginLeft: 7 }}>PRODUCTS</Text>
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          numColumns={2} // Display two items per row
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigateToProductDetails(item)}>
              <View style={{ flex: 1, height: 200, backgroundColor: '#fff', borderRadius: 20, margin: 9 }}>
                <Image
                  source={{ uri: item.photo[0] }}
                  style={{ resizeMode: 'cover', height: '100%', width: '100%', borderRadius: 20 }}
                />
                <Image
                  source={require('../assets/WArrowR.png')}
                  //   style={{ width: 45, height: 45, top: 150, marginLeft: 10, position: 'absolute'}}
                  style={{ width: 45, height: 45, marginLeft: 115, top: -47 }}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

    </SafeAreaView>
  );
};

export default MarketPlace;
