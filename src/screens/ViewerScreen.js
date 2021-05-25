import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {filter} from 'lodash';

import {Photos} from '../data';

export default function ViewerScreen({navigation, route}) {
  const [current, setCurrent] = useState(route.params);
  const [albumTitle] = useState(route.params.albumTitle);

  const [albums] = useState(filter(Photos, {albumId: current.albumId}));

  const {title, thumbnailUrl} = current;

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.title}>{albumTitle}</Text>
        <View style={styles.imageContainer}>
          <Text style={styles.title}>back</Text>
          <Image
            style={styles.thumbnail}
            source={{
              uri: thumbnailUrl,
            }}
          />
          <Text style={styles.title}>next</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>

      <FlatList
        style={styles.bottomView}
        data={albums}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={[
              styles.logoContainer,
              {borderWidth: item.id == current.id ? 3 : 0},
            ]}>
            <Image
              style={styles.logo}
              source={{
                uri: item.thumbnailUrl,
              }}
            />
          </TouchableOpacity>
        )}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10, backgroundColor: 'white'},
  topView: {flex: 1, flexDirection: 'column'},
  bottomView: {flex: 1, flexDirection: 'column'},

  imageContainer: {flex: 3, flexDirection: 'row'},
  logoContainer: {flex: 1, padding: 5},

  logo: {
    width: 120,
    height: 120,
  },
  thumbnail: {
    flex: 3,
    alignSelf: 'center',
    width: 120,
    height: 120,
  },

  title: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
