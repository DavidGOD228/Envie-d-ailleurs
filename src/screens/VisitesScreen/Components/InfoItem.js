import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';
import { getImageUrl } from '../../../helpers/functions';
import HTMLView from 'react-native-htmlview';

import TrashIcon from '../../../components/Svg/Trash';
export const InfoItem = ({ image, title, description, onRemove }) => {
  const url = getImageUrl(image);

  return (
    <View style={[styles.row, styles.border]}>
      <TouchableWithoutFeedback onPress={onRemove}>
        <View style={styles.removeIcon}>
          <TrashIcon />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.row}>
        {!!image && <Image style={styles.image} source={{ url }} />}
        <View>
          <Text style={styles.title}>{title}</Text>
          <View style={[styles.title, styles.description]}>
            <HTMLView value={description} />
          </View>
        </View>
      </View>
    </View>
  );
};
