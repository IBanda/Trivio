import React, {useEffect, useRef} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  ImageSourcePropType,
  Animated,
  useWindowDimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export interface Category {
  icon: ImageSourcePropType;
  title: string;
  gradientColors: string[];
  delay?: number;
}

interface Props extends Category {}

export default function CategoryCard({
  icon,
  title,
  gradientColors,
  delay,
}: Props) {
  const {width} = useWindowDimensions();
  const translateX = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      useNativeDriver: true,
      toValue: 0,
      duration: 500,
      delay,
    }).start();
  }, [translateX, delay]);

  return (
    <Animated.View style={[styles.container, {transform: [{translateX}]}]}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={gradientColors}
        style={styles.linearGradient}>
        <View>
          <Pressable style={styles.pressable}>
            <Image
              style={styles.pressableImg}
              source={require('../images/play-front-clay.png')}
            />
          </Pressable>
          <Text style={styles.text}>{title}</Text>
        </View>
      </LinearGradient>
      <Image source={icon} style={styles.image} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  linearGradient: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 20,
    position: 'relative',
    backgroundColor: '#FF7777',
  },
  text: {
    fontWeight: '800',
    fontSize: 20,
    color: '#FFF',
    textTransform: 'uppercase',
    letterSpacing: -1,
  },
  pressable: {
    width: 40,
    height: 40,
    borderColor: '#EDEDED',
    borderRadius: 5,
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  pressableImg: {
    width: 30,
    height: 30,
  },
  image: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: 5,
    top: -50,
  },
});
