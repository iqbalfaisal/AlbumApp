import _ from 'lodash';
import React, {useState} from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {Users, Photos} from '../data';

export default function AlbumCard({data: {userId, id, title}}) {
  let {username, email, website} = _.find(Users, {id: userId});
  let {thumbnailUrl} = _.find(Photos, {albumId: id});

  return (
    <View style={styles.container}>
      <Image
        style={styles.thumbnail}
        source={{
          uri: thumbnailUrl,
        }}
      />
      <View style={styles.userDetails}>
        <Text style={styles.albumTitle}>{title}</Text>
        <Text>Album Owner: {username}</Text>
        <Text>Email: {email}</Text>
        <Text>Website: {website}</Text>
      </View>
    </View>
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
