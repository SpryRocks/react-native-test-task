import {StyleSheet, Dimensions} from 'react-native';

export const LogoHeight = 86;
export const TitleHeight = 36;
export const SubtitleHeight = 10;
export const HideElems = 0;

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  bgImage: {
    width: Dimensions.get('window').width,
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  btnBack: {
    position: 'absolute',
    top: 38,
    left: 25,
  },
  logo: {
    marginTop: 30,
    resizeMode: 'contain',
    height: LogoHeight,
  },
  bigLogo: {
    position: 'absolute',
    right: 0,
    top: 295,
  },
  title: {
    height: TitleHeight,
    marginTop: 24,
    fontFamily: 'BebasNeue-Bold',
    fontSize: 36,
    lineHeight: 43,
    color: '#000000',
  },
  subtitle: {
    height: SubtitleHeight,
    marginTop: 6,
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    lineHeight: 12,
    color: '#000000',
  },
  asterisk: {
    color: '#FF0000',
  },
});
