import * as React from 'react';
import { ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View, Image, Button, Linking } from 'react-native';
import * as Font from 'expo-font'
import {useState} from 'react';
import {AppLoading} from 'expo'


async function loadAppliction(){
  await Font.loadAsync({
    'mm':require('../assets/fonts/Roboto-Black.ttf')
  })
}

export default function HomeScreen({navigation}) {
  
  
  const [isReady,setIsReady] = useState(false);
  if(!isReady){
    return <AppLoading
      startAsync={loadAppliction}
      onError={err=>console.log(err)}
      onFinish={()=>setIsReady(true) }
    />
  }else return (
    <ImageBackground source={require('../src/img/background1.png')} style={styles.container}>
      <View style={styles.container}>
        <Image source={require('../src/img/logo.png')} style={styles.logo}></Image>
        <Text style={styles.textLogo}>SPRY ROCKS</Text>
        <Text style={styles.welcome}>W  E  L  C  O  M  E </Text>
        <Text style={styles.txt1}>Want to be a part of team?</Text>
        <View style={styles.btn}><Button color="orange" title="Send form" onPress={()=>navigation.navigate('Form1')}/></View>
        <TouchableOpacity activeOpacity = { .9 } onPress={()=>{Linking.openURL('https://spryrocks.com/')}}>
          <Image source={require('../src/img/info4.png')} style={styles.info}></Image>
          <Text style={styles.txt2}>SPRYROCKS.COM</Text>
        </TouchableOpacity>
        
      </View>
      
    </ImageBackground>
  );
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(47,163,218, .4)'
  },
  btn:{
    fontFamily:'mm',
    fontWeight:'bold',
    width: "50%",
    alignSelf: "center",
    marginTop: 10,
  },
  txt2:{
    textDecorationLine: 'underline',
    alignSelf: "center",
    color: 'white',
    fontSize: 14,
    
    //marginTop: '1%',
    fontFamily: 'mm'
  },
  info:{
    
    resizeMode:"contain",
    alignSelf: "center",
    justifyContent: 'center',
    height: 30,
    width: 30,
    marginTop: 110,
    alignItems: 'center',
  },
  txt1:{
    alignSelf: "center",
    color: 'white',
    fontSize: 24,
    marginTop: '30%',
    fontFamily: 'mm'
  },
  logo:{
    marginTop: -5,
    resizeMode:"contain",
    alignSelf: "center",
    justifyContent: 'center',
    height: 150,
    width:150,
    alignItems: 'center',
  },
  welcome:{
    marginTop: '30%',
    fontFamily: 'mm',
    color: 'white',
    fontSize: 35,
    alignSelf: "center",
  },
  textLogo:{
    marginTop: -45,
    alignSelf: "center",
    color: 'orange',
    fontSize: 24,
    fontFamily: 'mm'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
 
  
});
