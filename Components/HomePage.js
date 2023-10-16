import React from "react";
import {View, Text, Button, Image,StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import COLORS from "./Colors";


import { useNavigation } from "@react-navigation/native";


const Home = () => {
    const navigation = useNavigation();
return (
    <>
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
    
     <View style={style.header}>
        {/* <TouchableOpacity>
       <Image
           source={require('../assets/Bars.png')}
           resizeMode='contain'
           style={
            {
                width: 25,
                height: 25,
                paddingLeft:10,
                top: 10,
                paddingHorizontal: 2,
                marginLeft:-16
            }
           }    
       />
       </TouchableOpacity> */}
      
       </View>
      
       <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{backgroundColor: COLORS.LightGreen, height: 100 }}>
                <View>
                <Text style={style.headerTitle}>Plant Your</Text>
                <Text style={style.headerTitle}>Future Now</Text>
                </View>  
                <View style={style.inputContainer}>
                    <Image
                    source={require('../assets/Search.png')}
                    resizeMode='contain'
                    style={{
                        width:26,
                        height: 26,
                    }}/>
                    <TextInput placeholder="Search" style={{color: COLORS.LightGreen}}/>
                    </View>     
      </View>
      <View style={style.bigContainer}>
              <View style={style.extraSpaceUp}></View>
              <View style={style.boxLayout}>
           
                <View style={style.leftBox}>
                    <View style={style.leftBox1}>
                       
                        <Image
                        source={require('../assets/MarketRates.png')}
                        resizeMode= 'contain'
                        style = {{
                            width: 68,
                            height: 68,
                            marginLeft:45,
                            marginTop: 10,
                        }}
                        />
                         <TouchableOpacity   onPress={() => navigation.navigate("MarketPrices")}>
                        <Text style={{fontSize: 20,marginLeft: 20, fontWeight: 'bold', color: '#FFF'}}>Market Prices</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.leftBox2}>
                    <Image
                        source={require('../assets/Community.png')}
                        resizeMode= 'contain'
                        style = {{
                            width: 68,
                            height: 68,
                            marginLeft:45,
                            marginTop: 75,
                        }}
                        />
                        <TouchableOpacity   onPress={() => navigation.navigate("Community")}>
                        <Text style={{fontSize: 20,marginLeft: 28, fontWeight: 'bold', color: '#FFF'}}>Community</Text>
                        <Text style={{fontSize: 20,marginLeft: 60, fontWeight: 'bold', color: '#FFF'}}>Feed</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={style.RightBox}>
                <View style={style.RightBox1}>
                <Image
                        source={require('../assets/MarketPlace.png')}
                        resizeMode= 'contain'
                        style = {{
                            width: 60,
                            height: 60,
                            marginLeft:50,
                            marginTop: 75,
                        }}
                        />
                        <TouchableOpacity 
                     onPress={() => navigation.navigate("MarketPlace")} >
                        <Text style={{fontSize: 20,marginLeft: 47, fontWeight: 'bold', color: '#FFF'}}>Market</Text>
                        <Text style={{fontSize: 20,marginLeft: 55, fontWeight: 'bold', color: '#FFF'}}>Place</Text>
                        </TouchableOpacity>
                </View>
                    <View style={style.RightBox2}>
                    <Image
                        source={require('../assets/Weather1.png')}
                        resizeMode= 'contain'
                        style = {{
                            width: 68,
                            height: 68,
                            marginLeft:45,
                            marginTop: 10,
                        }}
                        />

                        <TouchableOpacity   onPress={() => navigation.navigate("Weather")}>
                        <Text style={{fontSize: 20,marginLeft: 45, fontWeight: 'bold', color: '#FFF'}}>Weather</Text>
                        </TouchableOpacity>
                      
                    </View>
                   
                </View>
              </View>
              <View style={style.extraSpaceDown}></View>
      </View>
   
       </ScrollView>
       </SafeAreaView>
      
        </>
                
);
};

export default Home;
const style = StyleSheet.create({
header: {
    paddingVertical: 38,
    paddingHorizontal:40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.LightGreen,
    paddingTop: 50,
},
inputContainer: {
    height: 60,
    width: '80%',
    paddingHorizontal: 30,
    backgroundColor: '#FFF',
    borderRadius: 10,
    position: "absolute",
    top: 80,
    marginLeft:36,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 10,
},
headerTitle: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 28,
    paddingLeft: 18,
    marginTop: -10,
},
bigContainer: {
    height: 470,
    top: 60,
    backgroundColor: '#FFF',
},
extraSpaceUp:{
    height: 20,
    backgroundColor: '#FFF',
},
boxLayout: {
    flex:5,
    backgroundColor: '#FFF',
    flexDirection: 'row', 
},
leftBox: {
  flex:1,
  backgroundColor: '#FFF',
  marginRight: '1%',
  marginLeft: '5%',
},
leftBox1: {
    flex: 1,
    backgroundColor: '#C7E8CA',
    marginBottom: '3%',
    borderRadius: 15,
    elevation: 5,
},
leftBox2: {
    flex: 2,
    // backgroundColor: '#5D9C59',
    backgroundColor: '#9DC08B',
    borderRadius: 15,
    elevation: 5,
},
RightBox: {
    flex:1,
    backgroundColor: '#fff',
    marginLeft: '0%',
    marginRight: '5%',
},
RightBox1: {
    flex: 2,
    backgroundColor: '#9DC08B',
    marginBottom: '3%',
    borderRadius: 15,
    elevation: 5,
},
RightBox2: {
    flex: 1,
    // backgroundColor: '#046307',
    backgroundColor: '#C7E8CA',
    borderRadius: 15,
    elevation: 5,
},
extraSpaceDown: {
   flex:1,
   backgroundColor: '#FFF',
}
});