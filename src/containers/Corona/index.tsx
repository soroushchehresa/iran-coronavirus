import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ListItem from 'src/components/ListItem';
import styles from './styles';

export default () => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ListItem text="ویکی پدیا" pageTitle="ویکی پدیا" url="https://fa.wikipedia.org/wiki/%DA%A9%D8%B1%D9%88%D9%86%D8%A7%D9%88%DB%8C%D8%B1%D9%88%D8%B3" />
      <ListItem text="ویکی پدیا - شیوع کرونا" pageTitle="ویکی پدیا" url="https://fa.wikipedia.org/wiki/%D8%B4%DB%8C%D9%88%D8%B9_%DB%B2%DB%B0%E2%80%93%DB%B2%DB%B0%DB%B1%DB%B9_%DA%A9%D8%B1%D9%88%D9%86%D8%A7%D9%88%DB%8C%D8%B1%D9%88%D8%B3" />
      <ListItem text="سازمان نظام پزشکی ایران" pageTitle="سازمان نظام پزشکی ایران" url="https://corona.ir/course/corona-virus-public-edu" />
      <ListItem text="دانشگاه علوم پزشکی ایران" pageTitle="دانشگاه علوم پزشکی ایران" url="https://iums.ac.ir/page_arch.php?slc_pg_id=45775&sid=5&slc_lang=fa" />
      <ListItem text="یونیسف" pageTitle="یونیسف" url="https://www.unicef.org/iran/press-releases/%D8%A8%DB%8C%D9%85%D8%A7%D8%B1%DB%8C-%D9%88%DB%8C%D8%B1%D9%88%D8%B3-%DA%A9%D8%B1%D9%88%D9%86%D8%A7%D8%8C-%D8%A2%D9%86%DA%86%D9%87-%D9%88%D8%A7%D9%84%D8%AF%DB%8C%D9%86-%D8%A8%D8%A7%DB%8C%D8%B3%D8%AA%DB%8C-%D8%A8%D8%AF%D8%A7%D9%86%D9%86%D8%AF" />
    </ScrollView>
  </SafeAreaView>
);
