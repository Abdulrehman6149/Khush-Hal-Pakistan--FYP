import React,{useState, useContext} from 'react';
import {View, Text, Touchable, TouchableOpacity,StyleSheet} from 'react-native';
import Background from './Background';
import {darkGreen} from './Constants';
import Field from './Field';
import COLORS from './Colors';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import DrawerNavigator from './DrawerNavigator';

const ExpertLogin = ({navigation}) => {
  const [user,setUser]=useState({
    email:'',
    password:''
  })
  const[errmsg,setErrormsg]=useState(null);
  
  const SendtoBackend=async()=>{
      console.log(user);
      if(user.email=='' || user.password=='')
      {
        setErrormsg('Please Enter All Fields');
        return;
      }
      else
         {
          const response = await axios.post("http://192.168.0.113:5000/expertsignin", {
          email:  user.email,
           password: user.password,
          });
          if (response.data.success) {
            AsyncStorage.setItem("token", response.data.token);
            console.log(response.data.token)
            // AsyncStorage.setItem("user", JSON.stringify(response.data.user))
            // dispatch({type:"USER",payload:response.data.user})
            Alert.alert("You have been Loggedin.");
            navigation.navigate("DrawerNavigator", {
              response: response.data.token,
            })
          }
      }
        }

  return (
    <Background>
      <View style={{alignItems: 'center', width: 360, top: 50}}>
        <Text
          style={{
            color: COLORS.LightGreen,
            fontSize: 55,
            fontWeight: 'bold',
            marginVertical: 60,
            top: -10
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 600,
            width: 400,
            borderRadius: 70,
            paddingTop: 50,
            alignItems: 'center',
          }}>
              {
          errmsg?<Text style={{color:'white',fontSize:15,textAlign:'center',
          backgroundColor:COLORS.LightGreen,paddingTop:5,borderRadius:10,width:300,height:30}}>
           {errmsg}</Text>:null
        } 
          <Text style={{fontSize: 35, color: COLORS.LightGreen, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Field placeholder="Email / Username" keyboardType={'email-address'}  onChangeText={(text)=>
            setUser({...user,email:text})}
            onPressIn={()=>
              setErrormsg(null)}/>
                <Field placeholder="Password" secureTextEntry={true} 
            onChangeText={(text)=>
            setUser({...user,password:text})} onPressIn={()=>
              setErrormsg(null)}/>

       
          <View
            style={{alignItems: 'flex-end', width: '90%', paddingRight: 16, marginBottom: 70}}>
            <Text style={{color: COLORS.LightGreen, fontWeight: 'bold', fontSize: 16, marginRight: 3}}>
              Forgot Password ?
            </Text>
          </View>
          <TouchableOpacity onPress={()=>{SendtoBackend()}}>
              <Text style={{backgroundColor: COLORS.LightGreen,
        color: 'white',
        padding: 10,
        borderRadius: 5,
        fontWeight: "bold",
        //minWidth: 150,
        width: 300,
        height: 50,
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        marginTop:-15}}>
                Login
              </Text>
            </TouchableOpacity>
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{ color: COLORS.LightGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default ExpertLogin;

const styles=StyleSheet.create({
  textstyle: {
    alignSelf: 'flex-end',
    color: 'red',
    marginRight:50
  },
})