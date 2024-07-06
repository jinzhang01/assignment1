import { View, Text, TextInput, CheckBox } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Register = () => {
    const [text, setText] = useState('');
    const[isNameValidate, setNameValidate] = useState(false);
    const [email, setEmail] = useState('');
    const [isEmailValidate, setEmailValidate] = useState(false);

    const checkName = () => {
        // Check if text is non-numeric and more than 1 character
        if (text.length > 1 && isNaN(text)) {
            setNameValidate(true);
        } else {
            setNameValidate(false);
        }
        console.log(isNameValidate);
    }

    const checkEmail = () => {
        // Check if email is valid
        if (email.includes('@') && email.includes('.')) {
            setEmailValidate(true);
        } else {
            setEmailValidate(false);
        }
        console.log(isEmailValidate);
    }

  return (
    <View>
        {/* could add a touched state to check if the user has touched the input field */}
        <Text> name </Text>
        <TextInput  
        placeholder="Enter your name"
        style={{height: 40, borderColor: 'gray', borderWidth: 1}} 
        onChangeText = {text => setText(text)}
        onBlur={checkName}
    
        />
        {isNameValidate ?  null : <Text> lease enter a valid name </Text>}
        
        
        <Text> Email Address</Text>
        <TextInput
        placeholder="Enter your email address"
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText = {email => setEmail(email)}
        onBlur={checkEmail}
        />
        {isEmailValidate ? null : <Text> Please enter a valid email address </Text>}


    </View>
  )
}

export default Register