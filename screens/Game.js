import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'
import GuessNum from '../components/GuessNum'
import Win from '../components/Win'
import Gameover from '../components/Gameover'

const Game = () => {
  
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [attempts, setAttempts] = useState(4);
  const [gameState, setGameState] = useState('active'); // 'active', 'check', 'win', 'over'

  const restartGame = () => {
    // Reset all state that manages game status
    setGameState('active');
  }

  const handleCheck = () => {
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
      
      {gameState === 'active' && <GuessNum onWin={handleWin} onGameOver={handleGameOver} />}
      {gameState === 'check' && <CheckResult onWin={handleWin} onGameOver={handleGameOver} />}
      {gameState === 'win' && <Win onRestart={restartGame} />}
      {gameState === 'over' && <Gameover onRestart={restartGame} />}
    </View>
  );
};

export default Game;