/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';
import Welcome from './screens/WelcomeScreen';
import Form from './screens/FormScreen';
import AboutUs from './screens/AboutUsScreen';

class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/form/personal" component={Form} />
            <Route exact path="/form/education" component={Form} />
            <Route exatc path="/form/courses" component={Form} />
            <Route exatc path="/form/experience" component={Form} />
            <Route exatc path="/form/hobbies" component={Form} />
            <Route exatc path="/aboutus" component={AboutUs} />
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
