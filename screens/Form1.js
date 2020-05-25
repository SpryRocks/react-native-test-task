
import * as React from 'react';
import { ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View, Image, Button, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import * as Font from 'expo-font'
import {useState} from 'react';
import {AppLoading} from 'expo'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


async function loadAppliction(){
  await Font.loadAsync({
    'mm':require('../assets/fonts/Roboto-Black.ttf')
  })
}



export default function Form1({navigation}) {

  const [isReady,setIsReady] = useState(false);
  const [name,setName] = useState(null);
  const [position,setPosition] = useState(null);
  const [dob,setDob] = useState(null);
  const [city,setCity] = useState(null);
  const [phone,setPhone] = useState(null);
  global.name = name;
  global.position = position;
  global.dob = dob;
  global.city = city;
  global.phone = phone;

  function submit(){
    
    if(name !== null && name.length < 8){ alert('Enter your full name please and it is must me correct')}
    if(position !== null && position.length < 8){ alert('Specify your desire profession')}
    if(dob !== null && dob.length > 10 ){ alert('Enter valid data')}
    if(name == null ||  dob == null || city == null || phone == null ){
      alert('Area with * must be filled')
    } else{
      navigation.navigate('Form2')
    }
  }

  if(!isReady){
    return <AppLoading
      startAsync={loadAppliction}
      onError={err=>console.log(err)}
      onFinish={()=>setIsReady(true) }
    />
  }else return (
    <ImageBackground blurRadius={0.6} source={require('../src/img/background2.png')} style={styles.image}  >
      <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.container}>
      

        <TouchableOpacity activeOpacity = { .9 } onPress={()=>navigation.navigate('Start')}>
          <Image source={require('../src/img/backbtn.png')} style={styles.backbtn} />
        </TouchableOpacity>
      
      
        <Image source={require('../src/img/logo.png')} style={styles.logo}></Image>
        <Text style={styles.textLogo}>SPRY ROCKS</Text>
        <View style={styles.mda}>
          <Text style={styles.txtFill}>FILL THE FORM</Text>
          <Text style={styles.txtFill2}>area with * must be filled</Text>
        </View>
        <Text style={styles.txtTitle}>Personal info</Text>
        <View style={styles.fillForm}>
          <Text style={styles.fillForm2}>Full name*</Text>
          <TextInput style={styles.textInput} placeholder=" type your full name" textContentType="name" autoCompleteType="name" placeholderTextColor="#607D8B" onChangeText={(val) =>setName(val)}></TextInput>
        </View>
        <View style={styles.fillForm}>
          <Text style={styles.fillForm2}>Position*</Text>
          <TextInput style={styles.textInput} placeholder=" for example: IOS developer, Designer" placeholderTextColor="#607D8B" onChangeText={(val) =>setPosition(val)}></TextInput>
        </View>
        <View style={styles.fillForm}>
          <Text style={styles.fillForm2}>Date of birthday*</Text>
          <TextInput style={styles.textInput} placeholder=" dd.mm.yyyy" placeholderTextColor="#607D8B" keyboardType="numeric" onChangeText={(val) =>setDob(val)}></TextInput>
        </View>
        <View style={styles.fillForm}>
          <Text style={styles.fillForm2}>City*</Text>
          <TextInput style={styles.textInput} placeholder=" Kharkiv" placeholderTextColor="#607D8B" onChangeText={(val) =>setCity(val)}></TextInput>
        </View>
        <View style={styles.fillForm}>
          <Text style={styles.fillForm2}>Phonenumber*</Text>
          <TextInput style={styles.textInput} type="telephone" defaultValue="380" placeholder="38(0__)___-__-__"   maxLength={12}  placeholderTextColor="#607D8B" keyboardType="phone-pad" onChangeText={(val) =>setPhone(val)}></TextInput>
        </View>
        <View style={styles.btn}><Button color="orange" title="Next" onPress={()=>submit()}/></View>
        </View>
        </KeyboardAwareScrollView>
    </ImageBackground>
    
    
  );
  module.exports = name;
  
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  btn:{
    fontFamily:'mm',
    fontWeight:'bold',
    
    alignSelf: "center",
    marginTop: 600,
    width:'50%',
    //marginBottom:30,
    //top: 40,
   // bottom: screen.width -30
    //marginHorizontal:10
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
 
});
