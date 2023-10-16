import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, ScrollView, Text, Button, SafeAreaView, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import COLORS from '../Components/Colors';

const Help = ({ navigation }) => {
      return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                  <StatusBar backgroundColor={COLORS.LightGreen} />

                  <View style={{ width: '100%', height: 80, backgroundColor: COLORS.LightGreen }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#fff', marginLeft: 30, top: 40 }}>What can we help you with?</Text>
                  </View>
                  <View style={{ flexDirection: 'row', width: '100%', top: 15, height: 170, backgroundColor: '#fff' }}>
                        <View style={{ width: '48%', borderRadius: 10, height: '100%', backgroundColor: '#9DC08B', marginLeft: 5, marginRight: 5, alignContent: 'center', justifyContent: 'center' }}>
                              <TouchableOpacity onPress={()=>navigation.navigate("HUpload")}>

                                    <Image
                                          source={require('../assets/Profile.png')}
                                          style={{ width: 40, height: 40, marginLeft: 65 }}
                                    />
                                    <Text style={{ fontWeight: 'bold', fontSize: 22, marginLeft: 49, paddingTop: 7,  color: '#fff' }}>Upload</Text>
                                    <Text style={{ fontWeight: 'bold', fontSize: 22, marginLeft: 53,top: -5,color: '#fff' }}>Profile</Text>

                              </TouchableOpacity>
                        </View>

                        <View style={{ width: '48%', borderRadius: 10, height: '100%', backgroundColor: '#C7E8CA', marginRight: 33 , alignContent: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={()=>navigation.navigate("HScan")}>
                                    <Image
                                          source={require('../assets/Camera.png')}
                                          style={{ width: 40, height: 40, marginLeft: 65 , top: 4}}
                                    />
                                    <Text style={{ fontWeight: 'bold', fontSize: 22, marginLeft: 59, paddingTop: 7,  color: '#fff' }}>Scan</Text>
                                    <Text style={{ fontWeight: 'bold', fontSize: 22, marginLeft: 55,top: -5, color: '#fff' }}>Image</Text>
                              </TouchableOpacity>
                        </View>
                  </View>


                  <View style={{ flexDirection: 'row', width: '100%', top: 25, height: 170, backgroundColor: '#fff' }}>
                        <View style={{ width: '48%', borderRadius: 10, height: '100%', backgroundColor: '#C7E8CA', marginLeft: 5, marginRight: 5, alignContent: 'center', justifyContent: 'center' }}>
                              <TouchableOpacity onPress={()=>navigation.navigate("HPost")}>

                                    <Image
                                          source={require('../assets/Pic.png')}
                                          style={{ width: 40, height: 40, marginLeft: 65 }}
                                    />
                                    <Text style={{ fontWeight: 'bold', fontSize: 22, marginLeft: 60, paddingTop: 7,  color: '#fff' }}>Make</Text>
                                    <Text style={{ fontWeight: 'bold', fontSize: 22, marginLeft: 63,top: -5, color: '#fff'}}>Post</Text>

                              </TouchableOpacity>
                        </View>

                        <View style={{ width: '48%', borderRadius: 10, height: '100%',backgroundColor: '#9DC08B', marginRight: 33 , alignContent: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={()=>navigation.navigate("HWeather")}>
                                    <Image
                                          source={require('../assets/Profile.png')}
                                          style={{ width: 40, height: 40, marginLeft: 65 , top: 4}}
                                    />
                                    <Text style={{ fontWeight: 'bold', fontSize: 22, marginLeft: 60, paddingTop: 7,  color: '#fff' }}>View</Text>
                                    <Text style={{ fontWeight: 'bold', fontSize: 22, marginLeft: 45,top: -5, color: '#fff' }}>Weather</Text>
                              </TouchableOpacity>
                        </View>
                  </View>

                  <View style={{ flexDirection: 'row', width: '100%', top: 35, height: 170, backgroundColor: '#fff' }}>
                        <View style={{ width: '48%', borderRadius: 10, height: '100%', backgroundColor: '#9DC08B', marginLeft: 5, marginRight: 5, alignContent: 'center', justifyContent: 'center' }}>
                              <TouchableOpacity  onPress={()=>navigation.navigate("HSell")}>

                                    <Image
                                          source={require('../assets/MarketPlace.png')}
                                          style={{ width: 40, height: 40, marginLeft: 65 }}
                                    />
                                    <Text style={{ fontWeight: 'bold', fontSize: 22, marginLeft: 65, paddingTop: 7,  color: '#fff' }}>Sell</Text>
                                    <Text style={{ fontWeight: 'bold', fontSize: 22, marginLeft: 45,top: -10, color: '#fff' }}>Products</Text>

                              </TouchableOpacity>
                        </View>
                  </View>

            </SafeAreaView>

      );
};

export default Help;

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