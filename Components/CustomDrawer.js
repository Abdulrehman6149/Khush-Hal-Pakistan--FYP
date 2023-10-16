import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import profile from '../assets/Profile.png';
import COLORS from './Colors';

export default function CustomDrawer(props) {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState();
  const commonImage = 'https://cdn-icons-png.flaticon.com/512/9780/9780313.png';
  const ListArray = [
    { icon: '', title: 'HOME' },
    { icon: '', title: 'ABOUT US' },
    { icon: '', title: 'NEWS' },
    { icon: '', title: 'CONTACT US' },
    { icon: '', title: 'HELP' },
    { icon: '', title: 'FEEDBACK' },
    



  ];

  const BottomList = [{ icon: '', title: 'LOGOUT' },



  ];

  const Item = ({ title, icon, onPress, backgroundColor, color, index }) => (
    <TouchableOpacity
      onPress={() => onPress(index)}
      style={[styles.item, { backgroundColor: backgroundColor }]}>
      <Text
        style={[styles.title, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item, index }) => {

    const backgroundColor = item.title === selectedId ? 'white' : COLORS.LightGreen;
    const color = item.title === selectedId ? COLORS.LightGreen : 'white';
    return (
      <Item
        onPress={index => {
          setSelectedId(item.title);
          //console.log('index ::',props);
          props.navigation.navigate(props?.state?.routes[index].name);
        }}
        title={item.title}
        index={index}
        icon={item.icon}
        backgroundColor={backgroundColor}
        color={color} />
    );
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        {/* Profile */}
        <View style={{ flex: 0.25, backgroundColor: COLORS.LightGreen, paddingTop: 15, paddingHorizontal: 10 }}>
          <Image source={profile} style={{
            width: 60,
            height: 60,
            borderRadius: 10,
            marginTop: 40,
            marginLeft: 10
          }}>
          </Image>
          <Text style={{ paddingRight: 5, color: 'white', fontWeight: 'bold', fontSize: 15, marginLeft: 13 }}>Rafia Aziz</Text>
          <TouchableOpacity>
            <Text style={{ paddingRight: 5, color: 'white', fontSize: 15, marginTop: 10, marginLeft: 14 }}>View Profile</Text>
          </TouchableOpacity>
        </View>
        {/* FlatList */}
        <View style={{ flex: 0.5, backgroundColor: COLORS.LightGreen }}>
          <FlatList
            data={ListArray}
            renderItem={renderItem}
          />
        </View>

        {/* BottomList */}
        <View style={{ flex: 0.3, backgroundColor: COLORS.LightGreen }}>
          <FlatList
            data={BottomList}
            renderItem={renderItem}
            style={{ marginTop: 130 }}
          />
        </View>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingVertical: 10,
    marginVertical: 0,
    marginHorizontal: 16,
    flexDirection: 'row',
    borderRadius: 10,
    width: 200,
    height: 50


  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'space-between',
    marginTop: 5,
    marginLeft: 10
  },
});