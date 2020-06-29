import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from '../styles/PersonalInfoStyle';

class PersonalInfo extends React.Component {
  constructor() {
    super();

    this.state = {
      userInfo: {
        fullName: '',
        position: '',
        birthday: '',
        city: '',
        phone: '',
      },
      errors: {
        nameErr: '',
        positionErr: '',
        birthErr: '',
        cityErr: '',
        phoneErr: '',
      },
    };
  }

  validate() {
    const {errors, userInfo} = this.state;

    this.nameValidate();
    this.positionValidate();
    this.birthdayValidate();
    this.cityValidate();
    this.phoneValidate();

    for (const key in errors) {
      while (errors[key] !== '') {
        return;
      }
    }

    this.props.saveInfo(userInfo);
    this.props.history.push('/form/education');
  }

  nameValidate() {
    const {userInfo, errors} = this.state;
    const rexp = /^([a-zA-Zа-яА-ЯЁё]{1,}\s?)+$/;

    if (userInfo.fullName === '') {
      errors.nameErr = 'Should not be empty';
    } else if (!rexp.test(userInfo.fullName)) {
      errors.nameErr = 'Should contain only letters';
    } else if (userInfo.fullName.length < 3) {
      errors.nameErr = 'Use min 3 characters';
    } else {
      errors.nameErr = '';
    }

    this.setState({errors});
  }

  positionValidate() {
    const {userInfo, errors} = this.state;
    const rexp = /^([a-zA-Zа-яА-ЯЁё]{0,}\s?\-?)+$/;

    if (userInfo.position === '') {
      errors.positionErr = 'Should not be empty';
    } else if (!rexp.test(userInfo.position)) {
      errors.positionErr = 'Should contain only letters';
    } else if (userInfo.position.length < 3) {
      errors.positionErr = 'Use min 3 characters';
    } else {
      errors.positionErr = '';
    }

    this.setState({errors});
  }

  birthdayValidate() {
    const {userInfo, errors} = this.state;
    const rexp = /^[0-9]{1,2}.[0-9]{1,2}.[0-9]{2,4}$/;

    if (userInfo.birthday === '') {
      errors.birthErr = 'Should not be empty';
    } else if (userInfo.birthday.length < 10) {
      errors.birthErr = 'Full date required';
    } else if (!rexp.test(userInfo.birthday)) {
      errors.birthErr = 'Should contain only numbers';
    } else {
      errors.birthErr = '';
    }

    this.setState({errors});
  }

  cityValidate() {
    const {userInfo, errors} = this.state;
    const rexp = /^([a-zA-Zа-яА-ЯЁё]+(\s|-)?([a-zA-Zа-яА-ЯЁё]+)?)+$/;

    if (userInfo.city === '') {
      errors.cityErr = 'Should not be empty';
    } else if (!rexp.test(userInfo.city)) {
      errors.cityErr = 'Letters and whitespace signs only';
    } else if (userInfo.city.length < 3) {
      errors.cityErr = 'Use min 3 characters';
    } else {
      errors.cityErr = '';
    }

    this.setState({errors});
  }

  phoneMask(value) {
    const {userInfo} = this.state;
    let temp = value
      .replace(/\D/g, '')
      .match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    temp = !temp[1]
      ? ''
      : temp[1] +
        (!temp[3] ? temp[2] : '(' + temp[2] + ')') +
        temp[3] +
        (temp[4] ? '-' + temp[4] : '') +
        (temp[5] ? '-' + temp[5] : '');
    userInfo.phone = temp;
    this.setState({userInfo});
  }

  phoneValidate() {
    const {userInfo, errors} = this.state;
    const rexp = /^(\+)?(\d{1,3})\((\d{0,3})\)(\d{0,3})\-(\d{0,2})\-(\d{0,2})$/;

    if (userInfo.phone === '') {
      errors.phoneErr = 'Should not be empty';
    } else if (userInfo.phone.length < 11) {
      errors.phoneErr = 'Use min 11 characters';
    } else if (!rexp.test(userInfo.phone)) {
      errors.phoneErr = 'Should contain numbers only';
    } else {
      errors.phoneErr = '';
    }

    this.setState({errors});
  }

  render() {
    const {
      nameErr,
      positionErr,
      birthErr,
      cityErr,
      phoneErr,
    } = this.state.errors;
    return (
      <View style={styles.form}>
        <ScrollView style={styles.inputsList}>
          <Text style={styles.formTitle}>Personal Info</Text>
          <View>
            <Text style={styles.inputLabel}>
              Full Name<Text style={styles.asterisk}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              value={this.state.userInfo.fullName}
              placeholder="type your full name"
              onChangeText={fullName => {
                const {userInfo} = this.state;
                userInfo.fullName = fullName;
                this.setState({userInfo});
              }}
            />
            <Text style={styles.err}>{nameErr}</Text>
          </View>
          <View>
            <Text style={styles.inputLabel}>
              Position<Text style={styles.asterisk}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              value={this.state.userInfo.position}
              placeholder="for example: IOS developer, Designer"
              onChangeText={position => {
                const {userInfo} = this.state;
                userInfo.position = position;
                this.setState({userInfo});
              }}
            />
            <Text style={styles.err}>{positionErr}</Text>
          </View>
          <View>
            <Text style={styles.inputLabel}>
              Your birthday<Text style={styles.asterisk}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={this.state.userInfo.birthday}
              placeholder="dd.mm.yyyy"
              onChangeText={birthday => {
                const {userInfo} = this.state;
                userInfo.birthday = birthday;
                this.setState({userInfo});
              }}
            />
            <Text style={styles.err}>{birthErr}</Text>
          </View>
          <View>
            <Text style={styles.inputLabel}>
              City<Text style={styles.asterisk}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={this.state.userInfo.city}
              placeholder="Kharkiv"
              onChangeText={city => {
                const {userInfo} = this.state;
                userInfo.city = city;
                this.setState({userInfo});
              }}
            />
            <Text style={styles.err}>{cityErr}</Text>
          </View>
          <View>
            <Text style={styles.inputLabel}>
              Phone number<Text style={styles.asterisk}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={this.state.userInfo.phone}
              placeholder="+38 (0_ _) _ _ _ - _ _ - _ _"
              onChangeText={phone => this.phoneMask(phone)}
            />
            <Text style={styles.err}>{phoneErr}</Text>
          </View>
        </ScrollView>
        <View style={styles.btnWrapper}>
          <TouchableOpacity
            style={styles.btnNext}
            onPress={() => {
              this.validate();
            }}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PersonalInfo;
