import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  bgImage: {
    width: '100%',
    position: 'absolute',
    resizeMode: 'cover',
    top: 0,
    left: 0,
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    marginTop: 41,
  },
  screenTitle: {
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
    fontSize: 46.2857,
    lineHeight: 53,
  },
  actionSection: {
    flex: 0.1,
    alignItems: 'center',
  },
  subtitle: {
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
    fontSize: 19.6706,
    lineHeight: 37,
  },
  btn: {
    backgroundColor: '#7A4ED9',
    borderRadius: 10,
    paddingHorizontal: 100,
    paddingVertical: 12,
  },
  btnText: {
    fontFamily: 'Gilroy-Medium',
    color: '#FFFFFF',
    fontSize: 19.6706,
    lineHeight: 28,
  },
  footer: {
    marginBottom: 26,
    alignItems: 'center',
  },
  link: {
    marginTop: 17,
    fontFamily: 'BebasNeue-Bold',
    fontSize: 24,
    lineHeight: 29,
    color: '#FFFFFF',
    textDecorationLine: 'underline',
  },
});
