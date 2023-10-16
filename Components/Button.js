import * as React from 'react';
import {Text,TouchableOpacity,StyleSheet, View} from 'react-native'


export default function MyButton({text,onPress}){
return(
    <TouchableOpacity onPress={onPress}>
        <View style={styles.Button}>
        <Text style={styles.Text}>{text}</Text>
        </View>
        </TouchableOpacity>
)
}
const styles=StyleSheet.create({
    Button:
    {
      height:50,
      width: '90%',
      borderRadius: 10,
      alignItems:'center',
      justifyContent:'center',     
    },
    Text:
    {
        fontWeight:'bold',
        fontSize:18,
        color:'#fff',
        alignItems: 'center'
    }
})

