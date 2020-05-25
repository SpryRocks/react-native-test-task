import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View, Image, Button, TextInput, KeyboardAvoidingView} from 'react-native';
import * as Font from 'expo-font'
import {useState} from 'react';
import {AppLoading} from 'expo'


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


async function loadAppliction(){
  await Font.loadAsync({
    'mm':require('../assets/fonts/Roboto-Black.ttf')
  })
}





export default function Form3({navigation}) {
  const [isReady,setIsReady] = useState(false);
  const [educationalOrg,setEducationalOrg] = useState(null);
  const [course,setCourse] = useState(null);
  const [finishDate,setFinishDate] = useState(null);
  global.educationalOrg = educationalOrg;
  global.course = course;
  global.finishDate = finishDate;
  if(!isReady){
    return <AppLoading
      startAsync={loadAppliction}
      onError={err=>console.log(err)}
      onFinish={()=>setIsReady(true) }
    />
  }else return (
    
    
    <ImageBackground blurRadius={0.6} source={require('../src/img/background2.png')} style={styles.image}  >
        <KeyboardAwareScrollView>
      <View style={styles.container}>
      


        <TouchableOpacity activeOpacity = { .9 } onPress={()=>navigation.navigate('Form2')}>
          <Image source={require('../src/img/backbtn.png')} style={styles.backbtn} />
        </TouchableOpacity>
        
      
        <Image source={require('../src/img/logo.png')} style={styles.logo}></Image>
        <Text style={styles.textLogo}>SPRY ROCKS</Text>
        <View style={styles.mda}>
          <Text style={styles.txtFill}>FILL THE FORM</Text>
          <Text style={styles.txtFill2}>area with * must be filled</Text>
        </View>
   
        <Text style={styles.txtTitle}>Courses</Text>
        <View style={styles.fillForm}>
          <Text style={styles.fillForm2}>Educational organization</Text>
          <TextInput style={styles.textInput} placeholder=" enter name here" placeholderTextColor="#607D8B" onChangeText={(val) =>setEducationalOrg(val)}></TextInput>
        </View>
        <View style={styles.fillForm}>
          <Text style={styles.fillForm2}>Course</Text>
          <TextInput style={styles.textInput} placeholder=" enter name here" placeholderTextColor="#607D8B" onChangeText={(val) =>setCourse(val)}></TextInput>
        </View>
        <View style={styles.fillForm}>
          <Text style={styles.fillForm2}>FinishDate</Text>
          <TextInput style={styles.textInput} placeholder=" mm.yyyy" keyboardType="numeric" placeholderTextColor="#607D8B" onChangeText={(val) =>setFinishDate(val)}></TextInput>
        </View>
       
        <View style={styles.btn}><Button color="orange" title="Next" onPress={()=>navigation.navigate('Form4')}/></View>
        
      </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
    
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
