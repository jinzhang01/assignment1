import { View, Text, TextInput, Button, StyleSheet } from 'react-native'; 
import React, { useState, useEffect } from 'react';
import colors from '../style/colors';

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
            // call the function to end the game
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
      <Text style={styles.subtitle}>Guess a Number Between 1 & 100</Text>
    <TextInput style={styles.textInput}
        placeholder='Enter your guess'
        value={guess}
        keyboardType='numeric'
        // valide the input to make sure it is a number
        onChangeText = {text => setGuess(text)}
    />
    <Text style={styles.textStyle}>Attempts left: {assignedCount}</Text>
    <Text style={styles.textStyle}>Timer: {timer} </Text>


    {/* make the hint become a range of numbers */}
    <View style={styles.buttonStyle}>
        <Button title="Use a Hint" onPress={() => alert(setNumber)} />
    </View>

    <View style={styles.buttonStyle}>
        <Button title='Submit Guess' 
            onPress={() => {
                if (validateInput(guess)) { 
                    handleGuess(guess);
                }
            }} 
        />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    subtitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.primary,
      marginTop: 10,
      marginBottom: 20,
      textAlign: 'left',

    },
    textInput: {
      height: 40, 
      borderColor: colors.primary, 
      borderBottomWidth: 1,
      marginBottom: 30,
    },

    textStyle: { 
      fontSize: 14, 
      color: colors.gary, 
      textAlign: 'center',
      marginVertical: 5,
    },
    
    buttonStyle: {
      backgroundColor: colors.buttonContinue,
      borderRadius: 5,
      margin: 5,
      fontcolor: colors.buttonText,
    },
  });

export default GuessNum