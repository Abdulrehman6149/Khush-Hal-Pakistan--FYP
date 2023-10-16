import React from "react";
import {View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import COLORS from './Colors'
import { StatusBar } from "expo-status-bar";

const Setting = ({navigation}) => {
return (
    <SafeAreaView style={styles.container}>
<View style={{width: '100%', height: 50, backgroundColor: '#FFF', top: -320}}>
    <TouchableOpacity onPress={()=>navigation.navigate("Help")}>
    <Image
         source={require('../assets/ArrowL.png')}
         style={{width: 30, height: 30, top: 15}}
    />
    </TouchableOpacity>
    <Text style={{fontSize: 22, fontWeight: 'bold', color:COLORS.LightGreen, marginLeft: 110, top: -14}}>Make A Post</Text>    
    <Text style={{ fontSize: 18, top: 10,marginLeft: 7,marginRight: 5, color: COLORS.LightGreen }}>1. In Order To Make A Post Click On The Community Icon on The Home Screen.</Text>
                <Image source={require('../assets/HC.jpeg')}
                style={{resizeMode: 'contain',width: '80%', height: 150, top: 20, alignSelf: 'center'}}/>
                <Text style={{ fontSize: 18,top: 20,marginLeft: 7,marginRight: 5, color: COLORS.LightGreen }}>2. Now, Go To The Photos Icon and Click On It.</Text>
               
                <Image source={require('../assets/HM.jpeg')}
                style={{resizeMode: 'contain', width:'80%',height: 90, top: 30, alignSelf: 'center'}}/>
                <Text style={{ fontSize: 18,top: 29,marginLeft: 7,marginRight: 5, color: COLORS.LightGreen }}>3. Select An Image And Write The Required Details And Click On Post Button.</Text>
              
                <Image source={require('../assets/HPP.jpeg')}
                style={{resizeMode: 'contain', width:'80%',height: 150, top: 30, alignSelf: 'center'}}/>
</View>
</SafeAreaView>
);
};

export default Setting;
const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    flexDirection: 'row'
},
});