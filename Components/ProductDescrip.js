import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from './Colors'
import { ScrollView } from 'react-native-gesture-handler'
import { AirbnbRating } from 'react-native-ratings'
import Sellerprofile from '../Components/Sellerprofile'

const ProductDescrip = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ width: '100%', height: 45, backgroundColor: '#fff' }}>
        <TouchableOpacity onPress={() => navigation.navigate("MarketPlace")}>
          <Image
            source={require('../assets/ArrowL.png')}
            style={{ width: 40, height: 40 }}
          /></TouchableOpacity>
      </View>
      <View style={{ width: '100%', height: '50%' }}>

        <Image
          source={{ uri: product.photo[0] }}
          style={{ resizeMode: 'cover', height: '80%', width: '90%', borderRadius: 40, alignSelf: 'center', top: -10 }}
        />
      </View>
      <View style={{ flexDirection: 'row', width: '100%', justifyContent:'space-around' }}>
        <Text style={{ fontSize: 23, fontWeight: 'bold', marginLeft: 14, top: -55, color: COLORS.LightGreen }}>{product.title}</Text>
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 40, top: -55, color: COLORS.LightGreen }}>Rs. {product.price}</Text>
      </View>
      <View style={{ width: '96%', height: '20%', backgroundColor: '#EDF1D6', top: -49, alignSelf: 'center', borderRadius: 20 }}>
        <Text style={{ fontSize: 20, marginLeft: 22, top: 14, fontWeight: 'bold', color: COLORS.LightGreen }}>DESCRIPTION</Text>

        <Text style={{ fontSize: 17, color: COLORS.LightGreen, width: '90%', alignSelf: 'center', marginLeft: 7, height: '60%', top: 25 }}>
          {product.description} </Text>
      </View>
      <View style={{ width: '85%', alignSelf: 'center', height: 3, backgroundColor: '#EDF1D6', marginTop: -45 }}></View>
      <View style={{ width: '95%', alignSelf: 'center', height: 85, backgroundColor: '#EDF1D6', top: 3, borderRadius: 20 }}>
        <View style={{ width: '95%', height: 30, justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'center', top: 5 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', color: COLORS.LightGreen }}>SELLER</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Sellerprofile", { product, sellerId: product.postedBy.id })}>
            <Text style={{ fontSize: 20, color: COLORS.LightGreen }}>Sellers Details</Text></TouchableOpacity>
        </View>
        <View style={{ width: '97%', flexDirection: 'row', alignSelf: 'center', height: 40 }}>
          <Image
            source={require('../assets/Dp.jpg')}
            style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 8, top: 3, borderColor: COLORS.LightGreen, borderWidth: 1 }}
          />
          <Text style={{ fontSize: 20, fontWeight: 'bold', top: 10, marginLeft: 8, color: COLORS.LightGreen }}>{product.postedBy.name}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ProductDescrip