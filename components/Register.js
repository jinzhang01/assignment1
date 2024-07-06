import { View, Text, TextInput, CheckBox, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Checkbox from 'expo-checkbox';

const Register = () => {
    const [text, setText] = useState('');
    const[isNameValidate, setNameValidate] = useState(false);
    const [email, setEmail] = useState('');
    const [isEmailValidate, setEmailValidate] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    // Function to handle checkbox value change and log the status
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        console.log(isChecked);  
    };

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
        value={text} 
        style={{height: 40, borderColor: 'gray', borderWidth: 1}} 
        onChangeText = {userInputs => setText(userInputs)}
        onBlur={checkName}
    
        />
        {isNameValidate ?  null : <Text> lease enter a valid name </Text>}
        
        
        <Text> Email Address</Text>
        <TextInput
        placeholder="Enter your email address"
        value={email}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText = {userEmail => setEmail(userEmail)}
        onBlur={checkEmail}
        />
        {isEmailValidate ? null : <Text> Please enter a valid email address </Text>}

        <View>
                <Checkbox 
                    value={isChecked}
                    onValueChange={handleCheckboxChange}
                />
                <Text>I am not a robot</Text>
            </View>

            <Button 
                title="Reset" 
                onPress={() => {
                    console.log('Form reset');
                    setIsChecked(false);
                    setText('');
                    setEmail('');
                  }} 
            />
       
            <Button title="Submit" onPress={() => console.log('Form submitted')} />



    </View>
  )
}

export default Register