import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  app: {
    backgroundColor: '#e4edfd',
  },
  navigationBarStyle: {
    backgroundColor: '#e4d1fd',
  },
  pageTitle: {
    alignSelf: 'center',
    fontFamily: 'Vazir-Medium-FD',
    textAlign: Platform.OS === 'ios' ? 'center' : 'right',
    flex: 1,
    color: '#48566e',
  },
  backText: {
    fontFamily: 'Vazir-Light-FD',
  },
});
