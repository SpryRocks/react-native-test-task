
import React, { Component } from 'react';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image, Button, TextInput, } from 'react-native';
import * as Font from 'expo-font';
import {useState} from 'react';
import {AppLoading} from 'expo';
import { CheckBox } from 'react-native-elements'
import { db } from '../src/config';
import email from 'react-native-email';

async function loadAppliction(){
  await Font.loadAsync({
    'mm':require('../assets/fonts/Roboto-Black.ttf')
  })
}





export default function Form5({navigation}){
  const [state, setState] = useState(false);
  const [isReady,setIsReady] = useState(null);
  const [hobbies,setHobbies] = useState(null);
  const [additionalInfo,setAdditionalInfo] = useState(null);

  let jobSeeker = {
    name: {name},
    position:{position},
    dob: {dob},
    city:{city},
    phone:{phone},
    university:{university},
    specialization:{specialization},
    graduated:{graduated},
    educationalOrg:{educationalOrg},
    course:{course},
    finishDate:{finishDate},
    previousCompany:{previousCompany},
    previousPosition:{previousPosition},
    hobbies:{hobbies},
    additionalInfo:{additionalInfo}
  };

  let addJobSeeker = newOne => {
    db.ref().push({
      jobSeeker: newOne
    });
    const to = ['hr@spryrocks.com'] 
        email(to, {
            subject: 'I am looking for a job',
            body: 'Hello. I would like to become one of your team. Some information about me:' +"\n-" + name + "\n-" + position +"\n-" + dob +"\n-" + phone 
            +"\n-" + university +"\n-" + specialization +"\n-" + graduated +"\n-" + educationalOrg +"\n-" + course +"\n-" +finishDate +"\n-" +previousCompany
            +"\n-" + previousPosition +"\n-" +hobbies +"\n-" + additionalInfo
        }).catch(console.error)
    
    
  };

  function handleSubmit () {
    addJobSeeker(jobSeeker);
    
    //alert('Item saved successfully');
    navigation.navigate('Final')
  };
  
 
  if(!isReady){
    return <AppLoading
      startAsync={loadAppliction}
      onError={err=>console.log(err)}
      onFinish={()=>setIsReady(true) }
    />
    
  }else return (
      
    <ImageBackground blurRadius={0.6} source={require('../src/img/background2.png')} style={styles.image}  >

        <TouchableOpacity activeOpacity = { .9 } onPress={()=>navigation.navigate('Form4')}>
          <Image source={require('../src/img/backbtn.png')} style={styles.backbtn} />
        </TouchableOpacity>
        
        <Image source={require('../src/img/logo.png')} style={styles.logo}></Image>

        <Text style={styles.textLogo}>SPRY ROCKS</Text>
        
        <View style={styles.mda}>
          <Text style={styles.txtFill}>FILL THE FORM</Text>
          <Text style={styles.txtFill2}>area with * must be filled</Text>
        </View>

        <ScrollView>
            <Text style={styles.txtTitle} >Your hobbies</Text>
            <Text style={styles.fillForm2} >How you spend your free time?</Text>
            <TextInput style={styles.textInput} placeholder=" hobbies, sport, etc..." placeholderTextColor="#607D8B" multiline={true} onChangeText={(val) =>setHobbies(val)}></TextInput>
            <Text style={styles.txtTitle2}>Additional informtion</Text>
            <Text style={styles.fillForm2} >Do you have any quastions for us?</Text>
            <TextInput style={styles.textInput} placeholder=" be in touch :)" placeholderTextColor="#607D8B" multiline={true} onChangeText={(val) =>setAdditionalInfo(val)}></TextInput>
            <View style={styles.checkboxContainer}>
                <CheckBox  left onLongPress={()=>setState(false)} 
                containerStyle={styles.checkboxContainer} title="I CONSENT TO THE PROCESSING OF PERSONAL DATA" 
                 fontFamily='mm' checked={state}  onPress={()=>setState(true)}/>
            </View>
            {!state ? <View></View> :<View style={styles.btn}><Button color="orange" title="SEND FORM" onPress={()=>handleSubmit()}/></View> }
            <View style={{height:40}}></View>
        </ScrollView>

    </ImageBackground>
    
   
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
   // flexDirection: "column"
  },
  frm:{
    justifyContent: 'center',
    marginTop: -50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  btn:{
    fontFamily:'mm',
    fontWeight:'bold',
    alignSelf: "center",
    marginTop: 70,
    
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
  },
  agree:{
        fontSize:14,
        fontFamily:'mm',       
  },
  checkboxContainer: {
    marginTop: 20,
    flex:1,
    marginRight:5,
  },
  checkbox: {
   
  },
  label: {
    margin: 8,
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
    shadowColor: "#000",
shadowOffset: {
	width: 10,
    height: 12,
    borderColor: "#fff",
    borderWidth: 2,
    borderBottomWidth: 2,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
    
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
    borderColor:"black"
},
txtTitle2: {
    marginTop: 15,
    paddingLeft: 30,
    fontSize: 24,
    fontFamily: 'mm',
    color: 'orange',
    backgroundColor: 'rgba(47,163,218, .7)',
    width: '80%',
    height: 40,
    borderColor:"black"
},

    
  
  textInput:{
      textAlign:"center",
    borderWidth: 2,
    borderColor: "#000",
    marginRight: 30,
    marginLeft: 30,
    height: 200,
    paddingTop: 5,
    borderColor: "white",
    fontFamily:'mm',
    fontSize: 18,
    color: '#303F9F',
    backgroundColor: 'rgba(256,256,256, .6)',
    paddingTop: -170,
    textAlignVertical: "top",
    paddingTop:0,
    paddingBottom:0,
    alignItems: "center",
    textAlign:"left"
    

  },
  fillForm:{
    shadowColor: "#000",
shadowOffset: {
	width: 10,
    height: 12,
    shadowRadius: 30,
    shadowOpacity: 3,
    
},
shadowOpacity: 0.58,
shadowRadius: 16.00,


elevation: 24,
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
    alignSelf: "center",
    
  },
  txtFill: {
    color: "#fff",
    fontSize: 24,
    fontFamily:'mm',
    fontWeight:'bold',
  
    alignSelf: "center",
    textAlign:'center',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
    
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
