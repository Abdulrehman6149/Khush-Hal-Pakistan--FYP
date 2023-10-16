import React,{useState} from 'react';
import{StyleSheet,Text,View,StatusBar,TextInput,Image,SafeAreaView,ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
//import ExpertSignup from '../Expertview/ExpertSignup';
import COLORS from './Colors';

const Search=()=> {
  
  return (
    <>
    <View style={styles.searchWrapperStyle}>
    <Icon size={25} name="search" color="white" style={styles.iconStyle}/>
    <StatusBar backgroundColor={COLORS.LightGreen}/>
    <TextInput 
    placeholder="Search"
    placeholderTextColor="white"
    style={styles.searchInput}/>
    <Icon size={30} name="close" color="white"  style={styles.iconStyle}/>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
    <SafeAreaView style={styles.container}>
      
  <Image style={styles.imageStyle} 
  source={require("../assets/camscan.jpg")}/>

  <Image style={styles.imageStyle} 
  source={require("../assets/M1.jpg")}/>
   <Image style={styles.imageStyle} 
  source={require("../assets/M2.jpg")}/>
   <Image style={styles.imageStyle} 
  source={require("../assets/M1.jpg")}/>
  <Image style={styles.imageStyle} 
  source={require("../assets/M2.jpg")}/>
<Image style={styles.imageStyle} 
  source={require("../assets/M1.jpg")}/>
  
  </SafeAreaView>
  
</ScrollView>

</>
  );
};
const styles = StyleSheet.create({
  container:
  {
    flexDirection:'column',
    //backgroundColor:'#006400',
    justifyContent:'center',
    alignSelf:'stretch'
  },
  searchWrapperStyle: {
    backgroundColor: COLORS.LightGreen,
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
  },
  iconStyle: {
    marginTop: 12,
    marginHorizontal: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 0,
    marginTop:4,
    color: "white",
  },
  imageStyle:
  {
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:60,
    width:100,
    height:100,
    borderRadius:10,
    marginLeft:20,
    //alignItems:'center'
  },
});


export default Search;