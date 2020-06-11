import React, {useState} from 'react';
import { View, Text, StyleSheet ,Button, TextInput, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export const formEdu = () => {
    const navigation = useNavigation();
    const [value, onChangeText] =  useState();


    const saveHandler = () =>{
        if(value.trim().length < 3) {
            Alert.alert('Ошибка', `минимальная 3 сим`)
        } else {
            onSave(value)
        }
    }


    return(
        <View style={styles.center}> 
        <Text>Education</Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={onChangeText}
            value={value}
            placeholder ={'Education institution'}
        />
        <View>
            <Button
            title="Next"
            onPress={() => navigation.navigate('Cours')} />
        </View>
        <View>
            <Button
            title="AddForm"
            onPress={saveHandler} />
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
})