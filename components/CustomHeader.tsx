import React from 'react';
import {View, Pressable, Image, StyleSheet} from 'react-native';

interface Props {
  children: React.ReactNode;
}

export default function CustomHeader({children}: Props) {
  return (
    <View style={styles.container}>
      <View>{children}</View>
      <Pressable style={styles.pressable}>
        <Image
          style={styles.image}
          source={require('../images/setting-front-color.png')}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 10,
    marginTop: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  pressable: {
    position: 'absolute',
    right: 20,
    top: '50%',
    transform: [{translateY: -25}],
    zIndex: 2,
  },
  image: {
    width: 50,
    height: 50,
  },
});
