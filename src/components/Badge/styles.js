import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    padding: 10,
    marginLeft: 10,
    height: 40,
    alignItems: 'center',
    minWidth: 40,
  },
  text: {
    fontFamily: THEME.FONTS.regular,
    fontSize: 24,
    lineHeight: 24,
    color: THEME.COLORS.white,
  },
});
