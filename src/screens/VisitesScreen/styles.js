import { Dimensions, StyleSheet } from 'react-native';
import { THEME } from '../../theme';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {},
  formWrapper: {
    width: windowWidth - 400,
    alignItems: 'center',
    zIndex: 2,
    marginLeft: 350,
    marginTop: 50,
    height: '100%',
    marginBottom: 160,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  form: {
    maxWidth: 589,
    overflow: 'hidden',
  },
  title: {
    fontFamily: THEME.FONTS.bold,
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'left',
    color: THEME.COLORS.primary,
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    width: 290,
    height: 48,
    backgroundColor: THEME.COLORS.yellow,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginVertical: 30,
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
  flex: {
    flex: 1,
  },
});
