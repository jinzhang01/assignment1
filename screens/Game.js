import { View, Text } from 'react-native'
import React from 'react'
import GuessNum from '../components/GuessNum'
import Win from '../components/Win'
import Gameover from '../components/Gameover'

const Game = () => {
  return (
    <View>
      <Text>Game</Text>
      {/* <GuessNum />
        <Win /> */}
        <Gameover />
    </View>
  )
}

export default Game