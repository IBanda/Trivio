/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
