import React, { useState, useRef } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from './Colors'
import * as ImagePicker from 'expo-image-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import axios from 'axios'
import { Card, Paragraph } from 'react-native-paper'


const UploadPost = ({ navigation }) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
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
      formData.append("body", body);

      // images.forEach((img) => {
      //   formData.append("myImg", img);
      // });
      for (let i = 0; i < images.length; i++) {
        formData.append("myImg", {
          uri: images[i],
          type: "image/jpeg",
          name: `image${i}.jpg`,
        });
      }

      const DEMO_TOKEN = await AsyncStorage.getItem("token");
      try {
        if (DEMO_TOKEN !== "null") {
          console.log(DEMO_TOKEN)
          const response = await fetch('http://192.168.43.25:5000/createpost', {
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
            navigation.navigate("Community");
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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View style={{ width: '100%', height: 30, backgroundColor: COLORS.LightGreen }}>
        <TouchableOpacity onPress={() => navigation.navigate("Community")}>
          <Image
            source={require('../assets/WArrowL.png')}
            style={
              {
                width: 35,
                height: 35,
                marginLeft: 5,
                top: -6
              }
            }
          />
        </TouchableOpacity>
      </View>
      <View style={{ width: '150%', height: 70, backgroundColor: 'pink', top: 10 }}>
        <Image
          source={require('./images/6.jpg')}
          style={{
            height: 70,
            width: '150%',

          }}
        />
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff', top: -55, marginLeft: 50 }}>Create A New Post</Text>
      </View>
      <TextInput placeholder='Title' placeholderTextColor={COLORS.LightGreen} style={{ width: '90%', fontWeight: 'bold', color: COLORS.LightGreen, height: 60, borderRadius: 10, top: 50, marginLeft: 18, borderColor: COLORS.LightGreen, borderWidth: 2, paddingLeft: 10 }} onChangeText={setTitle}
        value={title} />

      <TextInput placeholder='Body' placeholderTextColor={COLORS.LightGreen} style={{ width: '90%', fontWeight: 'bold', color: COLORS.LightGreen, height: 60, borderRadius: 10, top: 60, marginLeft: 18, borderColor: COLORS.LightGreen, borderWidth: 2, paddingLeft: 10 }} value={body} onChangeText={setBody} />

      <View style={{ width: '90%', height: 140, alignItems: 'center', justifyContent: 'center', borderWidth: 2, backgroundColor: '#fff', borderColor: COLORS.LightGreen, borderRadius: 10, marginLeft: 18, top: 70 }}>
        {images.length === 0 ? ( //if there are no images
          <TouchableOpacity onPress={pickMultipleImages}>
            <Image
              source={require('../assets/Photo.png')}
              style={{ width: 30, height: 30, marginLeft: 47 }}
            />
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.LightGreen }}>Upload Image</Text>
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
                    <Paragraph>Image {(Increment += 1)}</Paragraph>
                  </Card.Content>
                  <Card.Cover source={{ uri: item }} />
                </Card>
              ))}
            </ScrollView>
          </>
        )}
      </View>
      <TouchableOpacity onPress={sendToBackend}>
        <Text style={{
          backgroundColor: COLORS.LightGreen,
          color: 'white',
          padding: 10,
          borderRadius: 5,
          fontWeight: "bold",
          width: 320,
          height: 50,
          fontSize: 20,
          textAlign: 'center',
          margin: 10,
          alignSelf: 'center',
          marginTop: 100
        }}>
          Post
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default UploadPost