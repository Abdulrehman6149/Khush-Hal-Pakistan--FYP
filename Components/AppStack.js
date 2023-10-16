import {View, Text} from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import {NavigationContainer} from '@react-navigation/native';
import HomePage from './HomePage';
import Setting from './Setting';
import ContactUs from './ContactUs';
import Help from './Help';
import Language from './Language';
import Theme from './Theme';
import Feedback from './Feedback';
import Logout from './Logout';
import Community from './Community';
import MarketPlace from './MarketPlace';
import MarketPrices from './MarketPrices';
import Weather from './Weather';
import Sell from './Sell';
import ProductDescrip from './ProductDescrip';
import SellerProfile from './Sellerprofile';
import UploadPost from './UploadPost';
import Account from './Account';
import Password from './Password';
import ProfileImg from './ProfileImg';
import ExpertLogin from './ExpertLogin';
import HUpload from './HUpload';
import HScan from './HScan';
import HPost from './HPost';
import HSell from './HSell';
import HWeather from './HWeather';


const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
  
      <Stack.Navigator  initialRouteName="Home"
      screenOptions={{headerShown: false}}>
{/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerShown: false}}
        />
{/* Settings Screen */}
        <Stack.Screen
          name="Settings"
          component={Setting}
          options={{headerShown: false}}
        />
{/* Contact Us */}
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{headerShown: false}}
        />
{/* Help */}
        <Stack.Screen
        name="Help"
        component={Help}
        options={{headerShown: false}}
      />
       <Stack.Screen
          name="ExpertLogin"
          component={ExpertLogin}
          options={{headerShown: false}}
        />
{/* Feedback */}
      <Stack.Screen
      name="Feedback"
      component={Feedback}
      options={{headerShown: false}}
    />
{/* Theme */}
  <Stack.Screen
    name="Theme"
    component={Theme}
    options={{headerShown: false}}
  />
{/* Language */}
    <Stack.Screen
    name="Language"
    component={Language}
    options={{headerShown: false}}
    />
{/* Logout */}
        <Stack.Screen
          name="Logout"
          component={Logout}
          options={{headerShown: false}}
        />
         <Stack.Screen
        name="Community"
        component={Community}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="MarketPlace"
        component={MarketPlace}
        options={{headerShown: false}}
      />
       <Stack.Screen
          name="Sell"
          component={Sell}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="ProductDescrip"
          component={ProductDescrip}
          options={{headerShown: false}}
        />
           <Stack.Screen
          name="Account"
          component={Account}
          options={{headerShown: false}}
        />
           <Stack.Screen
          name="ProfileImg"
          component={ProfileImg}
          options={{headerShown: false}}
        />
           <Stack.Screen
          name="Password"
          component={Password}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Sellerprofile"
          component={SellerProfile}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="UploadPost"
          component={UploadPost}
          options={{headerShown: false}}
        />
       <Stack.Screen
        name="MarketPrices"
        component={MarketPrices}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Weather"
        component={Weather}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HUpload"
        component={HUpload}
        options={{headerShown: false}}
      />
<Stack.Screen
        name="HScan"
        component={HScan}
        options={{headerShown: false}}
      />
<Stack.Screen
        name="HPost"
        component={HPost}
        options={{headerShown: false}}
      />
<Stack.Screen
        name="HSell"
        component={HSell}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HWeather"
        component={HWeather}
        options={{headerShown: false}}
      />
      </Stack.Navigator>
   
  );
};

export default AppStack;