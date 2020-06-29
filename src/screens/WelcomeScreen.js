import React from 'react';
import {View, Image, Text, TouchableOpacity, Linking} from 'react-native';
import styles from '../styles/WelcomeScreenStyle';

class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.bgImage}
          source={require('../assets/imgs/bg.jpg')}
        />
        <Image
          style={styles.logo}
          source={require('../assets/imgs/logo.png')}
        />
        <Text style={styles.screenTitle}>Welcome!</Text>
        <View style={styles.actionSection}>
          <Text style={styles.subtitle}>Want to be a part of team?</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.history.push('/form/personal')}>
            <Text style={styles.btnText}>Send Form</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Image source={require('../assets/imgs/info_icon.png')} />
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://spryrocks.com/')}>
            SPRYROCKS.COM
          </Text>
        </View>
      </View>
    );
  }
}

export default WelcomeScreen;
