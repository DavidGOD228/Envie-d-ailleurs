import { Dimensions, StyleSheet } from 'react-native';
import { THEME } from '../../theme';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: { flex: 1 },
  wrapper: {
    width: windowWidth - 320,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    marginLeft: 300,
    maxWidth: 880,
    alignSelf: 'center',
    marginBottom: 250,
  },
  form: {
    maxWidth: 600,
    overflow: 'hidden',
  },
  title: {
    fontFamily: THEME.FONTS.bold,
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'left',
    color: THEME.COLORS.sapphire,
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    width: 293,
    height: 48,
    backgroundColor: THEME.COLORS.yellow,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 30,
  },
  buttonText: {
    color: THEME.COLORS.white,
    fontFamily: THEME.FONTS.regular,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'left',
  },
  topBorder: {
    borderColor: THEME.COLORS.primary,
    borderTopWidth: 1,
    marginTop: 30,
  },
  singleTitle: {
    marginBottom: 8,
  },
  description: {
    fontFamily: THEME.FONTS.regular,
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'left',
    marginTop: 31,
    width: '100%',
    marginRight: 10,
    zIndex: 10,
  },
  priceWrapper: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    textAlign: 'right',
    width: '100%',
    marginTop: 21,
    marginRight: 20,
  },
  priceTitle: {
    color: THEME.COLORS.primary,
    fontSize: 14,
  },
  price: {
    color: THEME.COLORS.grey,
    marginLeft: 12,
    fontSize: 14,
  },
  flex: {
    flex: 1,
  },
  p: {
    fontSize: 20,
  },
  keyboardShowed: {
    marginBottom: 50,
  },
});
