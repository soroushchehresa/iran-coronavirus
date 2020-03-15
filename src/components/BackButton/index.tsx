import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

export default () => (
  <TouchableOpacity
    activeOpacity={.7}
    style={styles.container}
    onPress={() => Actions.pop()}
  >
    <Text style={styles.text}>
      بازگشت
    </Text>
  </TouchableOpacity>
);
