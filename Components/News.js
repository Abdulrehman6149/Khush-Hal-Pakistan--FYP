import { View, Text ,StyleSheet} from 'react-native'
import React,{useState} from 'react'
import {WebView} from 'react-native-webview'

const News = () => {
  const [url, setUrl] = useState('https://tribune.com.pk/agriculture');

  return (
    <View style={styles.container}>
      <WebView
        style={styles.webView}
        source={{ uri: url }}
        onNavigationStateChange={(event) => {
          setUrl(event.url);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '98%',
    height: '100%',
    top: 37,
    flex: 1,
    marginLeft: 4
  },
  webView: {
    width: '100%',
    height: '80%',
  },
});


export default News