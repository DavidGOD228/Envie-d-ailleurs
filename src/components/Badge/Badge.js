import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { THEME } from '../../theme';

export const Badge = ({
  count,
  backgroundColor = THEME.COLORS.yellow,
  textColor = THEME.COLORS.white,
}) => {
  if (!count) {
    return null;
  }

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{count}</Text>
    </View>
  );
};
