import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import COLORS from './Colors'

const Setting = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: '100%', height: 50, backgroundColor: '#FFF', top: -320 }}>
                <TouchableOpacity onPress={() => navigation.navigate("Help")}>
                    <Image
                        source={require('../assets/ArrowL.png')}
                        style={{ width: 30, height: 30, top: 15 }}
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: COLORS.LightGreen, marginLeft: 85, top: -14 }}>Scan Your Images</Text>
                <Text style={{ fontSize: 18, top: 10,marginLeft: 7,marginRight: 5, color: COLORS.LightGreen }}>1. In Order To Scan Your Images Click On The Scan Icon At The Bottom of The Home Screen.</Text>
                <Image source={require('../assets/HS.jpeg')}
                style={{resizeMode: 'contain',width: '80%', height: 90, top: 50, alignSelf: 'center'}}/>
                <Text style={{ fontSize: 18,top: 70,marginLeft: 7,marginRight: 5, color: COLORS.LightGreen }}>2. Now, Upload The Image You Want To Scan By Clicking On Take Picture.</Text>
               
                <Image source={require('../assets/HT.jpeg')}
                style={{resizeMode: 'contain', width:'80%',height: 150, top: 80, alignSelf: 'center'}}/>
            
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