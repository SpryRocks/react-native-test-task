import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View, Image, Button, TextInput} from 'react-native';
 import {AppRegistry} from 'react-native';
import * as Font from 'expo-font'
import {useState} from 'react';
import {AppLoading} from 'expo'
import { Component } from 'react';
import { TextInputMask } from 'react-native-masked-text'
import date from 'date-and-time';
//<Icon source={require('../src/img/backbtn.png')} style={styles.backbtn}></Icon>



async function loadAppliction(){
  await Font.loadAsync({
    'mm':require('../assets/fonts/Roboto-Black.ttf')
  })
}





export default function LinksScreen({navigation}) {
  
  const [isReady,setIsReady] = useState(false);
  if(!isReady){
    return <AppLoading
      startAsync={loadAppliction}
      onError={err=>console.log(err)}
      onFinish={()=>setIsReady(true) }
    />
  }else return (
    
    <View style={styles.container}>
    <ImageBackground blurRadius={0.6} source={require('../src/img/background2.png')} style={styles.image}  >
      <View style={styles.container}>
      


        <TouchableOpacity activeOpacity = { .9 } onPress={()=>navigation.navigate('Form5')}>
          <Image source={require('../src/img/backbtn.png')} style={styles.backbtn} />
        </TouchableOpacity>
        
      
        <Image source={require('../src/img/logo.png')} style={styles.logo}></Image>
        <Text style={styles.textLogo}>SPRY ROCKS</Text>

        <View style={styles.txt}>
            <Text style={styles.txt1}>Glad to see you, friend! </Text><View></View>
            <Text style={styles.txt2}>   <Text style={{color:'orange', fontWeight:'bold'}}>SPRY ROCKS</Text> is a rapidly developing European company with headquarter at Kharkiv, Ukraine. </Text><View></View>
            <Text style={styles.txt2}>      Our company was founded in 2014 and although we are a young team we have a lot of successful projects and satisfied customers. </Text><View></View>
            <Text style={styles.txt2}>      In work with every particular customer, the main philosophy is to establish and keep good relations. </Text><View></View>
            <Text style={styles.txt2}>   We develop innovative solutions that not only contribute to the success of our customer's businesses but also give them a competitive market advantage.  </Text>
            <Text style={styles.txt2}>    Because your success is our success too!</Text>
        </View>
       
      </View>
    </ImageBackground>
    </View>
  );
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "column"
  },
  txt:{
      padding: 5,
    textAlign:'justify',
    fontFamily: 'mm',
    fontSize: 16,
    color: 'white',
     marginTop: 30,
    backgroundColor: 'rgba(256,256,256, .7)',
 

    color: '#303F9F',
    borderColor: "#fff",
    borderWidth: 2,
    width: "95%",
    alignSelf: "center"
  },
  txt1:{
    marginBottom: 34,
    color: '#303F9F',
    fontSize: 20,
  },
  txt2:{
    textAlign:'justify',
    color: '#303F9F',
    fontSize: 20,
  },
  
  btn:{
    fontFamily:'mm',
    fontWeight:'bold',
    width: "50%",
    alignSelf: "center",
    marginTop: 630,
    position: 'absolute'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    
  },
  fillForm2:{
    color: 'white',
    fontSize: 18,
    fontFamily: 'mm',
    marginTop: 5,
    marginLeft: 40,
    
  },
  txtTitle: {
    marginTop: 15,
    paddingLeft: 30,
    fontSize: 24,
    fontFamily: 'mm',
    color: 'orange',
    backgroundColor: 'rgba(47,163,218, .7)',
    width: '60%',
    height: 40,
    
  },
  textInput:{
    borderWidth: 2,
    borderColor: "#000",
    marginRight: 30,
    marginLeft: 30,
    height: 35,
    paddingTop: 5,
    borderColor: "white",
    fontFamily:'mm',
    fontSize: 18,
    color: '#303F9F',
    backgroundColor: 'rgba(256,256,256, .6)',
  },
  mda: {
    marginTop: 30,
    backgroundColor: 'rgba(256,256,256, .2)',
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40,
    color: "#fff",
    borderColor: "#fff",
    borderWidth: 2,
    width: "70%",
    alignSelf: "center"
  },
  txtFill: {
    color: "#fff",
    fontSize: 24,
    fontFamily:'mm',
    fontWeight:'bold',
  
    alignSelf: "center",
    textAlign:'center'
  },
  txtFill2: {
    color: "#fff",
    fontSize: 12,
    fontFamily:'mm',
  
    alignSelf: "center",
    textAlign:'center'
  },
  backbtn: {
    width: 40,
    height: 40,
    marginTop: 30,
  },
  textLogo:{
    marginTop: -45,
    alignSelf: "center",
    color: 'orange',
    fontSize: 24,
    fontFamily: 'mm'
  },
  logo:{
    marginTop: -70,
    resizeMode:"contain",
    alignSelf: "center",
    justifyContent: 'center',
    height: 150,
    width:150,
    alignItems: 'center',

  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
