import { View, Text, TextInput, CheckBox, Button, Modal, StyleSheet} from 'react-native'
import React from 'react'
import { useState } from 'react'
import Checkbox from 'expo-checkbox';
import Confirm from '../screens/Confirm';

const Register = ({onGameButton}) => {
    const [text, setText] = useState('');
    const[isNameValidate, setNameValidate] = useState(true);
    const [email, setEmail] = useState('');
    const [isEmailValidate, setEmailValidate] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);


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

    const handleConfirm = () => {
      setModalVisible(true);
    };
  
    const handleCloseModal = () => {
      setModalVisible(false);
    };


  console.log("Rendering Register", { text, email, isChecked, modalVisible });
  
  return (
    <View style={styles.container}>
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

        <View style={styles.CheckboxContainer}>
            <Checkbox  
                value={isChecked}
                onValueChange={handleCheckboxChange}
            />
            <Text>  I am not a robot</Text>
        </View>

          {/* to build buttons style based on text <View style={styles.fixToText}> */}
          <View style={styles.bottonContainer}>
            <View style={styles.button}>
                <Button 
                    title="Reset" 
                    onPress={() => {
                        console.log('Form reset');
                        setIsChecked(false);
                        setText('');
                        setEmail('');
                      }} 
                />
            </View>
      
            <View style={styles.button}>
              <Button title="Start" 
                
                onPress={() => 
                  {checkEmail();
                    checkName();
                    if(isNameValidate && isEmailValidate && isChecked && text && email){
                      handleConfirm();
                  }
                  }} 
                disabled={!isChecked}/>
            </View>
          </View>
      <Confirm email={email} name={text} isModalVisible={modalVisible} onClose={handleCloseModal} onGameButton={onGameButton}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    color: 'black',
    fontSize: 20,
    width: "60%",
    margin: 10
  },
  bottonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "50%"
  },
  CheckboxContainer: {
    flexDirection: "row",
    justifyContent: "left",
    margin: 10
  },
});

export default Register