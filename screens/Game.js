import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'
import GuessNum from '../components/GuessNum'
import Win from '../components/Win'
import Gameover from '../components/Gameover'
import CheckResult from '../components/CheckResult'

const Game = ({onStart}) => {
  
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [attempts, setAttempts] = useState(4);
  const [gameState, setGameState] = useState('active'); // 'active', 'check', 'win', 'over'
  const [result, setResult] = useState(''); // 'wrong', 'correct', 'overtime', 'overattempts'

  console.log(result);

  const restartConfirm = () => {
    onStart();
  }

  const resumeGame = () => {
    // Reset all state that manages game status
    setAttempts(attempts - 1);

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


  function reStart() {
    setRandomNumber(generateRandomNumber());
    setAttempts(4);
    setGameState('active');
  }


  return (

    <View>
      <View> 
        <Button title='Restart' onPress={() => restartConfirm()} />
        {/* <Button title='Restart' onPress={restartConfirm} /> */}
      </View>

      {gameState === 'active' && <GuessNum 
        onCheck={handleCheck} 
        setNumber={randomNumber} 
        assignedCount={attempts}
        guessResult={getGuess}
        onOver = {handleGameOver} 
        onWin = {handleWin}
        />}

      {gameState === 'check' && <CheckResult 
        resume={resumeGame} 
        onGameOver={handleGameOver} />}

      {gameState === 'win' && <Win onRestart={reStart} />}
      {gameState === 'over' && <Gameover final={result}/>}
    </View>
  );
};

export default Game;