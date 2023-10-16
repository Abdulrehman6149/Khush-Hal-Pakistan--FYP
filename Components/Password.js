import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import COLORS from './Colors'
import { TextInput } from 'react-native-gesture-handler'

const Password = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
        <StatusBar backgroundColor={COLORS.LightGreen}/>
        <View style={{width: '100%', height: 45, backgroundColor: COLORS.LightGreen, flexDirection: 'row'}}>
              <TouchableOpacity onPress={()=> navigation.navigate("Profile")}>
              <Image
                source={require('../assets/WArrowL.png')}
                style={{width: 30, height: 30, marginLeft: 7, top: 4}}
              /></TouchableOpacity>
              <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff', marginLeft: 90}}>Password</Text>
        </View>

        <View style={{width: '95%',alignSelf: 'center', height: 60,top: 100, backgroundColor: '#fff',borderWidth: 2, borderColor: COLORS.LightGreen, borderRadius: 10}}>
           <TextInput placeholder='Current Password' style={{ fontSize: 20, top: 14,color: COLORS.LightGreen, alignSelf:'center'}}/>
           <Text style={{fontSize: 13,top: 34,marginLeft: 3, color: COLORS.LightGreen}}>Enter Your Current Password</Text>
        </View>

        <View style={{width: '95%', height: 60,backgroundColor: '#fff',borderWidth: 2, borderColor: COLORS.LightGreen, top: 130, alignSelf: 'center', borderRadius: 10}}>
            <TextInput placeholder='New Password' style={{fontSize: 20, top: 14,color: COLORS.LightGreen, alignSelf:'center'}}/>
            <Text style={{fontSize: 13,top: 34,marginLeft: 3, color: COLORS.LightGreen}}>Enter Your New Password</Text>
        </View>

        <View style={{width: '95%', height: 60,backgroundColor: '#fff',borderWidth: 2, borderColor: COLORS.LightGreen, top: 160, alignSelf: 'center', borderRadius: 10}}>
        <TextInput placeholder='Confirm Password' style={{fontSize: 20, top: 14,color: COLORS.LightGreen, alignSelf:'center'}}/>
            <Text style={{fontSize: 13,top: 34,marginLeft: 3, color: COLORS.LightGreen}}>Re-Enter Your Password</Text>
        </View>

        <View style={{width: '90%', height: 55, backgroundColor: COLORS.LightGreen, alignSelf: 'center', borderRadius: 10, top: 300}}>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: '#FFF', alignSelf: 'center', top: 11}}>Update</Text>
        </View>
    </SafeAreaView>
  )
}

export default Password