import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'
import GuessNum from '../components/GuessNum'
import Win from '../components/Win'
import Gameover from '../components/Gameover'

const Game = () => {

  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [guess, setGuess] = useState(true);
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [attempts, setAttempts] = useState(4);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  // this function is Try Agian. The Restart needs t
  // Start page. 
  function reStart() {
    setRandomNumber(generateRandomNumber());
    setAttempts(4);
    setGuess(true);
    setGameOver(false);
    setWin(false);
  }


  return (

    <View>
      <View> 
        
        <Button title='Restart' onPress={() => reStart()} />
      </View>

      {guess && <GuessNum 
        setNumber={randomNumber} 
        assignedCount={attempts}
      />}

      {win && <Win />}
      {gameOver && <Gameover />}
    </View>
  );
};

export default Game;