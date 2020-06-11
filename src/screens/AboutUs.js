import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StyleSheet, Text, View, Image,} from 'react-native';


  
  
  
  export const  AboutUs = () => {

   
    
   
    return (
      
      <View style={styles.container}>
        <View style={styles.logo}>
                <Image
                    source={require('../img/Rocks.png')}
                    style={styles.imgRocks}
                />
                <Text style={styles.textRocks}>SPRY ROCKS</Text>
        </View>
        <View>
          <View >
              <Text style={styles.text}>  Glad to see you, friend! </Text><View></View>
              <Text style={styles.text}>   <Text style={styles.abs}>SPRY ROCKS</Text> is a rapidly developing European company with headquarter at Kharkiv, Ukraine. </Text><View></View>
              <Text style={styles.text}>   Our company was founded in 2014 and although we are a young team we have a lot of successful projects and satisfied customers. </Text><View></View>
              <Text style={styles.text}>   In work with every particular customer, the main philosophy is to establish and keep good relations. </Text><View></View>
              <Text style={styles.text}>   We develop innovative solutions that not only contribute to the success of our customer's businesses but also give them a competitive market advantage.  </Text>
              <Text style={styles.text}>   Because your success is our success too!</Text>
          </View>
        </View>
      </View>
  
      
     
      
    );
  }

const styles = StyleSheet.create({
  center: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center'
  },
  container: {
    alignItems:'center',
    justifyContent: 'space-around',
    flex: 1,
  },
  logo:{
    justifyContent:'space-around',
    alignItems:'center',
    

  },
  textRocks:{
    fontSize: 25,
  },
  imgRocks:{
      maxWidth:'100%'
  },
  text:{
    fontSize: hp('3%'),
  },
  hello:{
    fontSize: 18,
  },
  abs:{
    fontSize: 18,
    fontWeight:'bold',
  }
})