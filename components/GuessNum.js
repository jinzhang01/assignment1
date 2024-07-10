import { View, Text, TextInput, Button } from 'react-native'; 
import React, { useState, useEffect } from 'react';



const GuessNum = ({setNumber, assignedCount}) => {
    const [guess, setGuess] = useState('')
    const [count, setCount] = useState(assignedCount)
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        setCount(assignedCount);
        setTimer(0);

    }, [setNumber]);

    useEffect(() => {
        let interval;
        // need to change back to 60
        if (timer < 60) {
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
        const num = parseInt(userGuess, 10);
        if (isNaN(num) || num < 0 || num > 100) {
            alert('Please enter a valid number between 1 and 100');
            return false;
        } else {
            return true;
        }
    }

    function handleGuess(userGuess) {
        if (validateInput(userGuess)) {
            setGuess(userGuess); 
        }
        if (guess == setNumber) {
            alert('You guessed correct!');
            // Call the win component here
        } 
    };

    function handleAttempts() {
        if (count === 0) {
            alert('You are out of attempts!');
            // Call the game over component here
        }
    }


  return (

    <View>
      <Text>Guess a Number Between 1 & 100</Text>
    <TextInput 
        placeholder='Enter your guess'
        value={guess}
        keyboardType='numeric'
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        // valide the input to make sure it is a number
        onChangeText = {text => setGuess(text)}
    />
    <Text>Attempts left: {count}</Text>
    <Text>Timer: {timer} </Text>

    <Button title="Use a Hint" onPress={() => alert(setNumber)} />
    
    <Button title='Submit Guess' 
        onPress={() => {
            if (validateInput(guess)) { 
                console.log("from submit");
                setCount(count - 1);
                console.log(count);
                handleGuess(guess);
            }
        }} 
    />
    </View>
  )
}

export default GuessNum