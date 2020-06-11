import React,{ useEffect } from 'react';
import { View, Text, StyleSheet,Button,Image,TextInput,TouchableOpacity,Keyboard} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useState} from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export const AppFormPerson = () => {
    const navigation = useNavigation();
    const [isSelected, setSelection] = useState(false)

    const [name,setName] = useState(null);
    const [position,setPosition] = useState(null);
    const [birthday,setBirthday] = useState(null);
    const [city,setCity] = useState(null);
    const [number,setNumber] = useState(null);
    global.name = name;
    global.position = position;
    global.birthday = birthday;
    global.city = city;
    global.number = number;
  
    function areaError(){
      
      if(name !== null && name.length < 3){ alert('Enter your full name please and it is must me correct')}
      if(position !== null && position.length < 3){ alert('Specify your desire profession')}
      if(birthday !== null && birthday.length > 8 ){ alert('Enter valid data')}
      if(name == null ||  birthday == null || city == null || number == null ){
        alert('Area with * must be filled')
      } else{
        navigation.navigate('Edu')
      }
    }



    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    
        return () => {
          Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
          Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);
    
      const _keyboardDidShow = () => {
        return(setSelection(true))
      };
    
      const _keyboardDidHide = () => {
        return(setSelection(false))
      };

    
       
    
    return(
        <View style={styles.container}>
           {isSelected ? 
                 <View></View>: 
                    <View style={styles.logo}>
                    <Image
                        source={require('../img/Rocks.png')}
                        style={styles.imgRocks}/>
                    <Text style={styles.textRocks}>SPRY ROCKS</Text>
                    </View> }
            {isSelected ? 
                 <View></View>: 
            <View style={styles.center}>
                <Text style={styles.fillForm}>
                    FILL THE FORM
                </Text>
                <Text>
                    area with <Text style={styles.star}>*</Text> must be filled
                </Text>
            </View> }

            <View style={styles.infoText}>
                <Text style={styles.infoTextSt}>Personal Info</Text>
            </View>
            <View>
                <View style={styles.dFlex}>
                        <View style={styles.addForm}>
                            <Text style={styles.titleForm}>Full name<Text style={styles.star}>*</Text></Text>
                            <TextInput style={styles.inputText}  placeholder='   type your full name'    onChangeText={(value) =>setName(value)}></TextInput>
                        </View>
                        <View style={styles.addForm}>
                            <Text style={styles.titleForm}>Position<Text style={styles.star}>*</Text></Text>
                            <TextInput style={styles.inputText} placeholder='   for example:IOS developer, Designer'  onChangeText={(value) =>setPosition(value)}></TextInput>
                        </View>
                        <View style={styles.addForm}>
                            <Text style={styles.titleForm}>Date of birthday<Text style={styles.star}>*</Text></Text>
                            <TextInput style={styles.inputText} placeholder='   dd.mm.yyyy'  keyboardType="numeric" onChangeText={(value) =>setBirthday(value)}></TextInput>
                        </View>
                        <View style={styles.addForm}>
                            <Text style={styles.titleForm}>City<Text style={styles.star}>*</Text></Text>
                            <TextInput style={styles.inputText} placeholder='   Kharkiv'  onChangeText={(value) =>setCity(value)}></TextInput>
                        </View>
                        <View style={styles.addForm}>
                            <Text style={styles.titleForm}>Phone number<Text style={styles.star}>*</Text></Text>
                            <TextInput style={styles.inputText}   placeholder='   +38(0_ _)_ _ _-_ _-_ _'   maxLength={15}   keyboardType="phone-pad" onChangeText={(value) =>setNumber(value)} type="telephone"></TextInput>
                        </View>
                </View>
            </View>    
            <View style={styles.buttonFlex}>
                <TouchableOpacity  
                onPress={() => areaError()} style={styles.nextButton} onSubmitEditing={Keyboard.dismiss}>
                    <Text  style={styles.textButton} >NEXT</Text>
                </TouchableOpacity>
            </View>
            
          

        </View>
    ) 

}

const styles = StyleSheet.create({
    center: {
       
        justifyContent: 'center',
        alignItems:'center'
    },
    container: {
        alignItems:'center',
        justifyContent: 'space-around',
        flex: 1,
    },
    addForm:{
        height: hp('10%')
    },
    titleForm:{
        fontSize: 15,
        marginTop: 10,
        marginLeft: 45,
    },
    infoText:{
        alignSelf:'flex-start',
        marginLeft: 30,
        color: '#7A4ED9',
    },
    infoTextSt:{
        color:'#7A4ED9',
    },
    inputText:{
        borderWidth: 1,
        marginRight: 30,
        marginLeft: 30,
        height: 40,
        paddingTop: 5,
        borderColor: "black",
        fontSize: 20,
        borderRadius: 3,
        
        

    },
    dFlex:{
        justifyContent: 'space-around',
        marginBottom: 10,
        width:'100%',
        
    },
    nextButton:{
        width: 300,
        height: 60,
        backgroundColor: 'rgba(122, 78, 217, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
    },
    textButton:{
        color: 'white',
        fontSize: 20,
    },
    star:{
        color:'red'
    },
    fillForm:{
        textTransform:'uppercase',
        fontSize: 36,
        alignItems:'center',
        justifyContent:'center',
    },
    logo:{
        justifyContent:'center',
        alignItems:'center',
        

    },
    buttonFlex:{
        
        justifyContent:'flex-end'
    },
    textRocks:{
        fontSize: 25,
    },
    imgRocks:{
        maxWidth:'100%',
    }
    
})


