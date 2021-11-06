import React, {useEffect, useRef} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Pressable, Text, Animated} from 'react-native';
import {decode} from 'html-entities';

interface Props {
  text: string;
  animationDelay: number;
  onSelect: (answer: string) => void;
  isCorrect: boolean | null;
  isWrong: boolean | null;
}

export default function Answer({
  text,
  animationDelay,
  onSelect,
  isCorrect,
  isWrong,
}: Props) {
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, {
      useNativeDriver: true,
      toValue: 1,
      duration: 500,
      delay: animationDelay,
    }).start();
  }, [animationDelay, fade]);
  return (
    <Animated.View style={{opacity: fade}}>
      <Pressable
        style={[
          styles.pressable,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            backgroundColor: isCorrect
              ? '#2FDD92'
              : isWrong
              ? '#D83A56'
              : '#fff',
          },
        ]}
        onPress={() => onSelect(text)}>
        <Text style={styles.answerText}>{decode(text)}</Text>
        {isCorrect ? (
          <Image
            style={styles.image}
            source={require('../images/thumb-up-front-color.png')}
          />
        ) : null}
        {isWrong ? (
          <Image
            style={styles.image}
            source={require('../images/thumb-down-front-color.png')}
          />
        ) : null}
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  pressable: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFF',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    position: 'relative',
  },
  answerText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#000',
  },
  image: {
    width: 40,
    height: 40,
    position: 'absolute',
    right: -15,
    top: '30%',
    transform: [
      {
        rotateY: '180deg',
      },
    ],
  },
});
