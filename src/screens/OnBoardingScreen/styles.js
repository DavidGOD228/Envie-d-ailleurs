import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.white,
    paddingRight: 12,
    paddingLeft: 94,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 83,
    zIndex: 2,
    elevation: 2,
  },
  title: {
    width: 365,
    fontFamily: THEME.FONTS.mainTitle,
    fontSize: 58,
    lineHeight: 60,
    textTransform: 'uppercase',
    color: THEME.COLORS.mainColor,
  },
  subTitleContainer: {
    width: 260,
    paddingTop: 10,
  },
  subTitle: {
    fontFamily: THEME.FONTS.mainSubTitle,
    fontSize: 28,
    lineHeight: 33,
    fontWeight: '600',
    color: THEME.COLORS.black,
  },
  descriptionContainer: {
    width: 279,
    marginTop: 41,
  },
  description: {
    fontFamily: THEME.FONTS.regular,
    fontSize: 14,
    lineHeight: 17,
    color: THEME.COLORS.black,
  },
  buttonContainer: {
    width: 146,
    height: 50,
    marginTop: 38,
    paddingVertical: 16,
    borderRadius: 30,
    backgroundColor: THEME.COLORS.mainColor,
    elevation: 4,
    zIndex: 10,
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
  },
  logoContainer: {
    marginTop: 69,
  },
  logo: {
    width: 256,
    height: 103,
  },
  image: {
    width: 582,
    height: 576,
    resizeMode: 'contain',
  },
});
