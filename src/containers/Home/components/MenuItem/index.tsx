import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
  text: string,
  icon: HTMLImageElement,
  onPress: () => void,
}


export default ({ text, icon, onPress }: Props) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.container}
    activeOpacity={.6}
  >
    <Image source={icon} style={styles.icon} />
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);
