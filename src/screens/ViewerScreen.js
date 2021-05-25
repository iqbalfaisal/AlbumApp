import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import AlbumCard from '../components/AlbumCard';
import {Albums} from '../data';

export default function ViewerScreen({navigation}) {
  return (
    <FlatList
      style={styles.container}
      data={Albums}
      renderItem={({item, index}) => <AlbumCard key={index} data={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10, backgroundColor: 'white'},
});
