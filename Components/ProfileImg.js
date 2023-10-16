import { View, Text,TouchableOpacity,Image , ScrollView} from 'react-native'
import React, { useState ,useRef} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from './Colors'
import { StatusBar } from 'expo-status-bar'
import * as ImagePicker from 'expo-image-picker'
import { Card, Paragraph } from 'react-native-paper'


const ProfileImg = ({navigation}) => {
  const [images, setImages] = useState([])
  const scrollView = useRef();
  let Increment = 0

 

  const pickMultipleImages = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
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

  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor={COLORS.LightGreen}/>
         <View style={{ width: '100%', height: 35, backgroundColor: COLORS.LightGreen , flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
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
        <Text style={{color: '#fff', fontSize: 22, fontWeight: 'bold', marginLeft: 85}}>Edit Profile</Text>
      </View>

      <View style={{alignItems: 'center',justifyContent: 'center',width: '90%', height: 130,borderWidth: 2, borderColor: COLORS.LightGreen, alignSelf: 'center', borderRadius: 10, top: 50}}>
      {images.length === 0 ? ( //if there are no images
            <TouchableOpacity onPress={pickMultipleImages}>
                <Image 
                source={require('../assets/Photo.png')}
                style={{width: 35, height:35, marginLeft: 75}}
            />
                <Text style={{fontSize: 22, fontWeight: 'bold', color: COLORS.LightGreen}}>Upload Your Picture</Text>
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
      <TouchableOpacity>
      <View style={{width: '80%', height: 60, borderRadius: 10, backgroundColor: COLORS.LightGreen, alignSelf: 'center', top: 70}}>
           <Text style={{color: '#fff', fontSize: 24,top: 10, fontWeight: 'bold', alignSelf: 'center'}}>Upload</Text>
      </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ProfileImg