import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  WebView,
} from 'react-native';

export default function HomeScreen() {
  return (
    //texto no topo da tela
    //webview é a renderização da tela
    <View style={styles.container}>
      <Text style={styles.textStart}>Calendário</Text>
      <WebView source={{ uri: 'https://facebook.github.io/react-native/' }} /> 
      </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  textStart: {
    color: "#fff",
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18,
      height:30,
      backgroundColor: "#751cb1",
      justifyContent: 'center',
      alignItems: 'center',
  },
});
