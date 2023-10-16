import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image,TouchableOpacity } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from './Colors';



export default function CameraScreen(props) {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
       
        <View style={{width: '90%', height: 60, alignSelf: 'center', top: -50, borderRadius: 10, top: 70}}>
        <Button   title="Share" color='#9DC08B'  onPress={sharePic} />
    </View>
    <View style={{width: '90%', height: 60, alignSelf: 'center', top: -50, borderRadius: 10, top: 70}}>
        {hasMediaLibraryPermission ? 
        <Button style={{}} title="Get Detail" color='#9DC08B' icon="check" onPress={() => props.navigation.navigate("ImageDescription")} /> : undefined}
    </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
    <Camera style={styles.container} ref={cameraRef}>
    </Camera>
    <View style={{width: '90%', height: 60, alignSelf: 'center', top: -50, borderRadius: 10}}>
     <Button  title='Take Your Picture'  onPress={takePic} color='#9DC08B'/>
    </View>
    <View style={{width: '90%', height: 60, alignSelf: 'center', top: -50, borderRadius: 10}}>
     <Button  title='Go Back To Home'  onPress={() => props.navigation.navigate('HomeScreen')} color='#9DC08B'/>
    </View>
          </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:110
  },
  buttonContainer: {
    color: 'yellow',
    alignSelf: 'center',
    justifyContent:'space-between',
    alignItems:'center',
    top: 200
  },
  preview: {
    alignSelf: 'stretch',
    width: '100%',
    height: 600,
}
});