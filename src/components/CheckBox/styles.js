import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkBox: {
    flex: 1,
    flexDirection: 'row',
    maxWidth: 40,
    height: 20,
    borderRadius: 10,
    backgroundColor: THEME.COLORS.white,
    marginRight: 10,
  },
  containerLeft: {
    justifyContent: 'flex-start',
  },
  containerRight: {
    justifyContent: 'flex-end',
  },
  innerContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  text: {
    fontFamily: THEME.FONTS.regular,
    fontSize: 14,
    lineHeight: 16,
    color: THEME.COLORS.white,
  },
});
