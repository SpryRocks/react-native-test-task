import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  form: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 27,
  },
  formTitle: {
    fontFamily: 'BebasNeue-Regular',
    fontSize: 22,
    lineHeight: 26,
    color: '#7A4ED9',
  },
  inputsList: {
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 25,
  },
  inputLabel: {
    fontFamily: 'Roboto-Medium',
    marginTop: 20,
    marginLeft: 15,
    fontSize: 16,
    lineHeight: 19,
    color: '#000000',
  },
  input: {
    fontFamily: 'Roboto-Regular',
    marginTop: 8,
    width: '100%',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 11,
    paddingVertical: 8,
  },
  btnWrapper: {
    width: '100%',
    paddingHorizontal: 25,
  },
  btnNext: {
    width: '100%',
    backgroundColor: '#7A4ED9',
    borderRadius: 10,
    paddingVertical: 10,
    marginBottom: 25,
  },
  btnText: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 22,
    lineHeight: 28,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  err: {
    position: 'absolute',
    top: 20,
    right: 20,
    color: '#FF0000',
  },
});
