import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    backgroundColor: '#00000099',
    ...StyleSheet.absoluteFill,
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
