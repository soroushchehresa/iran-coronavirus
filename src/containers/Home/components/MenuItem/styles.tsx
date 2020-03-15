import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 100,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 18,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
    overflow: 'hidden',
    backgroundColor: 'rgba(72,86,110,0.06)',
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  text: {
    fontFamily: 'Vazir-Medium-FD',
    fontSize: 26,
    color: '#6b7992',
  },
});
