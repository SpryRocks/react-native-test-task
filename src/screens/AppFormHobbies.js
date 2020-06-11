import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,TouchableOpacity,TextInput,Image,CheckBox,Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {} from 'react-native-elements';
import email from 'react-native-email';




export const AppFormHobbies = () => {
    
    const [isSelect, setSelect] = useState(false)
    const [isSelected, setSelection] = useState(false)
    const [hobbies,setHobbies] = useState(null);
    const [info,setInfo] = useState(null);
    const navigation = useNavigation();


    let data = {
        name: {name},
        position:{position},
        birthday: {birthday},
        city:{city},
        number:{number},
        specialization:{specialization},
        graduated:{graduated},
        university:{university},
        organization:{organization},
        course:{course},
        finishDate:{finishDate},
        placeOfWork:{placeOfWork},
        positionHeald:{positionHeald},
        startWork:{startWork},
        endWork:{endWork},
        hobbies:{hobbies},
        info:{info}
    };

    const  messageError = () =>{
        alert('To submit a form, you must agree to the processing of personal data')
    }
    const sendForm = () => {
        // sendData(data)
        navigation.navigate('AboutUs')
    } 

    
  let sendData = newData => {
    apiKey.ref().push({
      data: newData
    });
    const adress = ['xrelizet@gmail.com'] 
        email(adress, {
            subject: 'Message form',
            body: 'Hello' +"\n-" + name + "\n-" + position +"\n-" + birthday +"\n-" + city +"\n-" + number 
            +"\n-" + specialization +"\n-" + graduated +"\n-" + university +"\n-" + organization +"\n-" + course +"\n-" +finishDate +"\n-" +placeOfWork
            +"\n-" + positionHeald +"\n-" +hobbies +"\n-" +startWork +"\n-" +endWork +"\n-" + info
        })
        .catch(console.error)
    
    
  };



    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

        return () => {
        Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);

    const _keyboardDidShow = () => {
        return(setSelect(true))
    };

    const _keyboardDidHide = () => {
        return(setSelect(false))
    };

    return(

    <View style={styles.container}>

        {isSelect ? <View></View>:
        <View style={styles.logo}>
            <Image
                source={require('../img/Rocks.png')}
                style={styles.imgRocks}
            />
            <Text style={styles.textRocks}>SPRY ROCKS</Text>
        </View>}
        {isSelect ? <View></View> :
        <View style={styles.center}>
            <Text style={styles.fillForm}>
                FILL THE FORM
            </Text>
            <Text>
                area with <Text style={styles.star}>*</Text> must be filled
            </Text>
        </View>}
        
        <View style={styles.scrollFlex} >
            <View style={styles.infoText}>
                <Text style={styles.infoTextSt}>YOUR HOBBIES</Text>
            </View>

            <View style={styles.dFlex}>
                    <View style={styles.addForm}>
                        <Text style={styles.titleForm}>How do you spend your free time?</Text>
                        <TextInput style={styles.inputText} placeholder='   Hobbies,sport, etc...' multiline={true}     onChangeText={(value) =>setHobbies(value)}></TextInput>
                    </View>
            </View>

            <View style={styles.infoText}>
                <Text style={styles.infoTextSt}>ADDITIONAL INFORMATION</Text>
            </View>
            <View style={styles.dFlex}>
                    <View style={styles.addForm}>
                        <Text style={styles.titleForm}>Do you have any questions for us?</Text>
                        <TextInput style={styles.inputText} placeholder='   Be in touch' multiline={true}  onChangeText={(value) =>setInfo(value)}></TextInput>
                    </View> 
            </View>
        </View>

        <View style={styles.checkBox}>
            <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.box}
            />
            <Text style={styles.checkText}>I CONSENT TO THE PROCESSING OF PERSONAL DATA</Text>
        </View>
        
        

            
            <View style={styles.buttonFlex}>

                {!isSelected ?
                <View> 
                    <TouchableOpacity 
                        style={styles.nextButtonHidden}
                        onPress={()=> messageError()} 
                        >
                        <Text  style={styles.textButton} >SEND FORM</Text>
                        </TouchableOpacity>

                </View>  
                :
                    <View style={styles.btn}>
                    <TouchableOpacity 
                        style={styles.nextButton}
                        onPress={()=>sendForm()}  
                        >
                        <Text  style={styles.textButton} >SEND FORM</Text>
                        </TouchableOpacity>
                    </View> }
                
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
        height:70,
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
    },
    logo:{
        
        justifyContent:'flex-end',
        alignItems:'center',

    },
    buttonFlex:{
    
        justifyContent:'flex-end'
    },
    textRocks:{
        fontSize: 25,
    },
    imgRocks:{
        maxWidth:'100%'
    },
    hobbiesFlex:{
        
        justifyContent:'space-around',
        
    },
    box:{
        fontSize: 18,
        color:'green'
    },
    checkBox:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
    },
    checkText:{
        fontSize:12,
    },
    nextButtonHidden:{
        width: 300,
        height: 60,
        backgroundColor: 'rgba(122, 78, 217, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,

    },
    scrollFlex:{
        alignSelf:'flex-start',
        width:'100%'
    },
    

    
})
