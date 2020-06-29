import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/AboutUsStyle';

class AboutUsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.bgImage}
          source={require('../assets/imgs/bg2.png')}
        />
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.btnBack}
            onPress={() => this.props.history.goBack()}>
            <Image source={require('../assets/imgs/arrow_left_icon.png')} />
          </TouchableOpacity>
          <Image
            style={styles.logo}
            source={require('../assets/imgs/logo2.png')}
          />
        </View>
        <View style={styles.textContent}>
          <Text style={styles.title}>Glad to see you, friend!</Text>
          <Text style={styles.article}>
            <Text style={styles.strong}>{'\t'}SPRY ROCKS</Text> is a rapidly
            developing European company with headquarter at Kharkiv, Ukraine.
            {'\n\t'}Our company was founded in 2014 and although we are a young
            team we have a lot of successful projects and satisfied customers.
            {'\n\t'}In work with every particular customer, the main philosophy
            is to establish and keep good relations.{'\n\t'}We develop
            innovative solutions that not only contribute to the success of our
            customer's businesses but also them a competitive market advantage.
            {'\n\t'}Because your success is our success too!
          </Text>
        </View>
      </View>
    );
  }
}

export default AboutUsScreen;
