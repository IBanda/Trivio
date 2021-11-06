/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ImageSourcePropType, StyleSheet, View} from 'react-native';
import Home from './screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QuizPage from './screens/QuizPage';

export type RootStackParamList = {
  Home: undefined;
  Quiz: {
    categoryId: number;
    background: string;
    image: ImageSourcePropType;
  };
};

export default function App() {
  const {Navigator, Screen, Group} =
    createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <View style={styles.app}>
        <Navigator>
          <Group screenOptions={{headerShown: false}}>
            <Screen name="Home" component={Home} />
            <Screen name="Quiz" component={QuizPage} />
          </Group>
        </Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
