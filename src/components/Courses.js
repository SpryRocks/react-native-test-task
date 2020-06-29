import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from '../styles/CoursesStyle';

class CoursesScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      organization: '',
      course: '',
      finishDate: '',
      errors: {
        organizationErr: '',
        courseErr: '',
        dateErr: '',
      },
    };
  }

  validate() {
    const {errors, organization, course, finishDate} = this.state;

    this.organizationValidate();
    this.courseValidate();
    this.dateValidate();

    for (const key in errors) {
      while (errors[key] !== '') {
        return;
      }
    }

    const info = {
      organization: organization,
      course: course,
      finishDate: finishDate,
    };

    this.props.saveInfo(info);
    this.props.history.push('/form/experience');
  }

  organizationValidate() {
    const {organization, errors} = this.state;
    errors.organizationErr = this.textInputValidate(organization);
    this.setState({errors});
  }

  courseValidate() {
    const {course, errors} = this.state;
    errors.courseErr = this.textInputValidate(course);
    this.setState({errors});
  }

  textInputValidate(value) {
    const rexp = /^([a-zA-Zа-яА-ЯЁё]{1,}\s?\-?)+$/;

    if (value.length < 3 && value !== '') {
      return 'Use min 3 characters';
    } else if (!rexp.test(value) && value !== '') {
      return 'Only letters';
    } else {
      return '';
    }
  }

  dateValidate() {
    const {finishDate, errors} = this.state;
    const rexp = /^([0-9]{0,4}\.?){2}$/;

    if (finishDate.length < 4 && finishDate !== '') {
      errors.dateErr = 'Use both month and year';
    } else if (!rexp.test(finishDate)) {
      errors.dateErr = 'Should contain only numbers';
    } else {
      errors.dateErr = '';
    }

    this.setState({errors});
  }

  render() {
    const {organizationErr, courseErr, dateErr} = this.state.errors;
    return (
      <View style={styles.form}>
        <ScrollView style={styles.inputsList}>
          <Text style={styles.formTitle}>Courses</Text>
          <View>
            <Text style={styles.inputLabel}>Educational organization</Text>
            <TextInput
              style={styles.input}
              value={this.state.organization}
              placeholder="Enter name here"
              onChangeText={organization => {
                this.setState({organization});
              }}
            />
            <Text style={styles.err}>{organizationErr}</Text>
          </View>
          <View>
            <Text style={styles.inputLabel}>Course</Text>
            <TextInput
              style={styles.input}
              value={this.state.course}
              placeholder="Enter name here"
              onChangeText={course => {
                this.setState({course});
              }}
            />
            <Text style={styles.err}>{courseErr}</Text>
          </View>
          <View>
            <Text style={styles.inputLabel}>Finish Date</Text>
            <TextInput
              style={styles.input}
              value={this.state.finishDate}
              placeholder="mm.yyyy"
              onChangeText={finishDate => {
                this.setState({finishDate});
              }}
            />
            <Text style={styles.err}>{dateErr}</Text>
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

export default CoursesScreen;
