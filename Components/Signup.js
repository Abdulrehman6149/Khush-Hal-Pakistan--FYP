import React, { useState } from 'react';
import { View, Text, Touchable, TouchableOpacity, Button } from 'react-native';
import Background from './Background';
import { darkGreen } from './Constants';
import FieldS from './FieldS';
import COLORS from './Colors';

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: ''
  })

  const [errmsg, setErrormsg] = useState(null);
  //const[data,setData]=useState();
  const SendtoBackend = () => {
    //console.log(user);
    if (user.name == '' || user.email == '' ||
      user.password == '' || user.cpassword == '') {
      setErrormsg('Please Enter All Fields');
      return;
    }
    else {
      if (user.password != user.cpassword) {
        setErrormsg('Password and Confirm password must be same');
        return;
      }
      else {
        fetch('http://192.168.43.25:5000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
          .then(res => res.json()).then(
            data => {
              //console.log(data);
              if (data.error) {
                setErrormsg(data.error);
              }
              else {
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
      <View style={{ alignItems: 'center', width: 360 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
            fontWeight: 'bold',
            marginTop: 90,
          }}>
          Sign Up
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 600,
            width: 400,
            //borderTopLeftRadius: 130,
            borderRadius: 80,
            paddingTop: 25,
            alignItems: 'center',
            top: 30
          }}>
          {//Message if all fields are empty
            errmsg ? <Text style={{
              color: 'white', fontSize: 15, textAlign: 'center',
              backgroundColor: COLORS.LightGreen, paddingTop: 5, borderRadius: 10, width: 300, height: 30
            }}>
              {errmsg}</Text> : null
          }
          <FieldS placeholder="Name" onChangeText={(text) =>
            setUser({ ...user, name: text })}
            onPressIn={() => setErrormsg(null)} />

          <FieldS placeholder="Email / Username" keyboardType={'email-address'}
            onChangeText={(text) =>
              setUser({ ...user, email: text })}
            onPressIn={() =>
              setErrormsg(null)}
          />

          <FieldS placeholder="Password" secureTextEntry={true} onChangeText={(text) =>
            setUser({ ...user, password: text })}
            onPressIn={() =>
              setErrormsg(null)} />
          <FieldS placeholder="Confirm Password" secureTextEntry={true}
            onChangeText={(text) =>
              setUser({ ...user, cpassword: text })} onPressIn={() => setErrormsg(null)} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '90%',
              paddingRight: 10
            }}>
            <Text style={{ color: 'grey', fontSize: 15, marginLeft: 10 }}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{ color: COLORS.LightGreen, fontWeight: 'bold', fontSize: 15 }}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: "center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{ color: 'grey', fontSize: 15 }}>
              and {" "}
            </Text>
            <Text style={{ color: COLORS.LightGreen, fontWeight: 'bold', fontSize: 15 }}>
              Privacy Policy
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              SendtoBackend()
            }}>
            <Text style={{
              backgroundColor: COLORS.LightGreen,
              color: 'white',
              padding: 10,
              borderRadius: 5,
              fontWeight: "bold",
              fontSize: 22,
              height: 50,
              width: 290,
              textAlign: 'center',
              margin: 10
            }}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}>
              <Text
                style={{ color: COLORS.LightGreen, fontWeight: 'bold', fontSize: 16 }}>
                Sign In
              </Text>
            </TouchableOpacity>

          </View>
          <View style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 20,
            marginTop: -20
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

export default Signup;