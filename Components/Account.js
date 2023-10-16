import { StatusBar } from "expo-status-bar";
import React from "react";
import {View, Text, Button, StyleSheet, ImageBackground, Image, TouchableOpacity} from 'react-native';
import COLORS from './Colors'

const Account = ({navigation}) => {
return (
<View style={{flex: 1, backgroundColor: '#fff'}}>
    <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
    <ImageBackground source={require('../assets/back.jpg')} 
     style={{
        height:'60%',
        width: '100%'
     }}
    >
    </ImageBackground>
    <View style={style.container}>
       <Image 
       source={require('../assets/Dp.jpg')}
       style ={style.border}
       />
        </View>
        <Text style={{fontSize: 20, fontWeight: 'bold',alignSelf: 'center',top:-115, color: COLORS.LightGreen, marginLeft: 5,}}>Mashal Akbar
        </Text>
        <TouchableOpacity>
        <Text style={{fontSize: 15, fontWeight: '600',alignSelf: 'center',top:-115, color: COLORS.LightGreen, marginLeft: 5,}}>Edit Profile
        <Image
        source={require('../assets/Edit.png')}
        style={{

            height: 20,
            width: 20,
            marginLeft:10,
        }}
        />
        </Text>
        </TouchableOpacity>

        <View style={{width: '90%', justifyContent: 'space-between',flexDirection: 'row',height: 60,borderRadius: 10,top: -96, backgroundColor: '#EDF1D6', alignSelf: 'center'}}>
              <Text style={{fontSize: 25, fontWeight: 'bold',marginLeft: 10,top: 10, color:COLORS.LightGreen}}>Name</Text>
        <Image
        source={require('../assets/E.png')}
        style={{width: 30, height: 30, top: 13, marginRight: 10}}
        />
        </View>

        <View style={{width: '90%', justifyContent: 'space-between',flexDirection: 'row',height: 60,borderRadius: 10,top: -87, backgroundColor: '#EDF1D6', alignSelf: 'center'}}>
              <Text style={{fontSize: 25, fontWeight: 'bold',marginLeft: 10,top: 10, color:COLORS.LightGreen}}>Birthday</Text>
        <Image
        source={require('../assets/E.png')}
        style={{width: 30, height: 30, top: 13, marginRight: 10}}
        />
        </View>

        <View style={{width: '90%', justifyContent: 'space-between',flexDirection: 'row',height: 60,borderRadius: 10,top: -78, backgroundColor: '#EDF1D6', alignSelf: 'center'}}>
              <Text style={{fontSize: 25, fontWeight: 'bold',marginLeft: 10,top: 10, color:COLORS.LightGreen}}>Phone No</Text>
        <Image
        source={require('../assets/E.png')}
        style={{width: 30, height: 30, top: 13, marginRight: 10}}
        />
        </View>

        <View style={{width: '90%', justifyContent: 'space-between',flexDirection: 'row',height: 60,borderRadius: 10,top: -69, backgroundColor: '#EDF1D6', alignSelf: 'center'}}>
              <Text style={{fontSize: 25, fontWeight: 'bold',marginLeft: 10,top: 10, color:COLORS.LightGreen}}>Email</Text>
        <Image
        source={require('../assets/E.png')}
        style={{width: 30, height: 30, top: 13, marginRight: 10}}
        />
        </View>

        <View style={{width: '90%', justifyContent: 'space-between',flexDirection: 'row',height: 60,borderRadius: 10,top: -60, backgroundColor: '#EDF1D6', alignSelf: 'center'}}>
              <Text style={{fontSize: 25, fontWeight: 'bold',marginLeft: 10,top: 10, color:COLORS.LightGreen}}>Password</Text>
        <Image
        source={require('../assets/E.png')}
        style={{width: 30, height: 30, top: 13, marginRight: 10}}
        />
        </View>
</View>

       
         
);
};

export default Account;

const style=StyleSheet.create({
    container: {
        height:150,
        width:150,
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
