import React,{useRef,useEffect} from 'react';
import { View, Text,TextInput, Button, StyleSheet,Alert,Image, ImageBackground,TouchableOpacity } from 'react-native';
import FieldC from '../Components/FieldC';
import LottieView from 'lottie-react-native';
import { StatusBar } from "expo-status-bar";
import COLORS from './Colors';

const ContactUs = () =>{
  
    return(
      <>
        <View style={{backgroundColor:'#fff',paddingBottom:90}}>
        <StatusBar backgroundColor={COLORS.LightGreen}/>

        <View
        style={{
        //backgroundColor: '#A1C298',
          height: 600,
          width: 350,
          // borderTopRightRadius: 60,
          // borderTopLeftRadius: 60,
          // borderBottomLeftRadius: 60,
          // borderBottomRightRadius: 60,
          paddingTop: 80,
          marginTop:90,
          paddingRight:10,
          paddingLeft:5,
          marginLeft:5,
          alignItems: 'center',
        }}>      
       <Text style={{paddingBottom:90,marginTop:-130,fontWeight:"bold",fontSize:30, color: COLORS.LightGreen}}>Contact Us</Text>
       <View style={{width: '150%', height: 70, backgroundColor: 'pink', top: -70}}>
             <Image
             source={require('./images/2.jpg')}
             style={{
              height: 70,
              width: '150%',

             }}
             />
       </View>
       
       
       <View style={{width: '95%', height: 150, borderRadius: 10, borderColor: COLORS.LightGreen,borderWidth: 2}}>
       <Text style={{color: COLORS.LightGreen,fontSize: 22,fontWeight: 'bold', alignSelf: 'center', top: 8}}>Reach Out To Us At:</Text>
       <View style={{ flexDirection: 'row', width: '70%',top: 20, height: 30, backgroundColor: '#FFF', alignSelf: 'center' }}>
          <Image
            source={require('../assets/Email.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
          <Text style={{ color: COLORS.DarkGreen, fontSize: 17, marginLeft: 10 }}>KHPAgriLand@gmail.com</Text>
        </View>
        <View style={{ flexDirection: 'row', width: '70%', height: 30,top: 20, backgroundColor: '#FFF', alignSelf: 'center' }}>
          <Image
            source={require('../assets/Call.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
          <Text style={{ color: COLORS.DarkGreen, fontSize: 17, marginLeft: 10 }}>03309877651</Text>
        </View>
        </View>

       </View>
      
       </View>
       </>
    );
}

export default ContactUs;

const styles = StyleSheet.create({
  animationContainer: {
    //backgroundColor: '#7FB77E',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
});