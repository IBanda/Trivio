import {StyleSheet, View, FlatList, Text, ListRenderItem} from 'react-native';
import CategoryCard, {Category} from '../components/CategoryCard';
import React from 'react';
import {categories} from '../data/categories';

const renderItem: ListRenderItem<Category> = ({item}) => (
  <View style={styles.renderItemContainer}>
    <CategoryCard
      title={item.title}
      icon={item.icon}
      gradientColors={item.gradientColors}
    />
  </View>
);

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>let's play</Text>
      <Text style={styles.smText}>Pick a category</Text>
      <FlatList
        style={styles.flatList}
        renderItem={renderItem}
        data={categories}
        keyExtractor={item => item.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  flatList: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
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
    marginLeft: 10,
  },
  smText: {
    marginLeft: 10,
    letterSpacing: -1,
    color: '#FF7777',
    marginBottom: 10,
  },
});
