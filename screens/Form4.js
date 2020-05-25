
import * as React from 'react';
import { ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View, Image, Button, TextInput, KeyboardAvoidingView} from 'react-native';
import * as Font from 'expo-font'
import {useState} from 'react';
import {AppLoading} from 'expo'
import { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'





async function loadAppliction(){
  await Font.loadAsync({
    'mm':require('../assets/fonts/Roboto-Black.ttf')
  })
}





export default function Form4({navigation}) {
  const [isReady,setIsReady] = useState(false);
  const [previousCompany,setPreviousCompany] = useState(null);
  const [previousPosition,setPreviousPosition] = useState(null);
  global.previousCompany = previousCompany;
  global.previousPosition = previousPosition;
  if(!isReady){
    return <AppLoading
      startAsync={loadAppliction}
      onError={err=>console.log(err)}
      onFinish={()=>setIsReady(true) }
    />
  }else return (
    
    <View style={styles.container}>
    <ImageBackground blurRadius={0.6} source={require('../src/img/background2.png')} style={styles.image}  >
    <KeyboardAwareScrollView>
      <View style={styles.container}>
      

        <KeyboardAvoidingView>
        <TouchableOpacity activeOpacity = { .9 } onPress={()=>navigation.navigate('Form3')}>
          <Image source={require('../src/img/backbtn.png')} style={styles.backbtn} />
        </TouchableOpacity>
        
      
        <Image source={require('../src/img/logo.png')} style={styles.logo}></Image>
        <Text style={styles.textLogo}>SPRY ROCKS</Text>
        <View style={styles.mda}>
          <Text style={styles.txtFill}>FILL THE FORM</Text>
          <Text style={styles.txtFill2}>area with * must be filled</Text>
        </View>
        <Text style={styles.txtTitle}>Work expirience</Text>
        <View style={styles.fillForm}>
          <Text style={styles.fillForm2}>Place of work</Text>
          <TextInput style={styles.textInput} placeholder=" enter company name" placeholderTextColor="#607D8B" onChangeText={(val) =>setPreviousCompany(val)}></TextInput>
        </View>
        <View style={styles.fillForm}>
          <Text style={styles.fillForm2}>Position </Text>
          <TextInput style={styles.textInput} placeholder=" Java developer" placeholderTextColor="#607D8B" onChangeText={(val) =>setPreviousPosition(val)}></TextInput>
        </View>
        
        <View style={styles.btn}><Button color="orange" title="Next" onPress={()=>navigation.navigate('Form5')}/></View>
        </KeyboardAvoidingView>
      </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
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
});
