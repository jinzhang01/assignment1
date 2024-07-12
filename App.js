import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Start from './screens/Start';
import Game from './screens/Game';

export default function App() {
  const [page, setPage] = useState('start'); // 'start', 'game'

  const handleStart = () => {
    console.log('Switching to start screen');
    setPage('start');
  }

  const handleGame = () => {
    console.log('Switching to game screen');
    setPage('game');
  }

  return (
    
    <View style={styles.container}>
      {page === 'start' && <Start onGame={handleGame}/>}
      {page === 'game' && <Game onStart={handleStart}/>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
