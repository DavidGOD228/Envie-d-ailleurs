import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  input: {
    borderRadius: 24,
    borderColor: THEME.COLORS.primary,
    borderWidth: 1,
    padding: 10,
    height: 40,
    marginRight: 12,
  },
  container: {},
  error: {
    paddingLeft: 10,
    paddingTop: 5,
    color: THEME.COLORS.red,
  },
  labelWrapper: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  label: {
    fontSize: 11,
    fontStyle: 'normal',
    textAlign: 'left',
    color: '#ae8168',
    marginBottom: 5,
    marginTop: 10,
  },
  textarea: {
    height: 160,
  },
});
