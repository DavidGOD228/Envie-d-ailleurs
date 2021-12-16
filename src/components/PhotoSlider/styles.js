import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 200,
    marginTop: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 180,
    width: 210,
    marginRight: 10,
  },
  rightArrow: {
    transform: [{ rotate: '180deg' }],
    marginRight: 0,
    marginLeft: 10,
  },
  arrow: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  hide: {
    display: 'none',
  },
});
