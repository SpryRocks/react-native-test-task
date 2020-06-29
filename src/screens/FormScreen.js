import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Animated,
  Keyboard,
} from 'react-native';
import {Switch, Route} from 'react-router-native';
import {sendEmail} from '../components/SendEmail';
import styles, {
  LogoHeight,
  TitleHeight,
  SubtitleHeight,
  HideElems,
} from '../styles/FormScreenStyle';
import PersonalInfo from '../components/PersonalInfo';
import Education from '../components/Education';
import Courses from '../components/Courses';
import Experience from '../components/Experience';
import Hobbies from '../components/Hobbies';

class FormScreen extends React.Component {
  constructor() {
    super();

    this.imageHeight = new Animated.Value(LogoHeight);
    this.titleHeight = new Animated.Value(TitleHeight);
    this.subTitleHeight = new Animated.Value(SubtitleHeight);
    this.state = {
      fullName: '',
      isAgreeTos: false,
      userInfo: {},
    };
  }

  toogleAgreeTos() {
    this.setState({isAgreeTos: !this.state.isAgreeTos});
  }

  saveUserInfo(obj) {
    const {userInfo} = this.state;

    for (const key in obj) {
      userInfo[key] = obj[key];
    }

    this.setState({userInfo});
  }

  send() {
    sendEmail(this.state.userInfo).then(() => {
      console.log('Email was sent');
    });
  }

  componentDidMount() {
    Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount() {
    Keyboard.removeListener('keyboardDidShow', this._keyboardDidShow);
    Keyboard.removeListener('keyboardDidHide', this._keyboardDidHide);
  }

  _keyboardDidShow = event => {
    if (event.height === 0) return;
    Animated.parallel([
      Animated.timing(this.imageHeight, {
        useNativeDriver: false,
        toValue: HideElems,
      }),
      Animated.timing(this.titleHeight, {
        useNativeDriver: false,
        toValue: HideElems,
      }),
      Animated.timing(this.subTitleHeight, {
        useNativeDriver: false,
        toValue: HideElems,
      }),
    ]).start();
  };

  _keyboardDidHide = event => {
    Animated.parallel([
      Animated.timing(this.imageHeight, {
        useNativeDriver: false,
        toValue: LogoHeight,
      }),
      Animated.timing(this.titleHeight, {
        useNativeDriver: false,
        toValue: TitleHeight,
      }),
      Animated.timing(this.subTitleHeight, {
        useNativeDriver: false,
        toValue: SubtitleHeight,
      }),
    ]).start();
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="height"
        keyboardVerticalOffset={-283}>
        <Image
          style={styles.bgImage}
          source={require('../assets/imgs/bg2.png')}
        />
        <Image
          style={styles.bigLogo}
          source={require('../assets/imgs/big_logo.png')}
        />
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => this.props.history.goBack()}>
          <Image source={require('../assets/imgs/arrow_left_icon.png')} />
        </TouchableOpacity>
        <Animated.Image
          source={require('../assets/imgs/logo2.png')}
          style={[styles.logo, {height: this.imageHeight}]}
        />
        <Animated.Text style={[styles.title, {height: this.titleHeight}]}>
          Fill the form
        </Animated.Text>
        <Animated.Text style={[styles.subtitle, {height: this.subTitleHeight}]}>
          area with <Text style={styles.asterisk}>*</Text> must be filled
        </Animated.Text>
        <Switch>
          <Route
            path="/form/personal"
            render={props => (
              <PersonalInfo
                {...props}
                saveInfo={this.saveUserInfo.bind(this)}
              />
            )}
          />
          <Route
            path="/form/education"
            render={props => (
              <Education {...props} saveInfo={this.saveUserInfo.bind(this)} />
            )}
          />
          <Route
            path="/form/courses"
            render={props => (
              <Courses {...props} saveInfo={this.saveUserInfo.bind(this)} />
            )}
          />
          <Route
            path="/form/experience"
            render={props => (
              <Experience {...props} saveInfo={this.saveUserInfo.bind(this)} />
            )}
          />
          <Route
            path="/form/hobbies"
            render={props => (
              <Hobbies
                {...props}
                saveInfo={this.saveUserInfo.bind(this)}
                toogle={this.toogleAgreeTos.bind(this)}
                send={this.send.bind(this)}
                isChecked={this.state.isAgreeTos}
              />
            )}
          />
        </Switch>
      </KeyboardAvoidingView>
    );
  }
}

export default FormScreen;
