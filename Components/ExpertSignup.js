import React, {useState,useCallback} from 'react';
import {View, Text, Touchable, TouchableOpacity,Button,SafeAreaView,StyleSheet} from 'react-native';
import DocumentPicker,{types} from 'expo-document-picker';
import Background from './Background';
import {darkGreen} from './Constants';
import FieldE from '../Components/FieldE';
import COLORS from './Colors';



const ExpertSignup = ({navigation}) => {
  const [user,setUser]=useState({
    name:'',
    email:'',
    password:'',
    cpassword:'',
    occupation:'',
})
const[errmsg,setErrormsg]=useState(null);
//const[data,setData]=useState();

const SendtoBackend = ()=>{
     //console.log(user);
     if(user.name==''||user.email==''||
     user.password==''||user.cpassword=='' ||
    user.occupation=='')
     {
      setErrormsg('All fields are required');
      return;
     }
     else
     {
      if(user.password!=user.cpassword)
      {
        setErrormsg('Password and Confirm password must be same');
        return;
      }
      else{
        fetch('http://192.168.0.113:5000/Expertsignup',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(user)
        })
        .then(res => res.json()).then(
          data=>{
            //console.log(data);
            if(data.error)
            {
              setErrormsg(data.error);
            }
            else 
            {
              alert('Account Created');
              navigation.navigate('Login');
            }
          }
        )
        .catch((error) => {
          // Handle any errors that occur
          console.error(error);
      });
      }
      }
    }  


  return (
    <Background>
      <View style={{alignItems: 'center', width: 360}}>
        <Text
          style={{
            color: 'white',
            fontSize: 55,
            fontWeight: 'bold',
            marginTop: 50,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 17,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          An Expert? Create your Expert Account Now
        </Text>
        {
          errmsg?<Text style={{color:'white',fontSize:15,textAlign:'center',
          backgroundColor:'green',paddingTop:5,borderRadius:10,width:150}}>
            {errmsg}</Text>:null
        }
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 390,
            borderRadius: 60,
            paddingTop: 20,
            alignItems: 'center',
          }}>
          <FieldE placeholder="Name" onChangeText={(text)=>
          setUser({...user,name:text})} onPressIn={()=> setErrormsg(null)}/>
          <FieldE placeholder="Email" keyboardType={'email-address'}
          onChangeText={(text)=>setUser({...user,email:text})} onPressIn={()=> setErrormsg(null)}/>
          <FieldE placeholder="Password" secureTextEntry={true} onChangeText={(text)=>
          setUser({...user,password:text})} 
          onPressIn={()=> setErrormsg(null)}/>
          <FieldE placeholder="Confirm Password" secureTextEntry={true} onChangeText={(text)=>
          setUser({...user,cpassword:text})} 
          onPressIn={()=> setErrormsg(null)}/>
          <FieldE placeholder="Occupation" onChangeText={(text)=>
          setUser({...user,occupation:text})} 
          onPressIn={()=> setErrormsg(null)}/>
          {/* <SafeAreaView style={styles.container}>
      
      
    </SafeAreaView> */}
     <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '85%',
              paddingRight: 15
            }}>
            <Text style={{color: 'grey', fontSize: 15}}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{color:COLORS.LightGreen, fontWeight: 'bold', fontSize: 15, marginRight: 5}}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{color: 'grey', fontSize: 15}}>
              and {" "}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 15, color: COLORS.LightGreen}}>
              Privacy Policy
            </Text>
          </View>
          <TouchableOpacity
              onPress={()=>{SendtoBackend()
              }}>
              <Text style={{  backgroundColor: COLORS.LightGreen,
        color: 'white',
        padding: 10,
        borderRadius: 5,
        fontWeight: "bold",
        width: 300,
        height: 50,
        fontSize: 22,
        top:-10,
        textAlign: 'center',
        margin: 10}}>
                Signup
              </Text>
            </TouchableOpacity>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              top: -20,
            }}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('ExpertLogin')}>
              <Text
                style={{color: COLORS.LightGreen, fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
       
          </View>
          <View style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:20,
        marginTop:-20
        }}>
      {/* <TouchableOpacity
              onPress={() => props.navigation.navigate('Discover')}>
              <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Next
              </Text>
            </TouchableOpacity> */}
        </View>
        </View>
      </View>
    </Background>
  );
};

export default ExpertSignup;

const styles=StyleSheet.create({
    container:
    {

    },
    uri:
    {

    },
    Button:
    {
      color:"#749F82"
    }
})