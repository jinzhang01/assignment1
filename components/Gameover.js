import { View, Text, Image} from 'react-native'
import React from 'react'



const Gameover = ({final}) => {

  return (
    <View>
      <Text>The Game is Over!</Text>
        <Image 
            source={require('../res/sadface.jpg')} 
            style={{ width: 100, height: 100 }} 
        />
        {final == 'overtime' ? <Text> You are out of time! </Text> : ""}
        {final == 'overattempts' ? <Text> You are out of attempts! </Text> : ""}
    </View>
  )
}

export default Gameover