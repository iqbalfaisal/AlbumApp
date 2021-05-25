import React, {useState} from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {find} from 'lodash';

import {Users, Photos} from '../data';

export default function AlbumCard({data: {userId, id, title}}) {
  const navigation = useNavigation();

  let {username, email, website} = find(Users, {id: userId});
  let photo_detail = find(Photos, {albumId: id});

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('ViewerScreen', {
          albumTitle: title,
          ...photo_detail,
        })
      }>
      <Image
        style={styles.thumbnail}
        source={{
          uri: photo_detail.thumbnailUrl,
        }}
      />
      <View style={styles.userDetails}>
        <Text style={styles.albumTitle}>{title}</Text>
        <Text>Album Owner: {username}</Text>
        <Text>Email: {email}</Text>
        <Text>Website: {website}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  albumTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  userDetails: {
    flex: 1,

    // alignSelf: 'center',
    padding: 10,
  },
  thumbnail: {
    // flex: 1,

    alignSelf: 'center',
    width: 120,
    height: 120,
  },
});
