import { View, Text, Button, StyleSheet, SafeAreaView} from 'react-native'
import React, {useState} from 'react'
import GuessNum from '../components/GuessNum'
import Win from '../components/Win'
import Gameover from '../components/Gameover'
import CheckResult from '../components/CheckResult'
import Background from '../style/Background'
import colors from '../style/colors'

const Game = ({onStart}) => {
  
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [attempts, setAttempts] = useState(4);
  const [gameState, setGameState] = useState('active'); // 'active', 'check', 'win', 'over'
  const [result, setResult] = useState(''); // 'wrong', 'correct', 'overtime', 'overattempts'
  const [winNum, setWinNum] = useState("");

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
    setAttempts(attempts - 1); // to show the correct attempts
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

  function handleWinNum(data) {
    console.log("the win num is received", data);
    setWinNum(data);
  }


  return (
    <Background>
      <SafeAreaView style={styles.safeArea}> 

        <View style={styles.topContainer}>
            <View style={styles.restartButton}> 
              <Button title='Restart' onPress={() => restartConfirm()} />
              {/* <Button title='Restart' onPress={restartConfirm} /> */}
        </View>

          <View style={styles.container}>
            {gameState === 'active' && <GuessNum 
              onCheck={handleCheck} 
              setNumber={randomNumber} 
              assignedCount={attempts}
              guessResult={getGuess}
              onOver = {handleGameOver} 
              onWin = {handleWin}
              onWinNum = {handleWinNum}
              />}

            {gameState === 'check' && <CheckResult 
              resume={resumeGame} 
              onGameOver={handleGameOver} />}

            {gameState === 'win' && <Win onRestart={reStart} 
              finalAttempts={attempts}
              winNum={winNum} 
            />}
            {gameState === 'over' && <Gameover final={result}
              onRestart={reStart}
              />}
          </View>
        </View>
      </SafeAreaView>
    </Background>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  topContainer: {
    width: '100%',
    alignItems: 'flex-end',
    padding: 8,
  },
  restartButton: {
    backgroundColor: colors.light,
    borderRadius: 5,
    padding: 10,
    marginBottom:10,
  },

  container: {
    width: '100%',
    padding: 20,
    backgroundColor: colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: colors.secondary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
  },
});
export default Game;