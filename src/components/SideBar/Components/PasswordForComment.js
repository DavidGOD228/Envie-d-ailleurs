import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { styles } from './styles';
import { THEME } from '../../../theme';
import Padlock from '../../Svg/Padlock';
import AppContext from '../../../context/AppContext/AppContext';
import { OverlayLoader } from '../../OverlayLoader/OverlayLoader';

export const PasswordForComment = () => {
  const [isInputShow, setIsInputShow] = useState(false);
  const [text, setText] = useState('');
  const {
    isLoading,
    handleUnlockComment,
    isCommentUnlocked,
    setIsCommentUnlocked,
  } = useContext(AppContext);
  const handlePress = () => {
    if (!isCommentUnlocked) {
      setIsInputShow(true);
    } else {
      setIsCommentUnlocked(false);
    }
  };

  const handleSendPassword = async () => {
    await handleUnlockComment(text);
    setText('');
    setIsInputShow(false);
  };
  const handleTextChange = (text) => {
    if (text.length < 5) {
      setText(text);
    } else {
      Alert.alert('Longueur maximale: 4');
    }
  };
  return (
    <View
      style={[styles.container, isInputShow && styles.openContainer]}
      onTouchStart={handlePress}
    >
      {!!isInputShow && (
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={text}
            letterSpacing={5}
            onChangeText={handleTextChange}
            placeholder={'0000'}
            placeholderTextColor={THEME.COLORS.mainColor}
            keyboardType={'numeric'}
          />
          <Text style={styles.go} onPress={handleSendPassword}>
            Go
          </Text>
        </View>
      )}
      <View style={styles.padlock}>
        <Padlock fill={isCommentUnlocked ? 'green' : '#ae8168'} />
      </View>
      {isLoading && <OverlayLoader />}
    </View>
  );
};
