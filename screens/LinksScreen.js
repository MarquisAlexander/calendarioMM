import React from 'react';
import { ScrollView, StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
              <View style={styles.equipe}>
                <Text>Developer: Marquis</Text>
                <Text>Designer: Werdeles</Text>
                <Text>Fernando cheirinhull</Text>
              </View>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Equipe DEV',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  equipe: {
    flexGrow: 1,
    marginLeft:10,
  },
});
