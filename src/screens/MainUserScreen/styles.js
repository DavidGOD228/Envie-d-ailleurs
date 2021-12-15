import { Dimensions, StyleSheet } from 'react-native';
import { THEME } from '../../theme';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.white,
  },
  content: {
    flex: 1,
    marginLeft: 250,

    overflow: 'hidden',
  },
  map: {
    marginLeft: 250,
    backgroundColor: 'red',
    height: height,
  },
});
