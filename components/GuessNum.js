import { View, Text, TextInput, Button } from 'react-native'; 
import React, { useState, useEffect } from 'react';

const GuessNum = () => {
    const [guess, setGuess] = useState('')
    const [count, setCount] = useState(0)
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        let interval;
        // need to change back to 60
        if (timer < 6000) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        } else {
            alert('You are out of time!');
            // Call the game over component here
        }
        return () => clearInterval(interval);
    }, [timer]);
        

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
    <Text>Attempts left: {4 - count}</Text>
    <Text>Timer: {timer} </Text>

    <Button title="Use a Hint" onPress={() => alert('The number is between 1 and 100')} />
    <Button title='Submit Guess' 
        onPress={() => {
            console.log("from submit");
            setCount(count + 1);
            console.log(count);
        }} 
    />
    </View>
  )
}

export default GuessNum