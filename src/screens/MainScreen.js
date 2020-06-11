import React from 'react';
import { View, Text, StyleSheet,ImageBackground,Image,TouchableOpacity,Linking} from 'react-native';
import { useNavigation } from '@react-navigation/native';



     

export const MainScreen = () => {
    const navigation = useNavigation();
    return (
    <ImageBackground blurRadius={0.6} source={require('../img/bkg1.png')} style={styles.image} >

    <View style={styles.container}>

        <View style={styles.logo}>
            <Image
                source={require('../img/Frame.png')}
                style={styles.imgRocks}
            />
            <Text style={styles.textRocks}>SPRY ROCKS</Text>
        </View>

        <Text style={styles.textWelcome}>Welcome!</Text>

       <View style={styles.center}>
            <Text style={styles.textSendForm}>Want to be a part of team?</Text>
      
            <TouchableOpacity onPress={() => navigation.navigate('Person')} style={styles.sendForm}>
                <Text style={styles.textSendForm}>Send form</Text>
            </TouchableOpacity>

       </View>

        <View style={styles.center, styles.content}>
            <TouchableOpacity activeOpacity = { .5 } onPress={()=>navigation.navigate('AboutUs')}>
                <Image source={require('../img/Ellipse1.png')} style={styles.info}></Image>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .9 } onPress={()=>{Linking.openURL('https://spryrocks.com/')}}>
                <Text style={styles.textLink}>SPRYROCKS.COM</Text>
            </TouchableOpacity>
        </View>
        
        
    </View>
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent: 'space-around',
        flex: 1,
        backgroundColor: 'rgba(12, 3, 46, .8)',
        maxHeight:"100%"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width:'100%',
        
    },
    center:{
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
    textSendForm: {
        color: 'white',
        fontSize: 20,
    },
    textLink: {
        color: 'white',
        fontSize: 20,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    },
    sendForm:{
        width: 300,
        height: 60,
        backgroundColor: 'rgba(122, 78, 217, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
    },
    textWelcome:{
        color: 'white',
        fontSize: 65,
    },
    textRocks:{
        color:'white',
        fontSize: 33,
    },
    imgRocks:{
        height: 70,
    },
    content:{
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
    },
    logo:{
        justifyContent:'flex-end',
        alignItems:'center',
    }
})