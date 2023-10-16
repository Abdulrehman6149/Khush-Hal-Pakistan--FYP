import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import COLORS from './Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Category = () => {
  return (
        <SafeAreaView>
            <StatusBar backgroundColor={COLORS.LightGreen}/>
            <View style={{width: '100%', height: 35, backgroundColor: COLORS.LightGreen, flexDirection: 'row'}}>
              <Image
                source={require('../assets/WArrowL.png')}
                style={{width: 30, height: 30, marginLeft: 7}}
              />
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff', marginRight: 12}}>
                    Categories
                </Text>
        </View>
        <View style={{width: '90%', height: 40, top: 15, marginLeft: 10, flexDirection: 'row'}}>
                <Image
                source={require('../assets/Crop.png')}
                style={{width: 40, height:40}}
                />
                <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.LightGreen, top: 5, marginLeft: 10}}>
                    Crops
                </Text>
        </View>
        <View style={{width: '95%', height: 3, backgroundColor: COLORS.LightGreen, top: 20, alignSelf: 'center'}}>
        </View>

        <View style={{width: '90%', height: 40, top: 35, marginLeft: 10, flexDirection: 'row'}}>
                <Image
                source={require('../assets/Seed.png')}
                style={{width: 40, height:40}}
                />
                <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.LightGreen, top: 5, marginLeft: 10}}>
                    Seeds
                </Text>
        </View>
        <View style={{width: '95%', height: 3, backgroundColor: COLORS.LightGreen, top: 40, alignSelf: 'center'}}>
        </View>

        <View style={{width: '90%', height: 40, top: 50, marginLeft: 10, flexDirection: 'row'}}>
                <Image
                source={require('../assets/Animal.png')}
                style={{width: 40, height:40}}
                />
                <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.LightGreen, top: 5, marginLeft: 10}}>
                    Animals
                </Text>
        </View>
        <View style={{width: '95%', height: 3, backgroundColor: COLORS.LightGreen, top: 55, alignSelf: 'center'}}>
        </View>

        <View style={{width: '90%', height: 40, top: 70, marginLeft: 10, flexDirection: 'row'}}>
                <Image
                source={require('../assets/Fertilizer.png')}
                style={{width: 40, height:40}}
                />
                <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.LightGreen, top: 5, marginLeft: 8}}>
                    Fertilizers
                </Text>
        </View>
        <View style={{width: '95%', height: 3, backgroundColor: COLORS.LightGreen, top: 75, alignSelf: 'center'}}>
        </View>

        <View style={{width: '90%', height: 40, top: 85, marginLeft: 10, flexDirection: 'row'}}>
                <Image
                source={require('../assets/Tool.png')}
                style={{width: 40, height:40}}
                />
                <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.LightGreen, top: 5, marginLeft: 10}}>
                    Agri Tools
                </Text>
        </View>
        <View style={{width: '95%', height: 3, backgroundColor: COLORS.LightGreen, top: 90, alignSelf: 'center'}}>
        </View>

        <View style={{width: '90%', height: 40, top: 100, marginLeft: 10, flexDirection: 'row'}}>
                <Image
                source={require('../assets/Raw.png')}
                style={{width: 40, height:40}}
                />
                <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.LightGreen, top: 5, marginLeft: 10}}>
                    Raw Materials
                </Text>
        </View>
        
        </SafeAreaView>
  )
}

export default Category