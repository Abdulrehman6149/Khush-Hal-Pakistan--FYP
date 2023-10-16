import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import Background from './DetailBackground';
import {darkGreen} from './Constants';
import FieldImg from './FieldImg';
import COLORS from './Colors';


const ImageDescription =(props)=>{
    return(
        <Background>
            <View style={{alignItems:'center',width:360}}>
                <Text style={{
                    color:'white',
                    fontSize:50,
                    fontWeight:'bold',
                    marginVertical:80   
                }}>
                    Description

                </Text>
            <View style={{
                    backgroundColor:'#FFF',
                    height:600,
                    width:400,
                    borderRadius: 70,
                    paddingTop:60,
                    alignItems:'center'
            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:COLORS.LightGreen,
                    paddingRight:260
                }}>
                    Name 

                </Text>
                <FieldImg
                 placeholder="Text here....."
                 keyboardType={'text'}
                 />

                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:COLORS.LightGreen,
                    paddingRight:260
                }}>
                    Detail 
                </Text>
               
                <FieldImg
                 placeholder="Lorem Ipsum Texttt."
                 keyboardType={'text'}
                 />
                
      
        <View style={{
                   marginVertical:130
        }}>
        <TouchableOpacity 
        onPress={() => props.navigation.navigate("HomeScreen")}>
        <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 20 }}>NewsFeed</Text>
        </TouchableOpacity>
        
       

    </View>
    </View>
</View>
        </Background>
    );
};


export default ImageDescription;