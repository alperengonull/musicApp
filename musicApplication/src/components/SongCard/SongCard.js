import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './SongCard.style';

const SongCard = ({song}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: song.imageUrl}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{song.title}</Text>
        <View style={styles.body}>
        <View style={styles.info_container}>
          <Text style={styles.artist} >{song.artist}</Text>
          <Text style={styles.year}>{song.year}</Text>

        </View>
       { song.isSoldOut && (<View style={styles.soldout_container}>
            <Text style={styles.soldout_title}>TÜKENDİ</Text>
        </View>)}
        </View>
      </View>
    </View>
  );
};

export default SongCard;
