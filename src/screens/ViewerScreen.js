import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {filter, findIndex} from 'lodash';

import {Photos} from '../data';

export default function ViewerScreen({navigation, route}) {
  const [current, setCurrent] = useState(route.params);

  const [albumTitle] = useState(route.params.albumTitle);

  const [albums] = useState(filter(Photos, {albumId: current.albumId}));
  const [index, setIndex] = useState(findIndex(albums, {id: current.id}));

  const {title, thumbnailUrl} = current;

  useEffect(() => {}, []);

  const swipeForward = () => {
    if (index == albums.length - 1) {
      setCurrent(albums[0]);
      setIndex(0);
    } else {
      setCurrent(albums[index + 1]);
      setIndex(index + 1);
    }
  };
  const swipeBackward = () => {
    if (index == 0) {
      setCurrent(albums[albums.length - 1]);
      setIndex(albums.length - 1);
    } else {
      setCurrent(albums[index - 1]);
      setIndex(index - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.title}>{albumTitle}</Text>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => swipeBackward()}>
            <Text style={styles.title}>back</Text>
          </TouchableOpacity>
          <Image
            style={styles.thumbnail}
            source={{
              uri: thumbnailUrl,
            }}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => swipeForward()}>
            <Text style={styles.title}>next</Text>
          </TouchableOpacity>
        </View>
        <Text style={[{flex: 1}, styles.title]}>{title}</Text>
      </View>

      <FlatList
        style={styles.bottomView}
        data={albums}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => {
              setCurrent(item);
              setIndex(index);
            }}
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
  logoContainer: {flex: 1 / 3, padding: 5},
  buttonContainer: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

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
    // flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
