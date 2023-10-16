import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import COLORS from './Colors'

const Setting = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: '100%', height: 80, backgroundColor: '#FFF', top: -320 }}>
                <TouchableOpacity onPress={() => navigation.navigate("Help")}>
                    <Image
                        source={require('../assets/ArrowL.png')}
                        style={{ width: 30, height: 30, top: 21 }}
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: COLORS.LightGreen, marginLeft: 53, top: -10}}>Upload Your Profile Picture</Text>
                <Text style={{ fontSize: 18, top: 10,marginLeft: 7,marginRight: 5, color: COLORS.LightGreen }}>1. In Order To Upload Your Profile Click On The Profile Icon At The Bottom Right of The Home Screen.</Text>
                <Image source={require('../assets/HP.jpeg')}
                style={{resizeMode: 'contain',width: '80%', height: 90, top: 20, alignSelf: 'center'}}/>
                <Text style={{ fontSize: 18,top: 20,marginLeft: 7,marginRight: 5, color: COLORS.LightGreen }}>2. Now, Go To The Edit Profile Button Below The Profile Image and Click On It.</Text>
               
                <Image source={require('../assets/HE.jpeg')}
                style={{resizeMode: 'contain', width:'80%',height: 150, top: 30, alignSelf: 'center'}}/>
                <Text style={{ fontSize: 18,top: 29,marginLeft: 7,marginRight: 5, color: COLORS.LightGreen }}>3. Select An Image You Want To Set As The Profile Image And Click On Upload Your Profile Image Will Be Uploaded.</Text>
              
                <Image source={require('../assets/HU.jpeg')}
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