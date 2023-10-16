import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ContactUs from './ContactUs';
import CustomDrawer from './CustomDrawer';
import Help from './Help';
import AboutUs from './AboutUs'
import Feedback from './Feedback';
import Logout from './Logout';
import Tabs from './Tabs';
import News from './News';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ navigation }) {

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator drawerContent={props =>
        <CustomDrawer{...props} />} initialRouteName="Home" screenOptions={{
          headerShown: false
        }} >
        <Drawer.Screen name="Home" component={Tabs} />
        <Drawer.Screen name="AboutUs" component={AboutUs} />
        <Drawer.Screen name="News" component={News} />
        <Drawer.Screen name="ContactUs" component={ContactUs} />
        <Drawer.Screen name="Help" component={Help} />
        <Drawer.Screen name="Feedback" component={Feedback} />
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

