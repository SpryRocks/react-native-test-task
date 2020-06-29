import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from '../styles/EducationStyle';

class EducationScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      institution: '',
      specialization: '',
      year: '',
      errors: {
        institutionErr: '',
        specErr: '',
        yearErr: '',
      },
    };
  }
  validate() {
    const {errors, institution, specialization, year} = this.state;

    this.institutionValidate();
    this.specializationValidate();
    this.yearValidation();

    for (const key in errors) {
      while (errors[key] !== '') {
        return;
      }
    }

    const info = {
      institution: institution,
      specialization: specialization,
      year: year,
    };

    this.props.saveInfo(info);
    this.props.history.push('/form/courses');
  }

  institutionValidate() {
    const {institution, errors} = this.state;
    errors.institutionErr = this.textInputValidate(institution);
    this.setState({errors});
  }

  specializationValidate() {
    const {specialization, errors} = this.state;
    errors.specErr = this.textInputValidate(specialization);
    this.setState({errors});
  }

  textInputValidate(value) {
    const rexp = /^([a-zA-Zа-яА-ЯЁё]{3,}\s?\-?)+$/;

    if (value.length < 3 && value !== '') {
      return 'Use min 3 characters';
    } else if (!rexp.test(value) && value !== '') {
      return 'Only letters';
    } else {
      return '';
    }
  }

  yearValidation() {
    const {year, errors} = this.state;
    const rexp = /^[0-9]{0,4}$/;

    if (year.length < 4 && year !== '') {
      errors.yearErr = 'Use 4 characters';
    } else if (!rexp.test(year)) {
      errors.yearErr = 'Should contain only numbers';
    } else {
      errors.yearErr = '';
    }

    this.setState({errors});
  }

  render() {
    const {institutionErr, specErr, yearErr} = this.state.errors;
    return (
      <View style={styles.form}>
        <ScrollView style={styles.inputsList}>
          <Text style={styles.formTitle}>Education</Text>
          <View>
            <Text style={styles.inputLabel}>Educational Institution</Text>
            <TextInput
              style={styles.input}
              value={this.state.institution}
              placeholder="Kharkiv National University of Radioelectronix"
              onChangeText={institution => {
                this.setState({institution});
              }}
            />
            <Text style={styles.err}>{institutionErr}</Text>
          </View>
          <View>
            <Text style={styles.inputLabel}>Specialization</Text>
            <TextInput
              style={styles.input}
              value={this.state.Specialization}
              placeholder="Java Developer"
              onChangeText={Specialization => {
                this.setState({Specialization});
              }}
            />
            <Text style={styles.err}>{specErr}</Text>
          </View>
          <View>
            <Text style={styles.inputLabel}>Graduated Year</Text>
            <TextInput
              style={styles.input}
              value={this.state.year}
              placeholder="yyyy"
              onChangeText={year => {
                this.setState({year});
              }}
            />
            <Text style={styles.err}>{yearErr}</Text>
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

export default EducationScreen;
