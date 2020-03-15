import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ListItem from 'src/components/ListItem';
import styles from './styles';

export default () => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ListItem text="سازمان نظام پزشکی ایران" pageTitle="تست رسمی سازمان نظام پزشکی" url="https://test.corona.ir" />
      <ListItem text="دانشگاه علوم پزشکی اصفهان" pageTitle="تست رسمی دانشگاه علوم پزشکی اصفهان" url="https://www.coronaisfahan.ir/checklist" />
    </ScrollView>
  </SafeAreaView>
);
