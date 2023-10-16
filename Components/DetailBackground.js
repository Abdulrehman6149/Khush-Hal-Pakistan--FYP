import React from 'react';
import {View, ImageBackground} from 'react-native';

const DetailBackground = ({ children }) => {
  return (
    <View>
      <ImageBackground source={require("../Components/images/2.jpg")} 
      style={{ height: '100%' }} />
      <View style={{ position: "absolute" }}>
        {children}
      </View>
    </View>
  );
}

export default DetailBackground;
