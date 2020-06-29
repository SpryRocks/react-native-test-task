import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import styles from '../styles/HobbiesStyle';

class HobbiesScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      hobbies: '',
      questions: '',
    };
  }

  sendAnswer() {
    const {hobbies, questions} = this.state;

    const info = {
      hobbies: hobbies,
      questions: questions,
    };

    if (this.props.isChecked) {
      this.props.saveInfo(info);
      this.props.history.push('/aboutus');
      this.props.send();
    }
  }

  render() {
    return (
      <View style={styles.form}>
        <ScrollView style={styles.inputsList}>
          <Text style={styles.firstTitle}>Your hobbies</Text>
          <Text style={styles.inputLabel}>How you spend your free time?</Text>
          <TextInput
            multiline
            numberOfLines={4}
            style={styles.input}
            value={this.state.hobbies}
            placeholder="Hobbies, sport, etc..."
            onChangeText={hobbies => {
              this.setState({hobbies});
            }}
          />
          <Text style={styles.secondTitle}>Additional information</Text>
          <Text style={styles.inputLabel}>Have any questions for us?</Text>
          <TextInput
            multiline
            numberOfLines={4}
            style={styles.input}
            value={this.state.questions}
            placeholder="Be in touch :)"
            onChangeText={questions => {
              this.setState({questions});
            }}
          />
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.agreeTos}
            onPress={() => this.props.toogle()}>
            <Image
              style={styles.checkbox}
              source={
                this.props.isChecked
                  ? require('../assets/imgs/checked_icon.png')
                  : require('../assets/imgs/unchecked_icon.png')
              }
            />
            <Text style={styles.textContent}>
              I consent to the processing of personal data
              <Text style={styles.asterisk}>*</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnNext}
            onPress={() => this.sendAnswer()}>
            <Text style={styles.btnText}>Send Form</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HobbiesScreen;
