import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ListItem from 'src/components/ListItem';
import styles from './styles';

export default () => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ListItem text="ایرنا" pageTitle="ایرنا" url="https://www.irna.ir/tag/%D9%88%DB%8C%D8%B1%D9%88%D8%B3+%DA%A9%D8%B1%D9%88%D9%86%D8%A7" />
      <ListItem text="تسنیم" pageTitle="تسنیم" url="https://www.tasnimnews.com/fa/news/1398/12/11/2214382/%D8%A2%D8%AE%D8%B1%DB%8C%D9%86-%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%DA%A9%D8%B1%D9%88%D9%86%D8%A7-%D9%85%D8%B1%D8%AF%D9%85-%D8%A7%D8%B2-%D8%AE%D8%A7%D9%86%D9%87-%D8%A8%DB%8C%D8%B1%D9%88%D9%86-%D9%86%D8%B1%D9%88%D9%86%D8%AF-%D8%B3%D9%BE%D8%A7%D9%87-%D8%A8%D8%B3%DB%8C%D8%AC-%D9%88-%D8%A7%D8%B1%D8%AA%D8%B4-%D9%BE%D8%A7%DB%8C-%DA%A9%D8%A7%D8%B1-%D8%A2%D9%85%D8%AF%D9%86%D8%AF-%D8%B1%D9%88%D9%86%D8%AF-%D8%A8%D9%87%D8%A8%D9%88%D8%AF%DB%8C-%D8%A8%DB%8C%D9%85%D8%A7%D8%B1%D8%A7%D9%86-%D8%B5%D8%B9%D9%88%D8%AF%DB%8C-%D8%B4%D8%AF-%D9%81%DB%8C%D9%84%D9%85" />
      <ListItem text="باشگاه خبرنگاران جوان" pageTitle="باشگاه خبرنگاران جوان" url="https://www.yjc.ir/fa/news/7267174/%D8%A2%D8%AE%D8%B1%DB%8C%D9%86-%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87-%D8%B4%DB%8C%D9%88%D8%B9-%DA%A9%D8%B1%D9%88%D9%86%D8%A7-%D8%AF%D8%B1-%D8%AC%D9%87%D8%A7%D9%86-%D8%B4%D9%85%D8%A7%D8%B1-%D9%85%D8%A8%D8%AA%D9%84%D8%A7%DB%8C%D8%A7%D9%86-%D9%88-%D8%A8%D9%87%D8%A8%D9%88%D8%AF%DB%8C%D8%A7%D9%81%D8%AA%DA%AF%D8%A7%D9%86-%DA%86%D9%82%D8%AF%D8%B1-%D8%A7%D8%B3%D8%AA" />
      <ListItem text="ایران اینترنشنال" pageTitle="ایران اینترنشنال" url="https://iranintl.com/%D8%A7%D9%8A%D8%B1%D8%A7%D9%86/%D9%84%D8%AD%D8%B8%D9%87-%D8%A8%D9%87-%D9%84%D8%AD%D8%B8%D9%87-%D8%A8%D8%A7-%D8%AA%D8%A7%D8%B2%D9%87%E2%80%8C%D8%AA%D8%B1%DB%8C%D9%86-%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%DA%A9%D8%B1%D9%88%D9%86%D8%A7" />
      <ListItem text="شهر خبر" pageTitle="شهر خبر" url="https://www.shahrekhabar.com/tag/%D9%88%DB%8C%D8%B1%D9%88%D8%B3-%DA%A9%D8%B1%D9%88%D9%86%D8%A7" />
      <ListItem text="دانشگاه علوم پزشکی ایران" pageTitle="دانشگاه علوم پزشکی ایران" url="https://iums.ac.ir/page.php?slct_pg_id=45775&sid=5&slc_lang=fa" />
      <ListItem text="آپارات - آخرین ویدیوها" pageTitle="آپارات" url="https://www.aparat.com/CORONA/videos" />
    </ScrollView>
  </SafeAreaView>
);
