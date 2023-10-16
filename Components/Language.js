import { View, Text , Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import COLORS from './Colors'
const Language = () => {
  return (
   <SafeAreaView>
    <StatusBar backgroundColor={COLORS.LightGreen}/>
        <View style={{width: '100%', height: 120, backgroundColor: COLORS.LightGreen}}>
              <Image
                source={require('../assets/WArrowL.png')}
                style={{width: 30, height: 30, marginLeft: 7}}
              />
              <Text style={{fontSize: 30, fontWeight: 'bold', color: '#fff', marginLeft: 12, top: 10}}>Choose</Text>
       <Text style={{fontSize: 25, color: '#fff', marginLeft: 12}}>Your Language</Text>
        </View>

        <View style={{width: '90%', height: 200, top: 70, alignSelf: 'center', borderRadius: 20, backgroundColor: '#C7E8CA'}}>
                   <Text style={{fontSize: 25,top: 17,marginLeft: 10, color: '#FFF'}}>
                    Hi! My Name Is
                   </Text>
                   <Text style={{fontSize: 25,top: 17,marginLeft: 10, color: '#FFF'}}>Sam</Text>
                   <Text style={{fontSize: 30, fontWeight: 'bold', color: COLORS.LightGreen, top: 70, marginLeft: 10}}>ENGLISH</Text>
        </View>
 
        <View style={{width: '90%', height: 200, top: 100, alignSelf: 'center', borderRadius: 20, backgroundColor: '#EDF1D6'}}>
        <Text style={{fontSize: 25,top: 17,marginLeft: 10, color: '#FFF'}}>
                   Assalam O Alaikum Mera Naam
                   </Text>
                   <Text style={{fontSize: 25,top: 17,marginLeft: 10, color: '#FFF'}}>Arsh Hai</Text>
                   <Text style={{fontSize: 30, fontWeight: 'bold', color: COLORS.LightGreen, top: 50, marginLeft: 10}}>URDU</Text>
        </View>

   </SafeAreaView>
  )
}

export default Language