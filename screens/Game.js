import { View, Text } from 'react-native'
import React from 'react'
import GuessNum from '../components/GuessNum'
import Win from '../components/Win'

const Game = () => {
  return (
    <View>
      <Text>Game</Text>
      <GuessNum />
        <Win />
    </View>
  )
}

export default Game