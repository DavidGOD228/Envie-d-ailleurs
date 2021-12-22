import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

export const useKeyboard = (handleOpen = () => {}, handleHide = () => {}) => {
  const [isShowed, setIsShowed] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', keyboardDidShow);
    Keyboard.addListener('keyboardWillHide', keyboardDidHide);
    return () => Keyboard.removeAllListeners();
  }, []);

  const keyboardDidShow = () => {
    if (handleOpen) {
      handleOpen();
    }
    setIsShowed(true);
  };

  const keyboardDidHide = () => {
    if (handleHide) {
      handleHide();
    }
    setIsShowed(false);
  };

  return isShowed;
};
