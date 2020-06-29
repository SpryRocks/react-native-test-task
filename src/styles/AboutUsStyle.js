import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  header: {
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
    left: 0,
  },
  logo: {
    marginTop: 30,
  },
  textContent: {
    marginBottom: 25,
  },
  title: {
    fontFamily: 'Gordita Regular',
    fontSize: 18,
    lineHeight: 26,
    color: '#000000',
  },
  article: {
    marginTop: 38,
    fontFamily: 'Gordita Regular',
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'justify',
    color: '#000000',
  },
  strong: {
    fontFamily: 'Gordita Bold',
  },
});
