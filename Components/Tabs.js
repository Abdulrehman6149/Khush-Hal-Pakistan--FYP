import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Help from './Help';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import COLORS from './Colors';
import News from './News'
// import HomeScreen from '../Screens/HomeScreen';
import Profile from './Profile';
import HomePage from './HomePage';
import CameraScreen from './CameraScreen';
import AppStack from './AppStack';

const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,

            tabBarStyle: {
                position: 'absolute',
                bottom: 0,
                width: '100%',
                elevation: 0,
                backgroundColor: COLORS.LightGreen,
                height: 55,
                zIndex: 1,
            }
        }}>
            <Tab.Screen name='Home' component={AppStack} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={require('../assets/Homee.png')}
                            style={{ width: 45, height: 45 }}
                        />
                    </View>
                ),
            }} />
            <Tab.Screen name='News' component={News} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={require('../assets/News.png')}
                            style={{ width: 38, height: 38 }}
                        />
                    </View>
                ),
            }} />
            <Tab.Screen name='Camera' component={CameraScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        top: -25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#5D9C59', width: 67, height: 67, borderRadius: 50,
                    }}>
                        <Image
                            source={require('../assets/Camera.png')}
                            style={{ width: 45, height: 45 }}
                        />
                    </View>
                ),
            }} />
            <Tab.Screen name='Help' component={Help} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={require('../assets/HelpFeed.png')}
                            style={{ width: 38, height: 38 }}
                        />
                    </View>
                ),
            }} />
            <Tab.Screen name='Profile' component={Profile} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={require('../assets/Profile.png')}
                            style={{ width: 38, height: 38 }}
                        />
                    </View>
                ),
            }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({

});

export default Tabs;