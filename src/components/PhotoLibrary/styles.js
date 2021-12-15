import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  image: {
    backgroundColor: 'red',
    height: 220,
  },
  imageWrapper: {
    flexWrap: 'wrap',
    height: 220,
    margin: 10,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
});
