import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ListRenderItem,
  SafeAreaView,
} from 'react-native';
import CategoryCard from '../components/CategoryCard';
import React from 'react';
import {categories, Category} from '../data/categories';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import CustomHeader from '../components/CustomHeader';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: Props) {
  const renderItem: ListRenderItem<Category> = ({item, index}) => (
    <View style={styles.renderItemContainer}>
      <CategoryCard
        title={item.title}
        icon={item.icon}
        gradientColors={item.gradientColors}
        delay={index * 100}
        onPress={() =>
          navigation.navigate('Quiz', {
            categoryId: item.id,
            background: item.gradientColors[1],
            image: item.icon,
          })
        }
      />
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.textWrapper}> */}
      <CustomHeader>
        <Text style={styles.text}>let's play</Text>
        <Text style={styles.smText}>Pick a category</Text>
      </CustomHeader>
      {/* </View> */}
      <FlatList
        style={styles.flatList}
        renderItem={renderItem}
        data={categories}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  textWrapper: {
    paddingHorizontal: 20,
  },
  flatList: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  renderItemContainer: {
    marginBottom: 50,
  },
  text: {
    color: '#FF7777',
    fontSize: 30,
    textTransform: 'capitalize',
    fontWeight: '800',
    letterSpacing: -1,
    // marginTop: 20,
  },
  smText: {
    letterSpacing: -1,
    color: '#FF7777',
    // marginBottom: 10,
  },
});
