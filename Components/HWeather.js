import React from "react";
import {View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import COLORS from './Colors'

const Setting = ({navigation}) => {
return (
    <SafeAreaView style={styles.container}>
<View style={{width: '100%', height: 50, backgroundColor: '#FFF', top: -320}}>
    <TouchableOpacity onPress={()=>navigation.navigate("Help")}>
    <Image
         source={require('../assets/ArrowL.png')}
         style={{width: 30, height: 30, top: 15}}
    />
    </TouchableOpacity>
    <Text style={{fontSize: 22, fontWeight: 'bold', color:COLORS.LightGreen, marginLeft: 78, top: -14}}>View Current Weather</Text>    
    <Text style={{ fontSize: 18, top: 10,marginLeft: 7,marginRight: 5, color: COLORS.LightGreen }}>1. In Order To View Weather Click On The Weather Icon on The Home Screen.</Text>
                <Image source={require('../assets/HW.jpeg')}
                style={{resizeMode: 'contain',width: '80%', height: 150, top: 20, alignSelf: 'center'}}/>
                <Text style={{ fontSize: 18,top: 20,marginLeft: 7,marginRight: 5, color: COLORS.LightGreen }}>2. Now, Enter The Location.</Text>
               
                <Image source={require('../assets/HL.jpeg')}
                style={{resizeMode: 'contain', width:'80%',height: 90, top: 30, alignSelf: 'center'}}/>
                <Text style={{ fontSize: 18,top: 29,marginLeft: 7,marginRight: 5, color: COLORS.LightGreen }}>3. Weather Will Be Shown On Entering The Location.</Text>
              
                <Image source={require('../assets/HWW.jpeg')}
                style={{resizeMode: 'contain', width:'80%',height: 150, top: 30, alignSelf: 'center'}}/>
</View>
</SafeAreaView>
);
};

export default Setting;
const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    flexDirection: 'row'
},
});