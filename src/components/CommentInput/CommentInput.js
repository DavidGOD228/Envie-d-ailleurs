import React, { useState, useContext } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { styles } from './styles';
import { THEME } from '../../theme';
import { STRINGS } from '../../constants';
import AppContext from '../../context/AppContext/AppContext';

export const CommentInput = ({ scrollToBottom }) => {
  const [comment, setComment] = useState('');
  const { isLoading, uploadComment } = useContext(AppContext);

  const handleCommentTextChange = (text) => {
    setComment(text);
  };
  const handleSubmit = () => {
    uploadComment(comment);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>{STRINGS.VISITED.commentTitle}</Text>
        <TextInput
          style={styles.input}
          value={comment}
          multiline
          numberOfLines={10}
          onChangeText={handleCommentTextChange}
          placeholderTextColor={THEME.COLORS.black}
          onFocus={scrollToBottom}
        />
      </View>
      <TouchableOpacity
        onPress={handleSubmit}
        style={styles.button}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.buttonText}>{STRINGS.VISITED.envoyer}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
