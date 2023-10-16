import React from 'react';
import {TextInput} from 'react-native';
import {darkGreen} from './Constants';
import COLORS from './Colors';
import { color } from 'react-native-elements/dist/helpers';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 5, marginLeft: 3,color: darkGreen, paddingHorizontal: 10, width: '80%',height: 60, backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}}
      placeholderTextColor={darkGreen}>
    </TextInput>
  );
};

export default Field;
