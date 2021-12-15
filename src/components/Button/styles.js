import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  buttonContainer: {
    width: 146,
    height: 50,
    marginTop: 38,
    paddingVertical: 16,
    borderRadius: 30,
    backgroundColor: THEME.COLORS.mainColor,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: THEME.FONTS.mainTitle,
    fontSize: 15,
    lineHeight: 18,
    color: THEME.COLORS.white,
    textTransform: 'uppercase',
  },
});
