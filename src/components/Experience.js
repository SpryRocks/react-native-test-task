import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from '../styles/ExperienceStyle';

class ExperienceScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      userInfo: {
        workPlace: '',
        positionHeld: '',
        dateStart: '',
        dateEnd: '',
      },
      errors: {
        workPlaceErr: '',
        positionErr: '',
        dateStartErr: '',
        dateEndErr: '',
      },
    };
  }

  validate() {
    const {errors, userInfo} = this.state;

    this.workPlaceValidate();
    this.positionValidate();
    this.dateStartValidate();
    this.dateEndValidate();

    for (const key in errors) {
      while (errors[key] !== '') {
        return;
      }
    }

    this.props.saveInfo(userInfo);
    this.props.history.push('/form/hobbies');
  }

  workPlaceValidate() {
    const {userInfo, errors} = this.state;
    errors.workPlaceErr = this.textInputValidate(userInfo.workPlace);
    this.setState({errors});
  }

  positionValidate() {
    const {userInfo, errors} = this.state;
    errors.positionErr = this.textInputValidate(userInfo.positionHeld);
    this.setState({errors});
  }

  textInputValidate(value) {
    const rexp = /^([a-zA-Zа-яА-ЯЁё]{1,}\s?\-?)+$/;

    if (!rexp.test(value) && value !== '') {
      return 'Only letters';
    } else if (value.length < 3 && value !== '') {
      return 'Use min 3 characters';
    } else {
      return '';
    }
  }

  dateStartValidate() {
    const {userInfo, errors} = this.state;
    errors.dateStartErr = this.dateValidate(userInfo.dateStart);
    this.setState({errors});
  }

  dateEndValidate() {
    const {userInfo, errors} = this.state;
    errors.dateEndErr = this.dateValidate(userInfo.dateEnd);
    this.setState({errors});
  }

  dateValidate(value) {
    const rexp = /^([0-9]{2}\.)([0-9]{4})$/;

    if (value.length < 4 && value !== '') {
      return 'Use template';
    } else if (!rexp.test(value) && value !== '') {
      return 'Only numbers';
    } else {
      return '';
    }
  }

  render() {
    const {
      workPlaceErr,
      positionErr,
      dateStartErr,
      dateEndErr,
    } = this.state.errors;
    return (
      <View style={styles.form}>
        <ScrollView style={styles.inputsList}>
          <Text style={styles.formTitle}>Work experience</Text>
          <View>
            <Text style={styles.inputLabel}>Place of Work</Text>
            <TextInput
              style={styles.input}
              value={this.state.userInfo.workPlace}
              placeholder="Name"
              onChangeText={workPlace => {
                const {userInfo} = this.state;
                userInfo.workPlace = workPlace;
                this.setState({userInfo});
              }}
            />
            <Text style={styles.err}>{workPlaceErr}</Text>
          </View>
          <View>
            <Text style={styles.inputLabel}>Position Held</Text>
            <TextInput
              style={styles.input}
              value={this.state.userInfo.positionHeld}
              placeholder="Java Developer"
              onChangeText={positionHeld => {
                const {userInfo} = this.state;
                userInfo.positionHeld = positionHeld;
                this.setState({userInfo});
              }}
            />
            <Text style={styles.err}>{positionErr}</Text>
          </View>
          <View style={styles.workingPeriod}>
            <View style={styles.start}>
              <Text style={styles.inputLabel}>Start</Text>
              <TextInput
                style={styles.input}
                value={this.state.userInfo.dateStart}
                placeholder="mm.yyyy"
                onChangeText={dateStart => {
                  const {userInfo} = this.state;
                  userInfo.dateStart = dateStart;
                  this.setState({userInfo});
                }}
              />
              <Text style={styles.err}>{dateStartErr}</Text>
            </View>
            <View style={styles.end}>
              <Text style={styles.inputLabel}>StEndart</Text>
              <TextInput
                style={styles.input}
                value={this.state.userInfo.dateEnd}
                placeholder="mm.yyyy"
                onChangeText={dateEnd => {
                  const {userInfo} = this.state;
                  userInfo.dateEnd = dateEnd;
                  this.setState({userInfo});
                }}
              />
              <Text style={styles.err}>{dateEndErr}</Text>
            </View>
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

export default ExperienceScreen;
