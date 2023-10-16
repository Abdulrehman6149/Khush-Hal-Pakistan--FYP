import React from 'react';
import {TextInput} from 'react-native';
import COLORS from './Colors';


const FieldImg = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 10, paddingHorizontal: 30, width: '80%', backgroundColor: '#fff',borderWidth: 2,borderColor: COLORS.LightGreen,height: 50, marginVertical: 10}}
      placeholderTextColor="black"></TextInput>
  );
};

export default FieldImg;
