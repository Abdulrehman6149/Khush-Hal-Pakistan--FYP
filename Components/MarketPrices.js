import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import priceData from './priceData';
import { StatusBar } from 'expo-status-bar';
import COLORS from './Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const pricesData = JSON.parse(priceData);

export default function MarketPrices({ navigation }) {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCropType, setSelectedCropType] = useState('');
  const [prices, setPrices] = useState([]);

  const onProvinceChange = (province) => {
    setSelectedProvince(province);
    updatePrices(province, selectedCropType);
  };

  const onCropTypeChange = (cropType) => {
    setSelectedCropType(cropType);
    updatePrices(selectedProvince, cropType);
  };

  const updatePrices = (province, cropType) => {
    const provinceData = pricesData[province];
    const cropPrices = provinceData && provinceData[cropType];
    setPrices(cropPrices || []);
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
        <StatusBar backgroundColor={COLORS.LightGreen} />

        <View style={{ width: '100%', height: 40, backgroundColor: COLORS.LightGreen, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#fff', top: 5, paddingRight: 90, marginLeft: 105 }}>Market Prices</Text>
        </View>

        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Select Province:</Text>
          <Picker
            selectedValue={selectedProvince}
            onValueChange={(itemValue) => onProvinceChange(itemValue)}
            accessibilityLabel="Select Province"
            testID="province-picker"
            style={styles.picker}
          >
            <Picker.Item color='#9DC08B' label="Select Province" value="" />
            <Picker.Item color='#9DC08B' label="Punjab" value="Punjab" />
            <Picker.Item color='#9DC08B' label="Sindh" value="Sindh" />
            <Picker.Item color='#9DC08B' label="Khyber Pakhtunkhwa" value="KhyberPakhtunkhwa" />
            <Picker.Item color='#9DC08B' label="Balochistan" value="Balochistan" />
            <Picker.Item color='#9DC08B' label="Gilgit Baltistan" value="Gilgit Baltistan" />
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Select Crop Type:</Text>
          <Picker
            selectedValue={selectedCropType}
            onValueChange={(itemValue) => onCropTypeChange(itemValue)}
            accessibilityLabel="Select Crop Type"
            testID="crop-type-picker"
            style={styles.picker}
          >
            <Picker.Item color='#9DC08B' label="Select Crop Type" value="" />
            <Picker.Item color='#9DC08B' label="Vegetables" value="vegetables" />
            <Picker.Item color='#9DC08B' label="Fruits" value="fruits" />
            <Picker.Item color='#9DC08B' label="Crops" value="crops" />
          </Picker>
        </View>

        <ScrollView style={styles.priceListContainer}>
          {prices.map((item) => (
            <View key={item.name} style={styles.priceItem}>
              <Text style={styles.priceItemName}>{item.name}</Text>
              <Text style={styles.priceItemPrice}>{item.price}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 20
  },
  pickerContainer: {
    width: '95%',
    alignSelf: 'center',
    marginVertical: 10,
    borderWidth: 2,
    borderColor: COLORS.LightGreen,
    borderRadius: 5,
    overflow: "scroll",
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    top: 30
  },
  pickerLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    top: 10,
    color: COLORS.LightGreen
  },
  priceListContainer: {
    fontSize: 20,
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.LightGreen,
    borderRadius: 1,
    backgroundColor: '#FFF',
    top: 30
  },
  priceItem: {
    fontSize: 20,
    borderWidth: 2,
    borderColor: COLORS.LightGreen,
    marginBottom: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  }
});

