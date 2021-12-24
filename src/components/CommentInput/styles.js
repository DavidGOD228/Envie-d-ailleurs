import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
  },
  container: {
    marginLeft: -10,
    marginTop: 20,
    backgroundColor: '#e0e0e0',
    padding: 20,
    paddingTop: 10,
    minHeight: 60,
  },
  input: {
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    fontFamily: THEME.FONTS.bold,
    textTransform: 'uppercase',
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
});
