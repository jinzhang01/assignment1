import { View, Text, TextInput, CheckBox, Button, Modal, StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'
import { useState } from 'react'
import Checkbox from 'expo-checkbox';
import Confirm from '../screens/Confirm';
import colors from '../style/colors';

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
    <SafeAreaView style={styles.safeArea}> 
      <View style={styles.title}>
          <Text style={styles.title}>Welcome</Text>
      </View>

      <View style={styles.container}>
          {/* could add a touched state to check if the user has touched the input field */}
    

          <Text style={styles.subtitle}> Name </Text>
          <TextInput style={styles.textInput}  
            placeholder="Enter your name"
            value={text} 
            onChangeText = {userInputs => setText(userInputs)}
            onBlur={checkName}
          />
          {isNameValidate ?  null : <Text style={styles.textStyle}>  Please enter a valid name </Text>}
          
          
          <Text style={styles.subtitle}> Email Address</Text>
          <TextInput style={styles.textInput} 
          placeholder="Enter your email address"
          value={email}
          onChangeText = {userEmail => setEmail(userEmail)}
          onBlur={checkEmail}
          />
          {isEmailValidate ? null : <Text style={styles.textStyle}>  Please enter a valid email address </Text>}

          <View style={styles.CheckboxContainer}>
              <Checkbox  
                  value={isChecked}
                  onValueChange={handleCheckboxChange}
              />
              <Text>  I am not a robot</Text>
          </View>

            {/* to build buttons style based on text <View style={styles.fixToText}> */}
            <View style={styles.bottonContainer}>
              <View style={styles.buttonBack}>
                  <Button style={styles.buttonText}
                      title="Reset" 
                      onPress={() => {
                          console.log('Form reset');
                          setIsChecked(false);
                          setText('');
                          setEmail('');
                        }} 
                  />
              </View>
        
              <View style={styles.buttonForward}>
                <Button 
                  style={styles.buttonText}
                  title="Start" 
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  saftArea: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: colors.backgroundLight,
  },
  container: {
    width: '100%', 
    padding: 20,
    backgroundColor: colors.cardBackground,
    justifyContent: 'center',
    borderRadius: 10, 
    shadowColor: colors.secondary, 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5, 
    shadowRadius: 8, 
    elevation: 5, 
  },
  title: {
    borderRadius: 5,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    padding: 15,
    fontSize: 24,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.secondary,
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'left',
  },
  textInput: {
    height: 40, 
    borderColor: colors.secondary, 
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  textStyle: { 
    fontSize: 14, 
    color: colors.text, 
    textAlign: 'left',
  },
  
  buttonBack: {
    backgroundColor: colors.buttonGoBack,
    borderRadius: 5,
    width: "60%",
    margin: 10,
    fontcolor: colors.buttonText,
  },
  buttonForward: {
    backgroundColor: colors.buttonContinue,
    borderRadius: 5,
    width: "60%",
    margin: 10,
    fontcolor: colors.buttonText,
  },

  bottonContainer: {
    flexDirection: "row",
    width: "50%"
  },

  CheckboxContainer: {
    flexDirection: "row",
    justifyContent: "left",
    marginTop: 10,
    padding: 5
  },
});

export default Register