import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

interface Props {
  text: string,
  pageTitle: string,
  url: string,
}

export default ({ text, pageTitle: title, url }: Props) => {
  const handlePress = () => {
    Actions.WebView({ title, url });
  };
  return (
    <TouchableOpacity
      activeOpacity={.6}
      onPress={handlePress}
      style={styles.container}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
