import { View, Text, Image, Button } from 'react-native'
import React from 'react'

const Win = ({onRestart}) => {
  return (
    <View>
      <Text>You guessed correct!</Text>
      <Text>Attempts used: {}</Text>
      <Image 
        source={{ uri: "https://picsum.photos/id/14/100/100" }} 
        style={{ width: 100, height: 100 }} 
        alt="win" 
      />
      <Button title='New Game' onPress={() =>onRestart()} />  
    </View>
  )
}

export default Win