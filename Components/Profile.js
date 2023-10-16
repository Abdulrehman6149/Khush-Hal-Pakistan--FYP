import { StatusBar } from "expo-status-bar";
import React from "react";
import {View, Text, Button, StyleSheet, ImageBackground, Image, TouchableOpacity} from 'react-native';
import COLORS from '../Components/Colors';

const Profile = ({navigation}) => {
return (
<View style={{flex: 1, backgroundColor: "#fff"}}>
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
        <TouchableOpacity onPress={()=>navigation.navigate("ProfileImg")}>
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
        <TouchableOpacity onPress={()=>navigation.navigate("Account")}>
        <View style={{width: '90%', height: 55, backgroundColor: COLORS.LightGreen, marginLeft: 17, borderRadius: 10,top: -100,justifyContent: 'flex-start', flexDirection: 'row', paddingTop: 5}}>
           <Image
           source={require('../assets/PAccount.png')}
           style={{width: 40, height: 40, marginLeft: 10}}
           />
           <Text style={{fontWeight: 'bold', fontSize: 25, marginLeft: 70, paddingTop: 3, color:'#5D9C59'}}>Account</Text>
           <Image
           source={require('../assets/ArrowR.png')}
           style={{width:40, height: 40, marginLeft: 60, paddingTop: 5}}
           />
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Password")}>
        <View style={{width: '90%', height: 55, backgroundColor: COLORS.LightGreen, marginLeft: 17, borderRadius: 10,top: -99,justifyContent: 'flex-start', flexDirection: 'row', paddingTop: 5}}>
           <Image
           source={require('../assets/PPassword.png')}
           style={{width: 35, height: 35, marginLeft: 10, marginTop: 3}}
           />
           <Text style={{fontWeight: 'bold', fontSize: 25, marginLeft: 69, paddingTop: 3, color:'#5D9C59'}}>Password</Text>
           <Image
           source={require('../assets/ArrowR.png')}
           style={{width:40, height: 40, marginLeft: 48, paddingTop: 5}}
           />
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Feedback")}>
        <View style={{width: '90%', height: 55, backgroundColor: COLORS.LightGreen, marginLeft: 17, borderRadius: 10,top: -98,justifyContent: 'flex-start', flexDirection: 'row', paddingTop: 5}}>
           <Image
           source={require('../assets/PLanguage.png')}
           style={{width: 40, height: 40, marginLeft: 10, marginTop:3}}
           />
           <Text style={{fontWeight: 'bold', fontSize: 25, marginLeft: 64, paddingTop: 3, color:'#5D9C59'}}>Language</Text>
           <Image
           source={require('../assets/ArrowR.png')}
           style={{width:40, height: 40, marginLeft: 48, paddingTop: 5}}
           />
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Help")}>
        <View style={{width: '90%', height: 55, backgroundColor: COLORS.LightGreen, marginLeft: 17, borderRadius: 10,top: -97,justifyContent: 'flex-start', flexDirection: 'row', paddingTop: 5}}>
           <Image
           source={require('../assets/PHelp.png')}
           style={{width: 40, height: 40, marginLeft: 10, marginTop:3 }}
           />
           <Text style={{fontWeight: 'bold', fontSize: 25, marginLeft: 90, paddingTop: 3, color:'#5D9C59'}}>Help</Text>
           <Image
           source={require('../assets/ArrowR.png')}
           style={{width:40, height: 40, marginLeft: 82, paddingTop: 5}}
           />
        </View>
        </TouchableOpacity>
        {/* <TouchableOpacity>
        <View style={{width: '90%', height: 55, backgroundColor: COLORS.LightGreen, marginLeft: 17, borderRadius: 10,top: -30,justifyContent: 'flex-start', flexDirection: 'row', paddingTop: 5}}>
           <Image
           source={require('../assets/PLogout.png')}
           style={{width: 40, height: 40, marginLeft: 10, marginTop:3}}
           />
           <Text style={{fontWeight: 'bold', fontSize: 25, marginLeft: 78, paddingTop: 3, color:'#5D9C59'}}>Logout</Text>
           <Image
           source={require('../assets/ArrowR.png')}
           style={{width:40, height: 40, marginLeft: 68, paddingTop: 5}}
           />
        </View>
        </TouchableOpacity> */}
</View>

       
         
);
};

export default Profile;

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
