import { View, Text, TextInput, Button } from 'react-native'; 
import React, { useState } from 'react';

const GuessNum = () => {
    const [guess, setGuess] = useState('')

    const validateInput = (userGuess) => {
        if (isNaN(userGuess)) {
            alert('Please enter a number')
            return false
        } else {
            return true
        }
    }

    const handleGuess = (userGuess) => {
        if (validateInput(userGuess)) {
            setGuess(userGuess); 
        }
    };

  return (
    <View>
      <Text>Guess a Number Between 1 & 100</Text>
    <TextInput 
        placeholder='Enter your guess'
        value={guess}
        keyboardType='numeric'
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        // valide the input to make sure it is a number
        onChangeText = {handleGuess}
    />
    <Button title="Use a Hint" onPress={() => alert('The number is between 1 and 100')} />
    <Button title='Submit Guess' onPress={() => console.log("from submit")} />
    </View>
  )
}

export default GuessNum