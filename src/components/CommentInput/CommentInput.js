import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { STRINGS } from '../../constants';

export const CommentInput = ({ comment }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>{STRINGS.VISITED.commentTitle}</Text>
        <Text style={styles.input}>{comment}</Text>
      </View>
    </View>
  );
};
