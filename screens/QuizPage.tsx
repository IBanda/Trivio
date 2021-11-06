import React from 'react';
import {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Answer from '../components/Answer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {decode} from 'html-entities';
import CustomHeader from '../components/CustomHeader';

interface QuizItem {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  answers: string[];
}

type Status = 'resolved' | 'rejected' | 'idle' | 'pending';

interface Payload {
  data: QuizItem[];
  status: Status;
  error: string;
}

function combineAnswers(correct: string, incorrect: string[]) {
  const {length} = incorrect;
  const arrCopy = [...incorrect];
  const indexToInsert = Math.floor(Math.random() * (length + 1));
  arrCopy.splice(indexToInsert, 0, correct);
  return arrCopy;
}

type Props = NativeStackScreenProps<RootStackParamList, 'Quiz'>;

export default function QuizPage({route, navigation}: Props) {
  const {background, image, categoryId} = route.params;
  const [payload, setPayload] = useState<Payload>({
    data: [],
    status: 'pending',
    error: '',
  });
  const [userAnswer, setUserAnswer] = useState('');
  const [questionIndex /*setQuestionIndex*/] = useState(0);
  const {width} = useWindowDimensions();

  useEffect(() => {
    setPayload(prev => ({
      ...prev,
      status: 'pending',
    }));

    fetch(`https://opentdb.com/api.php?amount=10&category=${categoryId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        const modData = (data.results as Omit<QuizItem, 'answers'>[]).map(
          result => ({
            ...result,
            answers: combineAnswers(
              result.correct_answer,
              result.incorrect_answers,
            ),
          }),
        );
        setPayload({data: modData, status: 'resolved', error: ''});
      })
      .catch(e => {
        setPayload(prev => ({
          ...prev,
          error: e.message,
        }));
      })
      .finally(() => {
        setPayload(prev => ({
          ...prev,
          status: 'idle',
        }));
      });
  }, [categoryId]);

  const onAnswerSelection = (ans: string) => {
    setUserAnswer(ans);
  };

  const correctAnswer = payload?.data?.[questionIndex]?.correct_answer;

  return (
    <SafeAreaView style={[{backgroundColor: background, flex: 1}]}>
      <CustomHeader>
        <Pressable style={styles.pressable} onPress={() => navigation.goBack()}>
          <Text style={styles.pressableText}>Back</Text>
        </Pressable>
      </CustomHeader>
      <View style={styles.container}>
        {payload.status === 'pending' ? (
          <Text>Loading...</Text>
        ) : (
          <View style={styles.container}>
            <Image source={image} style={styles.img} />
            <View style={[styles.questionContainer, {width: width - 40}]}>
              <Text style={styles.questionText}>
                {decode(payload?.data[questionIndex].question)}
              </Text>
              {payload.data[questionIndex].answers.map((text, index) => (
                <Answer
                  key={text}
                  text={text}
                  animationDelay={index * 100}
                  onSelect={onAnswerSelection}
                  isCorrect={
                    userAnswer === correctAnswer && correctAnswer === text
                  }
                  isWrong={userAnswer === text && text !== correctAnswer}
                />
              ))}
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
  },
  questionContainer: {
    padding: 5,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: -1,
    marginBottom: 20,
    color: '#FFF',
  },
  pressable: {
    borderColor: '#FFF',
    borderWidth: 2,
    width: 70,
    borderRadius: 5,
    padding: 10,
  },
  pressableText: {
    fontWeight: '600',
    color: '#FFF',
    fontSize: 12,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
