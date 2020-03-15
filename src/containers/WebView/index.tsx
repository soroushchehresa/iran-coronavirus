import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';

interface Props {
  url: string,
}

export default ({ url }: Props) => (
  <SafeAreaView style={styles.container}>
    <WebView
      source={{ uri: url }}
      startInLoadingState={true}
      scalesPageToFit={true}
      javaScriptEnabled={true}
      domStorageEnabled={true}
    />
  </SafeAreaView>
);
