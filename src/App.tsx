import React from 'react';
import { Alert, BackHandler } from 'react-native';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import Home from './containers/Home';
import TestList from './containers/TestList';
import NewsList from './containers/NewsList';
import WebView from './containers/WebView';
import Corona from './containers/Corona';
import BackButton from 'src/components/BackButton';
import styles from './styles';

export default () => {
  const onBackAndroid = () => {
    switch (Actions.currentScene) {
      case 'Home':
        Alert.alert(
          'خروج',
          'میخواهید از برنامه خارج شوید؟',
          [
            {
              text: 'بله',
              onPress: () => BackHandler.exitApp(),
            },
            {
              text: 'خیر',
              onPress: () => {
              },
            },
          ],
          {
            cancelable: false,
            onDismiss: () => {
            },
          },
        );
        return true;
      default:
        return false;
    }
  };
  return (
    <Router
      sceneStyle={styles.app}
      backAndroidHandler={onBackAndroid}
    >
      <Stack key="root">
        <Scene
          key="Home"
          component={Home}
          hideNavBar
          initial
        />
        <Scene
          key="TestList"
          title="خودارزیابی ویروس کرونا"
          component={TestList}
          titleStyle={styles.pageTitle}
          navigationBarStyle={styles.navigationBarStyle}
          renderBackButton={() => <BackButton />}
        />
        <Scene
          key="NewsList"
          title="لیست خبرگزاری ها"
          component={NewsList}
          titleStyle={styles.pageTitle}
          navigationBarStyle={styles.navigationBarStyle}
          renderBackButton={() => <BackButton />}
        />
        <Scene
          key="Corona"
          title="درباره کرونا"
          component={Corona}
          titleStyle={styles.pageTitle}
          navigationBarStyle={styles.navigationBarStyle}
          renderBackButton={() => <BackButton />}
        />
        <Scene
          key="WebView"
          component={WebView}
          titleStyle={styles.pageTitle}
          navigationBarStyle={styles.navigationBarStyle}
          renderBackButton={() => <BackButton />}
        />
      </Stack>
    </Router>
  );
};
