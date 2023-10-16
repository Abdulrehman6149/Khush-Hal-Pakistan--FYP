import { View, Text } from 'react-native'
import React from 'react'
import Language from '../my-fyp/Components/Language'
import { NavigationContainer } from '@react-navigation/native'
import MarketPlace from './Components/MarketPlace'
import ProductDescrip from './Components/ProductDescrip'
import Community from './Components/Community'
import UploadPost from './Components/UploadPost'
import LottieAnimation from './Components/LottieAnimation'
import Users from './Components/Users'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DrawerNavigator from './Components/DrawerNavigator'
import Login from './Components/Login'
import ExpertSignup from './Components/ExpertSignup'
import GuestHome from './Components/GuestHome'
 import Signup from './Components/Signup'
import HomePage from './Components/HomePage'
import Setting from './Components/Setting'
import MarketPrices from './Components/MarketPrices'
import Weather from './Components/Weather'
import Sell from './Components/Sell'
import Sellerprofile from './Components/Sellerprofile'
import Search from './Components/Search'
import Category from './Components/Category'
import Profile from './Components/Profile'
import Account from './Components/Account'
import Password from './Components/Password'
import ProfileImg from './Components/ProfileImg'
import UserProfile from './Components/UserProfile'
import Feedback from './Components/Feedback'
import ExpertLogin from './Components/ExpertLogin'
import Help from './Components/Help'
import HUpload from './Components/HUpload'
import HPost from './Components/HPost'
import HScan from './Components/HScan'
import HSell from './Components/HSell'
import HWeather from './Components/HWeather'

const Stack=createNativeStackNavigator();
const App = () => {
  return (
  <NavigationContainer>
  <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='LottieAnimation' component={LottieAnimation}/>
      <Stack.Screen name='Users' component={Users}/>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Signup' component={Signup}/>
      <Stack.Screen name='ExpertSignup' component={ExpertSignup}/>
      {/* <Stack.Screen name='HomePage' component={HomePage}/> */}
      <Stack.Screen name='UploadPost' component={UploadPost}/>
      <Stack.Screen name='Community' component={Community}/>
      <Stack.Screen name='MarketPlace' component={MarketPlace}/>
      <Stack.Screen name='ProductDescrip' component={ProductDescrip}/>
      <Stack.Screen name='Setting' component={Setting}/>
      <Stack.Screen name='GuestHome' component={GuestHome}/>
      <Stack.Screen name='MarketPrices' component={MarketPrices}/>
      <Stack.Screen name='HUpload' component={HUpload}/>
      <Stack.Screen name='HScan' component={HScan}/>
      <Stack.Screen name='HPost' component={HPost}/>
      <Stack.Screen name='HWeather' component={HWeather}/>
      <Stack.Screen name='HSell' component={HSell}/>
      <Stack.Screen name='Sell' component={Sell}/>
      <Stack.Screen name='Weather' component={Weather}/>
      <Stack.Screen name='Search' component={Search}/>
      <Stack.Screen name='Category' component={Category}/>
      <Stack.Screen name='Profile' component={Profile}/>
      <Stack.Screen name='Account' component={Account}/>
      <Stack.Screen name='Password' component={Password}/>
      <Stack.Screen name='ProfileImg' component={ProfileImg}/>
      <Stack.Screen name='UserProfile' component={UserProfile}/>
      <Stack.Screen name='Sellerprofile' component={Sellerprofile}/>
      <Stack.Screen name='Feedback' component={Feedback}/>
      <Stack.Screen name='DrawerNavigator' component={DrawerNavigator}/>
      <Stack.Screen name='ExpertLogin' component={ExpertLogin}/>
  </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App