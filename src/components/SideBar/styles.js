import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  image: {
    resizeMode: 'contain',
    height: 2104,
  },
  content: {
    paddingTop: 50,
    paddingLeft: 50,
    paddingBottom: 50,
    zIndex: 2,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 44,
    backgroundColor: THEME.COLORS.white,
    borderRadius: 30,
    paddingVertical: 5,
    paddingLeft: 24,
    paddingRight: 5,
    width: 208,
    maxHeight: 50,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  input: {
    width: 115,
    fontFamily: THEME.FONTS.regular,
    fontSize: 12,
    lineHeight: 15,
    color: THEME.COLORS.mainColor,
  },
  inputButton: {
    padding: 13,
    borderRadius: 30,
  },
  inputButtonText: {
    fontFamily: THEME.FONTS.bold,
    fontSize: 12,
    lineHeight: 15,
    color: THEME.COLORS.mainColor,
    height: 15,
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  checkBoxGroup: {
    flex: 1,
    justifyContent: 'flex-start',
    width: 150,
    marginTop: 50,
    minHeight: 150,
    maxHeight: 150,
  },
  descriptionContainer: {
    width: 150,
    marginTop: '17%',
  },
  description: {
    fontFamily: THEME.FONTS.regular,
    fontSize: 14,
    lineHeight: 17,
    color: THEME.COLORS.white,
  },
  logoContainer: {
    marginTop: 59,
  },
  logo: {
    width: 195,
    height: 79,
  },
  badgeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
