import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, WebView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import "./assets/StatusBar";

import AppNavigator from './navigation/AppNavigator';

export default function App(props) {
  
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
