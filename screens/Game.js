import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'
import GuessNum from '../components/GuessNum'
import Win from '../components/Win'
import Gameover from '../components/Gameover'
import CheckResult from '../components/CheckResult'

const Game = () => {
  
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [attempts, setAttempts] = useState(4);
  const [gameState, setGameState] = useState('active'); // 'active', 'check', 'win', 'over'
  const [result, setResult] = useState(''); // 'wrong', 'correct', 'overtime', 'overattempts'

  console.log(result);

  const resumeGame = () => {
    // Reset all state that manages game status
    setGameState('active');
  }

  // get the test result from GuessNum.js
  const getGuess = (data) => {
    setResult(data);
  }


  const handleCheck = (data) => {
    setGameState('check');
  }
    
  const handleWin = () => {
    setGameState('win');
  }

  const handleGameOver = () => {
    setGameState('over');
  }


  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  // this function is Try Agian. The Restart needs to back
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
      {gameState === 'active' && <GuessNum 
        onCheck={handleCheck} 
        setNumber={randomNumber} 
        assignedCount={attempts} 
        guessResult={getGuess}/>}

      {gameState === 'check' && <CheckResult 
        onRestart={resumeGame} 
        onGameOver={handleGameOver} />}

      {gameState === 'win' && <Win onRestart={resumeGame} />}
      {gameState === 'over' && <Gameover />}
    </View>
  );
};

export default Game;