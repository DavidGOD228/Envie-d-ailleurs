import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';
export const styles = StyleSheet.create({
  title: {
    fontFamily: THEME.FONTS.bold,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'left',
    color: THEME.COLORS.primary,
    marginTop: 12,
  },
  description: {
    fontSize: 12,
    fontFamily: THEME.FONTS.regular,
    marginTop: 8,
    maxHeight: 100,
    marginBottom: 20,
    width: '100%',
    maxWidth: 500,
  },
  wrapper: {
    width: '100%',
    maxWidth: 500,
  },
  row: {
    flexDirection: 'row',
    zIndex: 2,
    width: '100%',
  },
  image: {
    width: 70,
    height: 60,
    marginTop: 15,
    marginRight: 19,
    marginBottom: 18,
    alignSelf: 'center',
  },
  border: {
    borderColor: THEME.COLORS.primary,
    borderBottomWidth: 1,
  },
  removeIcon: {
    position: 'absolute',
    right: 0,
    top: 15,
    width: 40,
    height: 40,
    zIndex: 3,
  },
});
