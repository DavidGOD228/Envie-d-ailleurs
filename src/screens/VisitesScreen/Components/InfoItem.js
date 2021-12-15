import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { getImageUrl } from '../../../helpers/functions';
import HTMLView from 'react-native-htmlview';

export const InfoItem = ({ image, title, description }) => {
  const url = getImageUrl(image);

  return (
    <View style={[styles.row, styles.border]}>
      {!!image && <Image style={styles.image} source={{ url }} />}
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.title, styles.description]}>
          <HTMLView value={description} />
        </View>
      </View>
    </View>
  );
};
