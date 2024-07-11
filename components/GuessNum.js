import { View, Text, TextInput, Button } from 'react-native'; 
import React, { useState, useEffect } from 'react';



const GuessNum = ({setNumber, assignedCount, onCheck, guessResult, onOver, onWin}) => {
    const [guess, setGuess] = useState('')
    const [count, setCount] = useState(4)
    const [timer, setTimer] = useState(0)

    // useEffect(() => {
    //     setCount(assignedCount);
    //     setTimer(0);
    // }, [setNumber]);

    useEffect(() => {
        let interval;
        // need to change back to 60
        if (timer < 60) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        } else {
            console.log('You are out of time!');
            guessResult('overtime')
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
        console.log(guess);
        if (guess == setNumber) {
            onWin();
            guessResult('correct');

        } else {
            guessResult('wrong');
            onCheck()
            console.log(assignedCount); 
            if (assignedCount == 1) {
                onOver();
                guessResult('overattempts');
            }   
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
        onChangeText = {text => setGuess(text)}
    />
    <Text>Attempts left: {assignedCount}</Text>
    <Text>Timer: {timer} </Text>


    {/* make the hint become a range of numbers */}
    <Button title="Use a Hint" onPress={() => alert(setNumber)} />
    
    <Button title='Submit Guess' 
        onPress={() => {
            if (validateInput(guess)) { 
                handleGuess(guess);
            }
        }} 
    />
    </View>
  )
}

export default GuessNum