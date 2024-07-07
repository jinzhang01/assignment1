import { View, Text, Image} from 'react-native'
import React from 'react'



const Gameover = ({time},{counts}) => {
  const message1 = time > 60 ? 'You are out of time!' : null
  const message2 = counts > 4 ? 'You are out of guesses!' : null

  return (
    <View>
      <Text>The Game is Over!</Text>
        <Image 
            source={require('../res/sadface.jpg')} 
            style={{ width: 100, height: 100 }} 
        />
        
        <Text>{message1}, {message2}</Text>
    </View>
  )
}

export default Gameover