import React from 'react';
import {TextInput} from 'react-native';
import {darkGreen} from './Constants';
import COLORS from './Colors';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 5,color: darkGreen, paddingHorizontal: 10, width: '80%',height: 60, backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}}
      placeholderTextColor={darkGreen}></TextInput>
  );
};

export default Field;
