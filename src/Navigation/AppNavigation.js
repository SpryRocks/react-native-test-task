// import {createAppContainer} from 'react-navigation';
import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet,Image} from 'react-native';



import { MainScreen } from '../screens/MainScreen';
import { AppFormPerson } from '../screens/AppFormPerson';
import { AppFormEdu } from '../screens/AppFormEdu';
import { AppFormCours } from '../screens/AppFormCours';
import { AppFormExp } from '../screens/AppFormExp';
import { AppFormHobbies } from '../screens/AppFormHobbies';
import { AboutUs } from '../screens/AboutUs';

const Stack = createStackNavigator ();


export const AppNavigation = () => {


  const ImageHeader = props => (
    <View style={styles.logo}>
      
      <Image
        source={require('../img/Group.png')}
      />
    </View>
  );

  const ImageHeaderOpacity = props => (
    <View >

      <Image
        source={require('../img/Group.png')} style={styles.logoOpacity}
      />
    
    </View>
  );

  // class backImage extends React.Component {
  //   render() {
  //     const source = require('../img/back.png');
  //     return (
  //       <Image
  //         source={source}
  //         style={{with: 50}}
  //       />
  //     );
  //   }
  // }

    

    


    return ( 
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ gestureEnabled: true }}
            >
                <Stack.Screen
                    name="Home"
                    component={MainScreen}
                    options={{ title: '' ,
                    headerStyle: {
                      },
                      headerTintColor: '#fff',
                      headerTransparent: true,
                      header: props => <ImageHeaderOpacity {...props} />,
                     }}
                />
                <Stack.Screen
                    name="Person"
                    component={AppFormPerson}
                    initialParams={{ user: 'me' }}
                    options={{
                    title: '' ,
                    headerStyle: {
                      },
                      headerTransparent: true,
                      header: props => <ImageHeader {...props} />,}}
                />
                <Stack.Screen
                    name="Edu"
                    component={AppFormEdu}
                    initialParams={{ user: 'me' }}
                    options={{ title: '' ,
                    headerStyle: {
                      },
                      headerTransparent: true,
                      header: props => <ImageHeader {...props} />,
                     }}
                />
                 <Stack.Screen
                    name="Cours"
                    component={AppFormCours}
                    options={{ title: '' ,
                    headerStyle: {
                      },
                      headerTransparent: true,
                      header: props => <ImageHeader {...props} />,
                     }}
                />
                <Stack.Screen
                    name="Exp"
                    component={AppFormExp}
                    options={{ title: '' ,
                    headerStyle: {
                      },
                      headerTransparent: true,
                      header: props => <ImageHeader {...props} />,
                     }}
                />
                <Stack.Screen
                    name="Hobbies"
                    component={AppFormHobbies}
                    options={{ title: '' ,
                    headerStyle: {
                      },
                      headerTransparent: true,
                      header: props => <ImageHeader {...props} />,
                     }}
                />
                <Stack.Screen
                    name="AboutUs"
                    component={AboutUs}
                    options={{ title: '' ,
                    headerStyle: {
                      },
                      headerTransparent: true,
                      header: props => <ImageHeader {...props} />,
                     }}
                />
            
            </Stack.Navigator>
      </NavigationContainer>
    );
  }

  const styles = StyleSheet.create({
    logo:{
      justifyContent:'flex-end',
      alignItems:'center',
      width:'100%'
    },
    logoOpacity:{
      opacity: 0.6,
      // filter: 'gray'
    }
  })

