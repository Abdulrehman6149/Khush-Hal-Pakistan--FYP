import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from './Colors'
import { StatusBar } from "expo-status-bar";
import { TextInput } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import axios from 'axios'
import { Card, Paragraph } from 'react-native-paper'

const Sell = ({ navigation }) => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [condition, setCondition] = useState("")
  const [contact, setContact] = useState("")
  const [description, setDescription] = useState("")
  const [images, setImages] = useState([])
  const scrollView = useRef();
  let Increment = 0


  const pickMultipleImages = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
      base64: true,
      assetType: "photos",
    });

    if (!result.canceled) {
      const selectedAssets = result.assets;
      const selectedUris = selectedAssets.map((asset) => asset.uri);
      setImages((images) => [...images, ...selectedUris]);
    }
  };


  const sendToBackend = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("contact", contact);
      formData.append("description", description);

      for (let i = 0; i < images.length; i++) {
        formData.append("myProduct", {
          uri: images[i],
          type: "image/jpeg",
          name: `image${i}.jpg`,
        });
      }

      const DEMO_TOKEN = await AsyncStorage.getItem("token");
      try {
        if (DEMO_TOKEN !== "null") {
          console.log(DEMO_TOKEN)
          const response = await fetch('http://192.168.43.25:5000/createproduct', {
            method: 'POST',
            headers: {
              Accept: "application/json",
              authorization: `bearer ${DEMO_TOKEN}`,
              "Content-Type": "multipart/form-data",
            },
            body: formData,
          });

          const responseData = await response.json();
          if (responseData.success) {
            navigation.navigate("MarketPlace");
          }
        }
        else {
          console.log("token not found")
        }
      }
      catch (e) {
        console.log(e);
      }
    }
    catch (e) {
      console.log(e)
    }
  };



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar backgroundColor={COLORS.LightGreen} />
      <View style={{ width: '100%', height: 35, backgroundColor: COLORS.LightGreen, justifyContent: 'space-between', flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.navigate("MarketPlace")}>
          <Image
            source={require('../assets/WArrowL.png')}
            style={{ width: 30, height: 30, marginLeft: 7 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={sendToBackend}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff', marginRight: 12 }}>
            Publish
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: '90%', height: 115, alignItems: 'center', top: 13, borderRadius: 10, backgroundColor: '#fff', borderWidth: 2, borderColor: COLORS.PaleGreen, alignSelf: 'center' }}>
        {images.length === 0 ? ( //if there are no images
          <TouchableOpacity onPress={pickMultipleImages}>
            <Image
              source={require('../assets/Photo.png')}
              style={{ width: 50, height: 50, top: 20, marginLeft: 23 }}
            />
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.LightGreen, top: 20 }}>Add Your Photo</Text>
          </TouchableOpacity>) : (
          <>
            {/* Display selected Images */}
            <ScrollView
              ref={scrollView}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={16}
            >
              {images.map((item, index) => (
                <Card key={index}>
                  <Card.Content>
                    <Paragraph>Image </Paragraph>
                  </Card.Content>
                  <Card.Cover source={{ uri: item }} />
                </Card>
              ))}
            </ScrollView>
          </>
        )}
      </View>
      <View style={{ width: '90%', height: 30, top: 15, alignSelf: 'center' }}>
        <Text style={{ fontSize: 12, color: COLORS.LightGreen }}>Note: Choose The Picture That Best Describe's Your Product</Text>
      </View>
      <TextInput placeholder='Title' placeholderTextColor={COLORS.LightGreen} style={{ width: '90%', height: 60, borderWidth: 2, borderColor: COLORS.PaleGreen, borderRadius: 10, alignSelf: 'center', top: 15, paddingLeft: 10, fontWeight: 'bold', color: COLORS.LightGreen }} value={title} onChangeText={setTitle} />
      <View style={{ width: '90%', height: 30, marginLeft: 3, alignSelf: 'center', top: 20 }}>
        <Text style={{ fontSize: 12, color: COLORS.LightGreen }}>Select A Suitable Title Despicting Product Qualities</Text>
      </View>
      <TextInput placeholder='Price' placeholderTextColor={COLORS.LightGreen} style={{ width: '90%', height: 60, borderWidth: 2, borderColor: COLORS.PaleGreen, borderRadius: 10, alignSelf: 'center', top: 17, paddingLeft: 10, fontWeight: 'bold', color: COLORS.LightGreen }} value={price} onChangeText={setPrice} />
      <TextInput placeholder='Condition' placeholderTextColor={COLORS.LightGreen} style={{ width: '90%', height: 60, borderWidth: 2, borderColor: COLORS.PaleGreen, borderRadius: 10, alignSelf: 'center', top: 25, paddingLeft: 10, fontWeight: 'bold', color: COLORS.LightGreen }} value={condition} onChangeText={setCondition} />
      <Text style={{ fontSize: 12, color: COLORS.LightGreen, top: 28, marginLeft: 19 }}>Describe The Condition of Your Product i.e. New,Old,Fresh</Text>
      <TextInput placeholder='Contact Number' placeholderTextColor={COLORS.LightGreen} style={{ width: '90%', height: 70, borderWidth: 2, borderColor: COLORS.PaleGreen, borderRadius: 10, alignSelf: 'center', top: 35, paddingLeft: 10, fontWeight: 'bold', color: COLORS.LightGreen }} value={contact} onChangeText={setContact} />
      <TextInput placeholder='Description' placeholderTextColor={COLORS.LightGreen} style={{ width: '90%', height: 80, borderWidth: 2, borderColor: COLORS.PaleGreen, borderRadius: 10, alignSelf: 'center', top: 43, paddingLeft: 10, fontWeight: 'bold', color: COLORS.LightGreen }} value={description} onChangeText={setDescription} />
      <View style={{ width: '90%', height: 30, marginLeft: 3, top: 42, alignSelf: 'center' }}>
        <Text style={{ fontSize: 12, color: COLORS.LightGreen }}>Describe The Product Details i.e. Color, Size</Text>
      </View>
    </SafeAreaView>
  )
}

export default Sell