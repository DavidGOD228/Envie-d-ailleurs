import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.white,
    borderRadius: 50,
    maxHeight: 50,
    maxWidth: 50,
    right: 0,
    flexDirection: 'row',
    overflow: 'hidden',
    marginRight: -75,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  openContainer: {
    maxWidth: 180,
  },
  input: {
    marginLeft: 10,
    minWidth: 65,
    color: THEME.COLORS.mainColor,
    fontSize: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    marginLeft: 0,
    alignItems: 'center',
  },
  go: {
    color: THEME.COLORS.mainColor,
    fontSize: 20,
  },
  padlock: {
    width: 50,
    minWidth: 50,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
