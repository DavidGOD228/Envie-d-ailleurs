import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';
export const styles = StyleSheet.create({
  modal: {
    width: 300,

    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    alignSelf: 'center',
    top: '30%',
    marginTop: -50,
    backgroundColor: 'white',
    borderRadius: 25,
  },
  title: {
    fontFamily: THEME.FONTS.bold,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: THEME.COLORS.black,
    paddingVertical: 15,
    paddingHorizontal: 40,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    fontFamily: THEME.FONTS.regular,
    paddingVertical: 15,
    paddingHorizontal: 15,
    textAlign: 'left',
    maxHeight: 200,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: 123,
  },
  border: {
    borderColor: THEME.COLORS.black,
    borderBottomWidth: 1,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  overlay: {
    backgroundColor: '#00000099',
    ...StyleSheet.absoluteFill,
  },
  closeImage: {
    position: 'absolute',
    right: 20,
    top: 10,
    height: 50,
    width: 50,
    alignItems: 'flex-end',
  },
  buttonWrapper: {
    paddingHorizontal: 10,
    paddingTop: 0,
    paddingBottom: 15,
    alignSelf: 'center',
  },
  buttonContainer: {
    marginTop: 0,
  },
});
