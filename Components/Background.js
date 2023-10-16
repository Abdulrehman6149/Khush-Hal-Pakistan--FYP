// import React from 'react';
// import {View, ImageBackground} from 'react-native';

// const Background = ({ children }) => {
//   return (
//     <View>
//       <ImageBackground source={require("../Components/images/2.jpg")} 
//       style={{ height: '100%' }} />
//       <View style={{ position: "absolute"}}>
//         {children}
//       </View>
//     </View>
//   );
// }

// export default Background;
import React from 'react';
import { View, ImageBackground, StatusBar } from 'react-native';

const Background = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground source={require("../Components/images/2.jpg")} style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          {children}
        </View>
      </ImageBackground>
    </View>
  );
}

export default Background;

