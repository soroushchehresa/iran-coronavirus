import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MenuItem from './components/MenuItem';
import testIcon from './assets/test.png';
import newsIcon from './assets/news.png';
import virusIcon from './assets/virus.png';
import githubIcon from './assets/github.png';
import styles from './styles';

export default () => (
  <SafeAreaView>
    <ScrollView>
      <Text style={styles.title}>
        ویروس کرونا
      </Text>
      <View>
        <MenuItem
          text="درباره کرونا"
          icon={virusIcon}
          onPress={() => Actions.Corona()}
        />
        <MenuItem
          text="خودارزیابی"
          icon={testIcon}
          onPress={() => Actions.TestList()}
        />
        <MenuItem
          text="آخرین اخبار"
          icon={newsIcon}
          onPress={() => Actions.NewsList()}
        />
        <MenuItem
          text="گیت‌هاب"
          icon={githubIcon}
          onPress={() => Actions.WebView({
            title: 'گیت‌هاب',
            url: 'https://github.com/soroushchehresa/iran-coronavirus'
          })}
        />
      </View>
    </ScrollView>
  </SafeAreaView>
);
