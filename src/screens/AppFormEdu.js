import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput,TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export const AppFormEdu = () => {
    const navigation = useNavigation();
    const [university,setUniversity] = useState('');
    const [specialization,setSpecialization] = useState(null);
    const [graduated,setGraduated] = useState(null);
    global.specialization = specialization;
    global.graduated = graduated;
    global.university = university;



    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image
                    source={require('../img/Rocks.png')}
                    style={styles.imgRocks}
                />
                <Text style={styles.textRocks}>SPRY ROCKS</Text>
            </View>
            <View style={styles.center}>
                <Text style={styles.fillForm}>
                    FILL THE FORM
                </Text>
                <Text>
                    area with <Text style={styles.star}>*</Text> must be filled
                </Text>
            </View>

            <View style={styles.infoText}>
                <Text style={styles.infoTextSt}>EDUCATION</Text>
            </View>

            <View style={styles.dFlex}>
                    <View style={styles.addForm}>
                        <Text style={styles.titleForm}>Educational institution</Text>
                        <TextInput style={styles.inputText} placeholder='   Kharkiv National  University'     onChangeText={(value) =>setUniversity(value)}></TextInput>
                    </View>
                    <View style={styles.addForm}>
                        <Text style={styles.titleForm}>Specialization</Text>
                        <TextInput style={styles.inputText} placeholder='   Front-End Developer'  onChangeText={(value) =>setSpecialization(value)}></TextInput>
                    </View>
                    <View style={styles.addForm}>
                        <Text style={styles.titleForm}>Graduated year</Text>
                        <TextInput style={styles.inputText} placeholder='   dd.mm.yyyy'  keyboardType="numeric" onChangeText={(value) =>setGraduated(value)}></TextInput>
                    </View>
                    
            </View>
            <View style={styles.buttonFlex}>
                <TouchableOpacity  
                onPress={() => navigation.navigate('Cours')} style={styles.nextButton}>
                    <Text  style={styles.textButton} >NEXT</Text>
                </TouchableOpacity>
            </View>
          

        </View>
    ) 

}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    container: {
        alignItems:'center',
        justifyContent: 'space-between',
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
    },
    logo:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',

    },
    buttonFlex:{
        flex:1,
        justifyContent:'flex-end'
    },
    textRocks:{
        fontSize: 25,
    },
    imgRocks:{
        maxWidth:'100%'
    }
})