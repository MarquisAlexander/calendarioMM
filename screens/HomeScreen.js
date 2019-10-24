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
      <WebView source={{ uri: 'https://www.supersaas.com.br/schedule/Fernando_Nascimento/Calend%C3%A1rio_de_Reuni%C3%B5es_M&M' }} /> 
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
    height:25,
    backgroundColor: "#B22222",
    justifyContent: 'center',
    alignItems: 'center',
  },
});
